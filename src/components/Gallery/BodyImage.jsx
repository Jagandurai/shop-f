"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";
import styles from "./BodyImage.module.scss";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`;
const ITEMS_PER_PAGE = 30;
const MOBILE_BREAKPOINT = 768;
const PIN_ICON_URL =
  "https://img.icons8.com/?size=100&id=2EuI26KqYJ6b&format=png&color=000000";

const getImageId = (image) => image?.id || image?._id;

/**
 * Sharp gallery images.
 * If the image is hosted on Cloudinary, ask for a high-quality version at a
 * size that matches the screen (retina phones/laptops get a bigger file).
 * Any other host is returned unchanged.
 */
const GALLERY_WIDTHS = [600, 900, 1400];
const GALLERY_SIZES = "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";

const isCloudinaryUrl = (url) =>
  typeof url === "string" &&
  url.includes("res.cloudinary.com") &&
  /\/upload\/v\d+\//.test(url); // only when no transformation is set yet

const getGalleryImageUrl = (url, width) =>
  isCloudinaryUrl(url)
    ? url.replace("/upload/", `/upload/c_limit,w_${width},q_auto:best,f_auto/`)
    : url;

const getGallerySrcSet = (url) =>
  isCloudinaryUrl(url)
    ? GALLERY_WIDTHS.map((w) => `${getGalleryImageUrl(url, w)} ${w}w`).join(", ")
    : undefined;

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

/**
 * Pinned images always come first.
 * Order of everything else is kept EXACTLY as it is (stable),
 * unless `shuffle` is true (only used for a fresh first-page load).
 * This is what stops old images from jumping around.
 */
const reorderGalleryImages = (images, shuffle = false) => {
  const pinnedImages = images.filter((image) => Boolean(image?.isPinned));
  const regularImages = images.filter((image) => !image?.isPinned);

  return [
    ...pinnedImages,
    ...(shuffle ? shuffleArray(regularImages) : regularImages),
  ];
};

const parsePagination = (res, fallbackPage) => {
  const pagination = res.data?.pagination || {};
  const totalPages = Number(pagination.pages || 0);
  const resolvedPage = Number(pagination.page || fallbackPage);
  const resolvedTotal = Number(pagination.total || 0);
  const resolvedHasNextPage =
    typeof pagination.hasNextPage === "boolean"
      ? pagination.hasNextPage
      : resolvedPage < totalPages;

  return { resolvedPage, resolvedTotal, resolvedHasNextPage };
};

export default function BodyImage() {
  const router = useRouter();
  const loadMoreRef = useRef(null);
  const observerRef = useRef(null);

  // Guards against duplicate / stale requests
  const requestIdRef = useRef(0);
  const isFetchingRef = useRef(false);
  const favoriteIdsRef = useRef([]);

  // what the visitor tried to do before logging in (done automatically after login)
  const pendingFavoriteImageRef = useRef(null);
  const openLikedAfterLoginRef = useRef(false);

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

  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(false);
  const [favoriteOperationPending, setFavoriteOperationPending] = useState(
    new Set()
  );

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [columnCount, setColumnCount] = useState(4);

  // keep latest favourites in a ref so fetching never depends on them
  useEffect(() => {
    favoriteIdsRef.current = favoriteIds;
  }, [favoriteIds]);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedEmail = localStorage.getItem("userEmail");

    if (storedLogin === "true" && storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
      checkIfAdmin(storedEmail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      setIsMobile(width <= MOBILE_BREAKPOINT);

      if (width <= 768) {
        setColumnCount(2);
      } else if (width <= 1024) {
        setColumnCount(3);
      } else {
        setColumnCount(4);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /**
   * Liked filter: the backend has no "liked" endpoint filter, so we walk
   * all pages once and keep only favourited images.
   */
  const fetchAllLikedImages = useCallback(async () => {
    let page = 1;
    let hasMore = true;
    let all = [];

    while (hasMore && page <= 100) {
      const res = await axios.get(API_BASE_URL, {
        params: { page, limit: ITEMS_PER_PAGE, sort: sortOrder },
      });

      const data = Array.isArray(res.data?.data) ? res.data.data : [];
      const { resolvedHasNextPage } = parsePagination(res, page);

      all = [...all, ...data];
      hasMore = resolvedHasNextPage;
      page += 1;
    }

    return all.filter((image) =>
      favoriteIdsRef.current.includes(getImageId(image))
    );
  }, [sortOrder]);

  const fetchImages = useCallback(
    async ({ page = 1, append = false } = {}) => {
      // ignore duplicate "load more" calls while one is running
      if (append && isFetchingRef.current) return;

      const requestId = ++requestIdRef.current;
      isFetchingRef.current = true;

      try {
        if (append) {
          setIsFetchingMore(true);
        } else {
          setIsLoading(true);
        }

        // ---------- LIKED ----------
        if (typeFilter === "liked") {
          const liked = await fetchAllLikedImages();
          if (requestId !== requestIdRef.current) return;

          setGalleryImages(reorderGalleryImages(liked));
          setCurrentPage(1);
          setTotalImages(liked.length);
          setHasNextPage(false);
          return;
        }

        // ---------- NORMAL ----------
        const params = {
          page,
          limit: ITEMS_PER_PAGE,
          sort: sortOrder,
        };

        if (typeFilter !== "all") {
          params.type = typeFilter;
        }

        const res = await axios.get(API_BASE_URL, { params });
        if (requestId !== requestIdRef.current) return;

        const data = Array.isArray(res.data?.data) ? res.data.data : [];
        const { resolvedPage, resolvedTotal, resolvedHasNextPage } =
          parsePagination(res, page);

        setGalleryImages((prev) => {
          if (!append) {
            // shuffle only on a fresh first-page load
            return reorderGalleryImages(data, true);
          }

          // APPEND ONLY: old images keep their exact position
          const existingIds = new Set(prev.map(getImageId));
          const newImages = data.filter(
            (image) => !existingIds.has(getImageId(image))
          );

          return [...prev, ...newImages];
        });

        setCurrentPage(resolvedPage);
        setTotalImages(resolvedTotal);
        setHasNextPage(resolvedHasNextPage);
      } catch (error) {
        if (requestId !== requestIdRef.current) return;

        console.error("Error fetching images:", error);
        toast.error("Failed to load gallery");

        if (!append) {
          setGalleryImages([]);
          setTotalImages(0);
        }
        setHasNextPage(false);
      } finally {
        if (requestId === requestIdRef.current) {
          isFetchingRef.current = false;
          setIsLoading(false);
          setIsFetchingMore(false);
        }
      }
    },
    [sortOrder, typeFilter, fetchAllLikedImages]
  );

  const resetAndFetchImages = useCallback(async () => {
    isFetchingRef.current = false;
    setCurrentPage(1);
    setHasNextPage(false);
    await fetchImages({ page: 1, append: false });
  }, [fetchImages]);

  // Runs ONLY when the filter or sort changes (not when favourites change)
  useEffect(() => {
    resetAndFetchImages();
  }, [resetAndFetchImages]);

  const loadMoreImages = useCallback(async () => {
    if (isLoading || isFetchingRef.current || !hasNextPage) return;
    await fetchImages({ page: currentPage + 1, append: true });
  }, [currentPage, fetchImages, hasNextPage, isLoading]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const imageId = getImageId(image);

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
        reorderGalleryImages(prev.filter((img) => getImageId(img) !== imageId))
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
    const imageId = getImageId(image);

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

      toast.success("Image type updated successfully");

      const noLongerMatchesFilter =
        typeFilter !== "all" &&
        typeFilter !== "liked" &&
        updatedImage?.type !== typeFilter;

      if (noLongerMatchesFilter) {
        // remove it in place (no refetch, no reshuffle)
        setGalleryImages((prev) =>
          prev.filter((img) => getImageId(img) !== imageId)
        );
        setTotalImages((prev) => Math.max(prev - 1, 0));
        closePreview();
      } else {
        setGalleryImages((prev) =>
          prev.map((img) =>
            getImageId(img) === imageId
              ? { ...img, type: updatedImage.type }
              : img
          )
        );
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
    const imageId = getImageId(image);

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
      const isNowPinned = Boolean(updatedImage?.isPinned);

      setPreviewPinned(isNowPinned);

      // update in place + stable reorder (no refetch, no random shuffle)
      setGalleryImages((prev) =>
        reorderGalleryImages(
          prev.map((img) =>
            getImageId(img) === imageId ? { ...img, isPinned: isNowPinned } : img
          )
        )
      );

      toast.success(
        isNowPinned ? "Image pinned successfully" : "Image unpinned successfully"
      );

      // the image moved, so close the preview to avoid showing the wrong one
      closePreview();
    } catch (error) {
      console.error("Pin update error:", error);
      toast.error("Failed to update pin status");
    } finally {
      setIsUpdatingPin(false);
    }
  };

  /**
   * Shared login finish (used by the top Google button AND the popup that
   * opens when a logged-out visitor taps a heart / the Liked tab).
   */
  const completeLogin = async (email) => {
    let admin = false;

    try {
      const res = await axios.post(`${API_BASE_URL}/check-admin`, { email });
      admin = Boolean(res.data?.success);
    } catch (error) {
      console.error("Admin check error:", error);
    }

    // If they tapped a heart before logging in, save that like NOW,
    // before favourites are loaded, so it shows up filled right away.
    const pendingImage = pendingFavoriteImageRef.current;
    pendingFavoriteImageRef.current = null;

    if (pendingImage) {
      const pendingId = getImageId(pendingImage);

      try {
        await axios.post(`${API_BASE_URL}/${pendingId}/favorite`, null, {
          headers: { "x-user-email": email },
        });
        toast.success("Added to favourites");
      } catch (error) {
        // 409 = already liked earlier, that's fine
        if (error.response?.status !== 409) {
          console.error("Pending favourite error:", error);
          toast.error("Failed to update favourite");
        }
      }
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    setIsAdmin(admin);
    setUserEmail(email);
    setIsLoggedIn(true);

    toast.success(`Welcome: ${email}`);
  };

  // Top "Sign in with Google" button (returns an ID token)
  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      await completeLogin(decoded.email);
    } catch (error) {
      console.error("JWT/Login error:", error);
      toast.error("Failed to process login.");
    }
  };

  // Opens the Google login popup from anywhere on the page (no need to scroll up)
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );

        if (!data?.email) throw new Error("No email returned by Google");

        await completeLogin(data.email);
      } catch (error) {
        console.error("Google popup login error:", error);
        pendingFavoriteImageRef.current = null;
        openLikedAfterLoginRef.current = false;
        toast.error("Failed to process login.");
      }
    },
    onError: () => {
      pendingFavoriteImageRef.current = null;
      openLikedAfterLoginRef.current = false;
      toast.error("Google Login Failed");
    },
    // popup closed by the visitor
    onNonOAuthError: () => {
      pendingFavoriteImageRef.current = null;
      openLikedAfterLoginRef.current = false;
    },
  });

  const startGoogleLogin = ({ favoriteImage = null, openLiked = false } = {}) => {
    pendingFavoriteImageRef.current = favoriteImage;
    openLikedAfterLoginRef.current = openLiked;
    toast.info("Please sign in with Google to continue");
    googleLogin();
  };

  const handleLogout = (showToast = true) => {
    googleLogout();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    setIsAdmin(false);
    setFavoriteIds([]);

    if (typeFilter === "liked") {
      setTypeFilter("all");
    }

    if (showToast) {
      toast.info("Logged out successfully");
    }
  };

  const loadFavorites = useCallback(async () => {
    if (!isLoggedIn || !userEmail) {
      setFavoriteIds([]);
      return;
    }

    try {
      setIsLoadingFavorites(true);
      const res = await axios.get(`${API_BASE_URL}/favorites`, {
        headers: {
          "x-user-email": userEmail,
        },
      });

      const imageIds = res.data?.data || [];
      favoriteIdsRef.current = imageIds; // ready before the Liked tab fetches
      setFavoriteIds(imageIds);

      if (openLikedAfterLoginRef.current) {
        openLikedAfterLoginRef.current = false;
        setTypeFilter("liked");
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
      setFavoriteIds([]);
    } finally {
      setIsLoadingFavorites(false);
    }
  }, [isLoggedIn, userEmail]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const isFavorite = useCallback(
    (image) => {
      const imageId = getImageId(image);
      return favoriteIds.includes(imageId);
    },
    [favoriteIds]
  );

  const handleFavoriteToggle = async (image, event) => {
    event.stopPropagation();

    if (!isLoggedIn) {
      // open Google login right here; the like is saved automatically after login
      startGoogleLogin({ favoriteImage: image });
      return;
    }

    const imageId = getImageId(image);
    if (!imageId) {
      toast.error("Invalid image");
      return;
    }

    if (favoriteOperationPending.has(imageId)) {
      return;
    }

    setFavoriteOperationPending((prev) => new Set(prev).add(imageId));

    try {
      const currentlyFavorited = isFavorite(image);

      if (currentlyFavorited) {
        await axios.delete(`${API_BASE_URL}/${imageId}/favorite`, {
          headers: {
            "x-user-email": userEmail,
          },
        });
        setFavoriteIds((prev) => prev.filter((id) => id !== imageId));

        // in the Liked tab, remove it from the grid right away
        if (typeFilter === "liked") {
          setGalleryImages((prev) =>
            prev.filter((img) => getImageId(img) !== imageId)
          );
          setTotalImages((prev) => Math.max(prev - 1, 0));
          closePreview();
        }

        toast.success("Removed from favourites");
      } else {
        await axios.post(`${API_BASE_URL}/${imageId}/favorite`, null, {
          headers: {
            "x-user-email": userEmail,
          },
        });
        setFavoriteIds((prev) => [...prev, imageId]);
        toast.success("Added to favourites");
      }
    } catch (error) {
      console.error("Favorite toggle error:", error);
      if (error.response?.status === 409) {
        toast.error("Already in favourites");
      } else if (error.response?.status === 404) {
        toast.error("Image not found");
      } else {
        toast.error("Failed to update favourite");
      }
    } finally {
      setFavoriteOperationPending((prev) => {
        const newSet = new Set(prev);
        newSet.delete(imageId);
        return newSet;
      });
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

  const currentPreviewImage =
    previewImageIndex !== null ? previewImages[previewImageIndex] : null;

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

      {isLoggedIn && !isAdmin && (
        <div className={styles.userActions}>
          <button onClick={() => handleLogout()} className={styles.logoutButton}>
            Logout
          </button>
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

          <button onClick={() => handleLogout()} className={styles.logoutButton}>
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
          <button
            onClick={() => {
              if (!isLoggedIn) {
                startGoogleLogin({ openLiked: true });
                return;
              }
              setTypeFilter("liked");
            }}
            className={typeFilter === "liked" ? styles.active : ""}
          >
            Liked
          </button>
        </div>

        <div className={styles.toolbarMeta}>
          {!isLoading && totalImages > 0 && (
            <div className={styles.galleryStats}>
              {galleryImages.length >= totalImages
                ? `Showing all ${totalImages} images`
                : `Showing ${galleryImages.length} of ${totalImages} images`}
            </div>
          )}

          <div className={styles.sortWrapper}>
            <SlidersHorizontal size={14} className={styles.sortIcon} />
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.sortSelect}
              aria-label="Sort images"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Single CSS grid: images fill row by row (1 2 / 3 4 / 5 6 ...) */}
      <div className={styles.gallery} style={{ "--column-count": columnCount }}>
        {isLoading ? (
          Array.from({ length: columnCount * 2 }).map((_, index) => (
            <div key={`skeleton-${index}`} className={styles.skeletonItem} />
          ))
        ) : galleryImages.length > 0 ? (
          <>
            {galleryImages.map((image, index) => {
              const imageId = getImageId(image);

              return (
                <div className={styles.item} key={imageId || index}>
                  {image.isPinned && (
                    <div className={styles.pinnedBadge}>
                      <img src={PIN_ICON_URL} alt="Pinned" />
                    </div>
                  )}

                  <button
                    className={styles.favoriteButton}
                    onClick={(e) => handleFavoriteToggle(image, e)}
                    aria-label={
                      isFavorite(image)
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                    title={
                      isFavorite(image)
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                    disabled={favoriteOperationPending.has(imageId)}
                  >
                    <Heart
                      size={20}
                      fill={isFavorite(image) ? "#e91e63" : "none"}
                      color={isFavorite(image) ? "#e91e63" : "#000"}
                      strokeWidth={isFavorite(image) ? 0 : 2}
                    />
                  </button>

                  <img
                    src={getGalleryImageUrl(image.image_url, 900)}
                    srcSet={getGallerySrcSet(image.image_url)}
                    sizes={GALLERY_SIZES}
                    decoding="async"
                    alt={
                      image.type
                        ? `${image.type} gallery image ${index + 1}`
                        : `Gallery image ${index + 1}`
                    }
                    onClick={() => handleImageClick(index)}
                    loading="lazy"
                  />
                </div>
              );
            })}

            {/* placeholders at the bottom while the next page loads */}
            {isFetchingMore &&
              Array.from({ length: columnCount }).map((_, index) => (
                <div
                  key={`loading-more-${index}`}
                  className={styles.skeletonItem}
                />
              ))}
          </>
        ) : (
          <p className={styles.noImages}>
            {typeFilter === "liked"
              ? "You haven't liked any images yet."
              : "No images found for the selected filter."}
          </p>
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
              <X size={18} />
            </button>

            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={prevImage}
            >
              <ChevronLeft size={20} />
            </button>

            <div className={styles.previewContent}>
              <img
                src={previewImage}
                alt="Preview"
                className={styles.previewImage}
              />

              {currentPreviewImage && (
                <button
                  className={styles.previewFavoriteButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(currentPreviewImage, e);
                  }}
                  aria-label={
                    isFavorite(currentPreviewImage)
                      ? "Remove from favourites"
                      : "Add to favourites"
                  }
                  title={
                    isFavorite(currentPreviewImage)
                      ? "Remove from favourites"
                      : "Add to favourites"
                  }
                  disabled={favoriteOperationPending.has(
                    getImageId(currentPreviewImage)
                  )}
                >
                  <Heart
                    size={18}
                    fill={isFavorite(currentPreviewImage) ? "#e91e63" : "none"}
                    color={isFavorite(currentPreviewImage) ? "#e91e63" : "#fff"}
                    strokeWidth={isFavorite(currentPreviewImage) ? 0 : 2}
                  />
                </button>
              )}

              {isLoggedIn && isAdmin && currentPreviewImage && (
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
                      handleImageDelete(currentPreviewImage);
                    }}
                    aria-label="Delete image"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
