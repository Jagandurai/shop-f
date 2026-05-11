"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import styles from "./BodyImage.module.scss";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`;
const ITEMS_PER_PAGE = 30;
const MOBILE_BREAKPOINT = 768;
const PIN_ICON_URL =
  "https://img.icons8.com/?size=100&id=2EuI26KqYJ6b&format=png&color=000000";

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const reorderGalleryImages = (images) => {
  const pinnedImages = images.filter((image) => Boolean(image?.isPinned));
  const regularImages = images.filter((image) => !image?.isPinned);

  return [...pinnedImages, ...shuffleArray(regularImages)];
};

export default function BodyImage() {
  const router = useRouter();
  const loadMoreRef = useRef(null);
  const observerRef = useRef(null);

  const [galleryImages, setGalleryImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isUpdatingType, setIsUpdatingType] = useState(false);
  const [isUpdatingPin, setIsUpdatingPin] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(null);
  const [previewType, setPreviewType] = useState("other");
  const [previewPinned, setPreviewPinned] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedLogin === "true" && storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
      checkIfAdmin(storedEmail);
    }
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const fetchImages = useCallback(
    async ({ page = 1, append = false } = {}) => {
      try {
        if (append) {
          setIsFetchingMore(true);
        } else {
          setIsLoading(true);
        }

        const params = {
          page,
          limit: ITEMS_PER_PAGE,
          sort: sortOrder,
        };

        if (typeFilter !== "all") {
          params.type = typeFilter;
        }

        const res = await axios.get(API_BASE_URL, { params });

        const data = Array.isArray(res.data?.data) ? res.data.data : [];
        const pagination = res.data?.pagination || {};
        const totalPages = Number(pagination.pages || 0);
        const resolvedPage = Number(pagination.page || page);
        const resolvedTotal = Number(pagination.total || 0);
        const resolvedHasNextPage =
          typeof pagination.hasNextPage === "boolean"
            ? pagination.hasNextPage
            : resolvedPage < totalPages;

        setGalleryImages((prev) => {
          const mergedImages = append ? [...prev, ...data] : data;
          return reorderGalleryImages(mergedImages);
        });

        setCurrentPage(resolvedPage);
        setTotalImages(resolvedTotal);
        setHasNextPage(resolvedHasNextPage);
      } catch (error) {
        console.error("Error fetching images:", error);
        toast.error("Failed to load gallery");
        if (!append) {
          setGalleryImages([]);
          setTotalImages(0);
        }
        setHasNextPage(false);
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
      }
    },
    [sortOrder, typeFilter]
  );

  const resetAndFetchImages = useCallback(async () => {
    setGalleryImages([]);
    setCurrentPage(1);
    setTotalImages(0);
    setHasNextPage(false);
    await fetchImages({ page: 1, append: false });
  }, [fetchImages]);

  useEffect(() => {
    resetAndFetchImages();
  }, [resetAndFetchImages]);

  const loadMoreImages = useCallback(async () => {
    if (isLoading || isFetchingMore || !hasNextPage) return;
    await fetchImages({ page: currentPage + 1, append: true });
  }, [currentPage, fetchImages, hasNextPage, isFetchingMore, isLoading]);

  useEffect(() => {
    if (!isMobile) return;
    if (!loadMoreRef.current) return;
    if (!hasNextPage) return;
    if (isLoading || isFetchingMore) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          loadMoreImages();
        }
      },
      {
        root: null,
        rootMargin: "300px",
        threshold: 0,
      }
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    isMobile,
    hasNextPage,
    isLoading,
    isFetchingMore,
    loadMoreImages,
    galleryImages.length,
  ]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!previewImage) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closePreview();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [previewImage, previewImageIndex, galleryImages]);

  const checkIfAdmin = async (email) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/check-admin`, { email });

      if (res.data?.success) {
        setIsAdmin(true);
      } else {
        handleLogout(false);
        toast.error("You are not an admin");
      }
    } catch (error) {
      console.error("Admin check error:", error);
    }
  };

  const compressImage = (file, quality = 0.9) => {
    return new Promise((resolve) => {
      if (file.size <= 9 * 1024 * 1024) {
        resolve(file);
        return;
      }

      toast.info("Compressing image...");

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        const img = new window.Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
            (blob) => {
              resolve(new File([blob], file.name, { type: file.type }));
            },
            file.type,
            quality
          );
        };
      };
    });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files?.[0] || null);
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      toast.warn("Please choose a file first");
      return;
    }

    if (!selectedType) {
      toast.warn("Please select a type");
      return;
    }

    let fileToUpload = selectedFile;

    if (selectedFile.size > 9 * 1024 * 1024) {
      fileToUpload = await compressImage(selectedFile, 0.9);
    }

    const formData = new FormData();
    formData.append("image", fileToUpload);
    formData.append("type", selectedType);

    const uploadToast = toast.loading("Uploading...");

    try {
      await axios.post(API_BASE_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-user-email": userEmail,
        },
      });

      await resetAndFetchImages();
      setSelectedFile(null);
      setSelectedType("");

      toast.update(uploadToast, {
        render: "Image uploaded successfully!",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast.update(uploadToast, {
        render: "Failed to upload image",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
    }
  };

  const handleImageDelete = async (image) => {
    const imageId = image?.id || image?._id;

    if (!imageId) {
      toast.error("Invalid image id");
      return;
    }

    try {
      await axios.delete(`${API_BASE_URL}/${imageId}`, {
        headers: {
          "x-user-email": userEmail,
        },
      });

      setGalleryImages((prev) =>
        reorderGalleryImages(
          prev.filter((img) => (img.id || img._id) !== imageId)
        )
      );

      setTotalImages((prev) => Math.max(prev - 1, 0));
      closePreview();
      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete image");
    }
  };

  const handleUpdateImageType = async () => {
    const image = previewImages[previewImageIndex];
    const imageId = image?.id || image?._id;

    if (!imageId) {
      toast.error("Invalid image id");
      return;
    }

    try {
      setIsUpdatingType(true);

      const res = await axios.patch(
        `${API_BASE_URL}/${imageId}/type`,
        { type: previewType },
        {
          headers: {
            "x-user-email": userEmail,
          },
        }
      );

      const updatedImage = res.data?.data;

      setGalleryImages((prev) =>
        reorderGalleryImages(
          prev.map((img) =>
            (img.id || img._id) === imageId
              ? { ...img, type: updatedImage.type }
              : img
          )
        )
      );

      toast.success("Image type updated successfully");

      if (typeFilter !== "all" && previewType !== typeFilter) {
        closePreview();
        await resetAndFetchImages();
      }
    } catch (error) {
      console.error("Update type error:", error);
      toast.error("Failed to update image type");
    } finally {
      setIsUpdatingType(false);
    }
  };

  const handleTogglePin = async () => {
    const image = previewImages[previewImageIndex];
    const imageId = image?.id || image?._id;

    if (!imageId) {
      toast.error("Invalid image id");
      return;
    }

    try {
      setIsUpdatingPin(true);

      const nextPinnedValue = !previewPinned;

      const res = await axios.patch(
        `${API_BASE_URL}/${imageId}/pin`,
        { isPinned: nextPinnedValue },
        {
          headers: {
            "x-user-email": userEmail,
          },
        }
      );

      const updatedImage = res.data?.data;

      setPreviewPinned(Boolean(updatedImage?.isPinned));

      setGalleryImages((prev) =>
        reorderGalleryImages(
          prev.map((img) =>
            (img.id || img._id) === imageId
              ? { ...img, isPinned: Boolean(updatedImage?.isPinned) }
              : img
          )
        )
      );

      toast.success(
        updatedImage?.isPinned
          ? "Image pinned successfully"
          : "Image unpinned successfully"
      );

      await resetAndFetchImages();

      if (typeFilter !== "all" && updatedImage?.type !== typeFilter) {
        closePreview();
      }
    } catch (error) {
      console.error("Pin update error:", error);
      toast.error("Failed to update pin status");
    } finally {
      setIsUpdatingPin(false);
    }
  };

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const email = decoded.email;

      setIsLoggedIn(true);
      setUserEmail(email);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      const res = await axios.post(`${API_BASE_URL}/check-admin`, { email });

      if (res.data?.success) {
        setIsAdmin(true);
        toast.success(`Welcome: ${email}`);
      } else {
        handleLogout(false);
        toast.error("You are not an admin");
      }
    } catch (error) {
      console.error("JWT/Login error:", error);
      toast.error("Failed to process login.");
    }
  };

  const handleLogout = (showToast = true) => {
    googleLogout();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    setIsAdmin(false);

    if (showToast) {
      toast.info("Logged out successfully");
    }
  };

  const previewImages = useMemo(() => {
    return Array.isArray(galleryImages) ? galleryImages : [];
  }, [galleryImages]);

  const handleImageClick = (index) => {
    const image = previewImages[index];
    setPreviewImage(image?.image_url || null);
    setPreviewImageIndex(index);
    setPreviewType(image?.type || "other");
    setPreviewPinned(Boolean(image?.isPinned));
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewImageIndex(null);
    setPreviewType("other");
    setPreviewPinned(false);
  };

  const nextImage = () => {
    if (!previewImages.length || previewImageIndex === null) return;

    const nextIndex = (previewImageIndex + 1) % previewImages.length;
    const image = previewImages[nextIndex];

    setPreviewImage(image?.image_url || null);
    setPreviewImageIndex(nextIndex);
    setPreviewType(image?.type || "other");
    setPreviewPinned(Boolean(image?.isPinned));
  };

  const prevImage = () => {
    if (!previewImages.length || previewImageIndex === null) return;

    const prevIndex =
      previewImageIndex === 0 ? previewImages.length - 1 : previewImageIndex - 1;

    const image = previewImages[prevIndex];

    setPreviewImage(image?.image_url || null);
    setPreviewImageIndex(prevIndex);
    setPreviewType(image?.type || "other");
    setPreviewPinned(Boolean(image?.isPinned));
  };

  const handleBookNowClick = () => {
    router.push("/service");
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className={styles.galleryContainer}>
      <p className={styles.description}>
        Explore our amazing Makeup & Hairstyle collections.
      </p>

      <button onClick={handleBookNowClick} className={styles.bookButton}>
        View Our Service
      </button>

      {!isLoggedIn && (
        <div className={styles.loginButtonWrapper}>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => toast.error("Google Login Failed")}
          />
        </div>
      )}

      {isLoggedIn && isAdmin && (
        <div className={styles.actions}>
          <input type="file" accept="image/*" onChange={handleFileChange} />

          <div className={styles.checkboxGroup}>
            <label className={selectedType === "makeup" ? styles.active : ""}>
              <input
                type="radio"
                name="imageType"
                value="makeup"
                checked={selectedType === "makeup"}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              Makeup
            </label>

            <label className={selectedType === "hairstyle" ? styles.active : ""}>
              <input
                type="radio"
                name="imageType"
                value="hairstyle"
                checked={selectedType === "hairstyle"}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              Hairstyle
            </label>
          </div>

          <button
            onClick={handleUploadClick}
            disabled={!selectedFile || !selectedType}
            className={styles.uploadButton}
          >
            Upload Files
          </button>

          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      )}

      <div className={styles.toolbar}>
        <div className={styles.filterButtons}>
          <button
            onClick={() => setTypeFilter("all")}
            className={typeFilter === "all" ? styles.active : ""}
          >
            All
          </button>
          <button
            onClick={() => setTypeFilter("makeup")}
            className={typeFilter === "makeup" ? styles.active : ""}
          >
            Makeup
          </button>
          <button
            onClick={() => setTypeFilter("hairstyle")}
            className={typeFilter === "hairstyle" ? styles.active : ""}
          >
            Hairstyle
          </button>
        </div>

        <div className={styles.sortWrapper}>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {!isLoading && totalImages > 0 && (
        <div className={styles.galleryStats}>
          {galleryImages.length >= totalImages
            ? `Showing all ${totalImages} images`
            : `Showing ${galleryImages.length} of ${totalImages} images`}
        </div>
      )}

      <div className={styles.gallery}>
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={styles.skeletonItem}></div>
          ))
        ) : galleryImages.length > 0 ? (
          galleryImages.map((image, index) => (
            <div className={styles.item} key={image.id || image._id || index}>
              {image.isPinned && (
                <div className={styles.pinnedBadge}>
                  <img src={PIN_ICON_URL} alt="Pinned" />
                </div>
              )}

              <img
                src={image.image_url}
                alt={
                  image.type
                    ? `${image.type} gallery image ${index + 1}`
                    : `Gallery image ${index + 1}`
                }
                onClick={() => handleImageClick(index)}
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <p className={styles.noImages}>No images found for the selected filter.</p>
        )}
      </div>

      {!isLoading && !isMobile && hasNextPage && (
        <div className={styles.pagination}>
          <button
            onClick={loadMoreImages}
            disabled={isFetchingMore}
            className={styles.loadMoreButton}
          >
            {isFetchingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}

      {!isLoading && isMobile && hasNextPage && (
        <div ref={loadMoreRef} className={styles.infiniteScrollTrigger}>
          {isFetchingMore ? "Loading more..." : "Scroll for more"}
        </div>
      )}

      {previewImage && (
        <div
          className={styles.previewOverlay}
          onClick={closePreview}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
              closePreview();
            }
          }}
        >
          <div
            className={styles.previewContainer}
            {...swipeHandlers}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closePreview}>
              <X size={24} />
            </button>

            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={prevImage}
            >
              <ChevronLeft size={28} />
            </button>

            <div className={styles.previewContent}>
              <img
                src={previewImage}
                alt="Preview"
                className={styles.previewImage}
              />

              {isLoggedIn && isAdmin && previewImageIndex !== null && (
                <div className={styles.typeEditor}>
                  <select
                    value={previewType}
                    onChange={(e) => setPreviewType(e.target.value)}
                    className={styles.typeSelect}
                  >
                    <option value="other">Other</option>
                    <option value="makeup">Makeup</option>
                    <option value="hairstyle">Hairstyle</option>
                    <option value="nails">Nails</option>
                    <option value="facial">Facial</option>
                    <option value="bridal">Bridal</option>
                  </select>

                  <button
                    onClick={handleUpdateImageType}
                    className={styles.saveTypeButton}
                    disabled={isUpdatingType}
                  >
                    {isUpdatingType ? "Saving..." : "Save Type"}
                  </button>

                  <button
                    onClick={handleTogglePin}
                    className={styles.pinButton}
                    disabled={isUpdatingPin}
                  >
                    {isUpdatingPin
                      ? "Saving..."
                      : previewPinned
                      ? "Unpin"
                      : "Pin to Top"}
                  </button>

                  <button
                    className={styles.deleteIcon}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageDelete(previewImages[previewImageIndex]);
                    }}
                    aria-label="Delete image"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="black"
                    >
                      <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            <button
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={nextImage}
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
}