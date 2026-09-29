"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
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
import { useAuth } from "@/src/context/AuthContext";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`;
const ITEMS_PER_PAGE = 30;
const MOBILE_BREAKPOINT = 768;
const PIN_ICON_URL =
  "https://img.icons8.com/?size=100&id=2EuI26KqYJ6b&format=png&color=000000";
const MAX_FETCH_PAGES = 200;

const getImageId = (image) => image?.id || image?._id;

/* Google Material icons (inline SVG, no extra package needed) */
const MATERIAL_ICONS = {
  save: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z",
  pin: "M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z",
  favorite:
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  favoriteBorder:
    "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z",
  share:
    "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z",
  delete:
    "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
};

const MaterialIcon = ({ name, slash = false, size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d={MATERIAL_ICONS[name]} />
    {slash && (
      <path
        d="M3.5 3.5l17 17"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
    )}
  </svg>
);

const GALLERY_WIDTHS = [600, 900, 1400];
const GALLERY_SIZES = "(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw";
const PREVIEW_WIDTH = 1920;
const PREVIEW_BLUR_WIDTH = 100;

const isCloudinaryUrl = (url) =>
  typeof url === "string" &&
  url.includes("res.cloudinary.com") &&
  /\/upload\/v\d+\//.test(url);

const getGalleryImageUrl = (url, width) =>
  isCloudinaryUrl(url)
    ? url.replace("/upload/", `/upload/c_limit,w_${width},q_auto:best,f_auto/`)
    : url;

const getPreviewImageUrl = (url) =>
  isCloudinaryUrl(url)
    ? url.replace("/upload/", `/upload/c_limit,w_${PREVIEW_WIDTH},q_auto:good,f_auto/`)
    : url;

const getPreviewBlurUrl = (url) =>
  isCloudinaryUrl(url)
    ? url.replace("/upload/", `/upload/c_limit,w_${PREVIEW_BLUR_WIDTH},q_auto:low,f_auto,blur:1000/`)
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

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://lovelylooks.in"
).replace(/\/$/, "");

const getShareSlug = (url) => {
  if (typeof url !== "string") return null;
  const match = url.match(
    /\/gallery\/([A-Za-z0-9_-]+)(?:\.[A-Za-z0-9]+)?(?:\?.*)?$/
  );
  return match ? match[1] : null;
};

const getShareUrl = (image) => {
  const slug = getShareSlug(image?.image_url);
  return slug ? `${SITE_URL}/look/${slug}` : image?.image_url || "";
};

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
  const resolvedHasNextPage =
    typeof pagination.hasNextPage === "boolean"
      ? pagination.hasNextPage
      : resolvedPage < totalPages;
  return { resolvedHasNextPage };
};

export default function BodyImage() {
  const loadMoreRef = useRef(null);
  const observerRef = useRef(null);
  const openedFromLinkRef = useRef(false);
  const requestIdRef = useRef(0);
  const isFetchingRef = useRef(false);
  const favoriteIdsRef = useRef([]);
  const pendingFavoriteImageRef = useRef(null);
  const openLikedAfterLoginRef = useRef(false);
  const isClosingPreviewRef = useRef(false);

  const [allImages, setAllImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isUpdatingType, setIsUpdatingType] = useState(false);
  const [isUpdatingPin, setIsUpdatingPin] = useState(false);

  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(null);
  const [previewType, setPreviewType] = useState("other");
  const [previewPinned, setPreviewPinned] = useState(false);
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  const { isLoggedIn, userEmail, isAdmin, googleLogin } = useAuth();

  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteOperationPending, setFavoriteOperationPending] = useState(
    new Set()
  );

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");

  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  const [isMobile, setIsMobile] = useState(false);
  const [columnCount, setColumnCount] = useState(4);

  const galleryImages = useMemo(
    () => allImages.slice(0, visibleCount),
    [allImages, visibleCount]
  );
  const hasNextPage = visibleCount < allImages.length;

  useEffect(() => {
    favoriteIdsRef.current = favoriteIds;
  }, [favoriteIds]);

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

  const fetchAllImagesForCurrentFilter = useCallback(async () => {
    let page = 1;
    let hasMore = true;
    let all = [];

    while (hasMore && page <= MAX_FETCH_PAGES) {
      const params = { page, limit: ITEMS_PER_PAGE, sort: sortOrder };
      if (typeFilter !== "all" && typeFilter !== "liked") {
        params.type = typeFilter;
      }
      const res = await axios.get(API_BASE_URL, { params });
      const data = Array.isArray(res.data?.data) ? res.data.data : [];
      const { resolvedHasNextPage } = parsePagination(res, page);
      all = [...all, ...data];
      hasMore = resolvedHasNextPage;
      page += 1;
    }

    if (typeFilter === "liked") {
      return all.filter((image) =>
        favoriteIdsRef.current.includes(getImageId(image))
      );
    }
    return all;
  }, [sortOrder, typeFilter]);

  const fetchImages = useCallback(async () => {
    const requestId = ++requestIdRef.current;
    isFetchingRef.current = true;
    setIsLoading(true);

    try {
      const all = await fetchAllImagesForCurrentFilter();
      if (requestId !== requestIdRef.current) return;

      const ordered = reorderGalleryImages(all, true);
      setAllImages(ordered);
      setTotalImages(ordered.length);
      setVisibleCount(Math.min(ITEMS_PER_PAGE, ordered.length));
    } catch (error) {
      if (requestId !== requestIdRef.current) return;
      console.error("Error fetching images:", error);
      toast.error("Failed to load gallery");
      setAllImages([]);
      setTotalImages(0);
      setVisibleCount(0);
    } finally {
      if (requestId === requestIdRef.current) {
        isFetchingRef.current = false;
        setIsLoading(false);
      }
    }
  }, [fetchAllImagesForCurrentFilter]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const loadMoreImages = useCallback(() => {
    if (isLoading || isFetchingRef.current || !hasNextPage) return;
    isFetchingRef.current = true;
    setIsFetchingMore(true);
    requestAnimationFrame(() => {
      setVisibleCount((prev) =>
        Math.min(prev + ITEMS_PER_PAGE, allImages.length)
      );
      setIsFetchingMore(false);
      isFetchingRef.current = false;
    });
  }, [isLoading, hasNextPage, allImages.length]);

  useEffect(() => {
    if (!isMobile) return;
    if (!loadMoreRef.current) return;
    if (!hasNextPage) return;
    if (isLoading || isFetchingMore) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMoreImages();
      },
      { root: null, rootMargin: "300px", threshold: 0 }
    );

    observerRef.current.observe(loadMoreRef.current);
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [isMobile, hasNextPage, isLoading, isFetchingMore, loadMoreImages, galleryImages.length]);

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

  // Preload first few images when gallery loads
  useEffect(() => {
    if (isLoading || galleryImages.length === 0) return;
    
    const imagesToPreload = galleryImages.slice(0, 10);
    imagesToPreload.forEach((image) => {
      const url = getPreviewImageUrl(image?.image_url);
      if (url && !preloadedImages.has(url)) {
        const img = new window.Image();
        img.src = url;
        setPreloadedImages((prev) => new Set(prev).add(url));
      }
    });
  }, [isLoading, galleryImages, preloadedImages]);

  useEffect(() => {
    if (isLoading || openedFromLinkRef.current || allImages.length === 0) return;
    openedFromLinkRef.current = true;
    const slug = new URLSearchParams(window.location.search).get("look");
    if (!slug) return;

    const index = allImages.findIndex(
      (img) => getShareSlug(img?.image_url) === slug
    );
    if (index === -1) {
      toast.info("This image is no longer available");
      window.history.replaceState(null, "", window.location.pathname);
      return;
    }
    setVisibleCount((prev) => Math.max(prev, index + 1));
    const image = allImages[index];
    setPreviewImage(getPreviewImageUrl(image?.image_url) || null);
    setPreviewImageIndex(index);
    setPreviewType(image?.type || "other");
    setPreviewPinned(Boolean(image?.isPinned));
    window.history.replaceState(null, "", window.location.pathname);
  }, [isLoading, allImages]);

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
            (blob) => resolve(new File([blob], file.name, { type: file.type })),
            file.type,
            quality
          );
        };
      };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
    setSelectedFileName(file ? file.name : "");
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

      await fetchImages();
      setSelectedFile(null);
      setSelectedType("");
      setSelectedFileName("");

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
        headers: { "x-user-email": userEmail },
      });
      setAllImages((prev) =>
        prev.filter((img) => getImageId(img) !== imageId)
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
        { headers: { "x-user-email": userEmail } }
      );
      const updatedImage = res.data?.data;
      toast.success("Image type updated successfully");

      const noLongerMatchesFilter =
        typeFilter !== "all" &&
        typeFilter !== "liked" &&
        updatedImage?.type !== typeFilter;

      if (noLongerMatchesFilter) {
        setAllImages((prev) =>
          prev.filter((img) => getImageId(img) !== imageId)
        );
        setTotalImages((prev) => Math.max(prev - 1, 0));
        closePreview();
      } else {
        setAllImages((prev) =>
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
        { headers: { "x-user-email": userEmail } }
      );
      const updatedImage = res.data?.data;
      const isNowPinned = Boolean(updatedImage?.isPinned);
      setPreviewPinned(isNowPinned);
      setAllImages((prev) =>
        reorderGalleryImages(
          prev.map((img) =>
            getImageId(img) === imageId
              ? { ...img, isPinned: isNowPinned }
              : img
          ),
          false
        )
      );
      toast.success(
        isNowPinned ? "Image pinned successfully" : "Image unpinned successfully"
      );
      closePreview();
    } catch (error) {
      console.error("Pin update error:", error);
      toast.error("Failed to update pin status");
    } finally {
      setIsUpdatingPin(false);
    }
  };

  const startGoogleLogin = ({
    favoriteImage = null,
    openLiked = false,
  } = {}) => {
    pendingFavoriteImageRef.current = favoriteImage;
    openLikedAfterLoginRef.current = openLiked;
    toast.info("Please sign in with Google to continue");
    googleLogin();
  };

  const loadFavorites = useCallback(async () => {
    if (!isLoggedIn || !userEmail) {
      setFavoriteIds([]);
      return;
    }
    try {
      const res = await axios.get(`${API_BASE_URL}/favorites`, {
        headers: { "x-user-email": userEmail },
      });
      const imageIds = res.data?.data || [];
      favoriteIdsRef.current = imageIds;
      setFavoriteIds(imageIds);
      if (openLikedAfterLoginRef.current) {
        openLikedAfterLoginRef.current = false;
        setTypeFilter("liked");
      }
    } catch (error) {
      console.error("Error loading favorites:", error);
      setFavoriteIds([]);
    }
  }, [isLoggedIn, userEmail]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  // Clear favorites when user logs out
  useEffect(() => {
    if (!isLoggedIn) {
      setFavoriteIds([]);
      if (typeFilter === "liked") setTypeFilter("all");
    }
  }, [isLoggedIn, typeFilter]);

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
      startGoogleLogin({ favoriteImage: image });
      return;
    }
    const imageId = getImageId(image);
    if (!imageId) {
      toast.error("Invalid image");
      return;
    }
    if (favoriteOperationPending.has(imageId)) return;

    setFavoriteOperationPending((prev) => new Set(prev).add(imageId));

    try {
      const currentlyFavorited = isFavorite(image);
      if (currentlyFavorited) {
        await axios.delete(`${API_BASE_URL}/${imageId}/favorite`, {
          headers: { "x-user-email": userEmail },
        });
        setFavoriteIds((prev) => prev.filter((id) => id !== imageId));
        if (typeFilter === "liked") {
          setAllImages((prev) =>
            prev.filter((img) => getImageId(img) !== imageId)
          );
          setTotalImages((prev) => Math.max(prev - 1, 0));
          closePreview();
        }
        toast.success("Removed from favourites");
      } else {
        await axios.post(`${API_BASE_URL}/${imageId}/favorite`, null, {
          headers: { "x-user-email": userEmail },
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

  const handleShare = async (image) => {
    const url = getShareUrl(image);
    if (!url) return;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Check out this look", url });
        return;
      }
      await navigator.clipboard.writeText(url);
      toast.success("Image link copied");
    } catch (error) {
      if (error?.name === "AbortError") return;
      try {
        await navigator.clipboard.writeText(url);
        toast.success("Image link copied");
      } catch {
        toast.error("Could not share this image");
      }
    }
  };

  const previewImages = useMemo(
    () => (Array.isArray(galleryImages) ? galleryImages : []),
    [galleryImages]
  );

  const handleImageClick = (index) => {
    const image = previewImages[index];
    const imageUrl = getPreviewImageUrl(image?.image_url);
    
    // Preload the image before showing it
    const img = new window.Image();
    img.onload = () => {
      setPreviewImage(imageUrl);
      setPreviewImageIndex(index);
      setPreviewType(image?.type || "other");
      setPreviewPinned(Boolean(image?.isPinned));
      setIsPreviewLoading(false);
    };
    img.onerror = () => {
      // Fallback to showing even if preload fails
      setPreviewImage(imageUrl);
      setPreviewImageIndex(index);
      setPreviewType(image?.type || "other");
      setPreviewPinned(Boolean(image?.isPinned));
      setIsPreviewLoading(false);
    };
    setIsPreviewLoading(true);
    img.src = imageUrl;
    
    // Preload adjacent images for smoother navigation
    preloadAdjacentImages(index);
    
    // Push history state when preview opens
    window.history.pushState({ previewOpen: true }, "", window.location.href);
  };

  const preloadAdjacentImages = (currentIndex) => {
    const indicesToPreload = [
      (currentIndex + 1) % previewImages.length,
      (currentIndex - 1 + previewImages.length) % previewImages.length,
      (currentIndex + 2) % previewImages.length,
      (currentIndex - 2 + previewImages.length) % previewImages.length,
    ];

    indicesToPreload.forEach((idx) => {
      const image = previewImages[idx];
      const url = getPreviewImageUrl(image?.image_url);
      if (url && !preloadedImages.has(url)) {
        const img = new window.Image();
        img.src = url;
        setPreloadedImages((prev) => new Set(prev).add(url));
      }
    });
  };

  const closePreview = () => {
    setPreviewImage(null);
    setPreviewImageIndex(null);
    setPreviewType("other");
    setPreviewPinned(false);
    setIsPreviewLoading(false);
    
    // Go back in history to remove the preview state (only if not triggered by popstate)
    if (window.history.state?.previewOpen && !isClosingPreviewRef.current) {
      isClosingPreviewRef.current = true;
      window.history.back();
      setTimeout(() => {
        isClosingPreviewRef.current = false;
      }, 100);
    }
  };

  // Handle browser Back button for image preview
  useEffect(() => {
    const handlePopState = () => {
      if (previewImage && !isClosingPreviewRef.current) {
        // If preview is open, close it instead of navigating away
        // Don't call preventDefault as it's already handled by history.back()
        isClosingPreviewRef.current = true;
        setPreviewImage(null);
        setPreviewImageIndex(null);
        setPreviewType("other");
        setPreviewPinned(false);
        setTimeout(() => {
          isClosingPreviewRef.current = false;
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [previewImage]);

  const nextImage = () => {
    if (!previewImages.length || previewImageIndex === null) return;
    const nextIndex = (previewImageIndex + 1) % previewImages.length;
    const image = previewImages[nextIndex];
    const imageUrl = getPreviewImageUrl(image?.image_url);
    
    // Preload before showing
    const img = new window.Image();
    img.onload = () => {
      setPreviewImage(imageUrl);
      setPreviewImageIndex(nextIndex);
      setPreviewType(image?.type || "other");
      setPreviewPinned(Boolean(image?.isPinned));
      setIsPreviewLoading(false);
      preloadAdjacentImages(nextIndex);
    };
    img.onerror = () => {
      setPreviewImage(imageUrl);
      setPreviewImageIndex(nextIndex);
      setPreviewType(image?.type || "other");
      setPreviewPinned(Boolean(image?.isPinned));
      setIsPreviewLoading(false);
      preloadAdjacentImages(nextIndex);
    };
    setIsPreviewLoading(true);
    img.src = imageUrl;
  };

  const prevImage = () => {
    if (!previewImages.length || previewImageIndex === null) return;
    const prevIndex =
      previewImageIndex === 0
        ? previewImages.length - 1
        : previewImageIndex - 1;
    const image = previewImages[prevIndex];
    const imageUrl = getPreviewImageUrl(image?.image_url);
    
    // Preload before showing
    const img = new window.Image();
    img.onload = () => {
      setPreviewImage(imageUrl);
      setPreviewImageIndex(prevIndex);
      setPreviewType(image?.type || "other");
      setPreviewPinned(Boolean(image?.isPinned));
      setIsPreviewLoading(false);
      preloadAdjacentImages(prevIndex);
    };
    img.onerror = () => {
      setPreviewImage(imageUrl);
      setPreviewImageIndex(prevIndex);
      setPreviewType(image?.type || "other");
      setPreviewPinned(Boolean(image?.isPinned));
      setIsPreviewLoading(false);
      preloadAdjacentImages(prevIndex);
    };
    setIsPreviewLoading(true);
    img.src = imageUrl;
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
    <>
      <div className={styles.galleryContainer}>
        {/* Admin Upload Section — redesigned */}
        {isLoggedIn && isAdmin && (
          <div className={styles.uploadContainer}>
            {/* File chooser area */}
            <div className={styles.uploadFileArea}>
              <label className={styles.chooseFileLabel} htmlFor="adminFileInput">
                Choose File
              </label>
              <input
                id="adminFileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.hiddenFileInput}
              />
              <span className={styles.fileNameDisplay}>
                {selectedFileName || "No file chosen"}
              </span>
            </div>

            {/* Divider */}
            <div className={styles.uploadDivider} aria-hidden="true" />

            {/* Type pills */}
            <div className={styles.uploadTypeGroup}>
              <button
                type="button"
                onClick={() => setSelectedType("makeup")}
                className={`${styles.uploadTypePill} ${
                  selectedType === "makeup" ? styles.uploadTypePillActive : ""
                }`}
              >
                Makeup
              </button>
              <button
                type="button"
                onClick={() => setSelectedType("hairstyle")}
                className={`${styles.uploadTypePill} ${
                  selectedType === "hairstyle" ? styles.uploadTypePillActive : ""
                }`}
              >
                Hairstyle
              </button>
            </div>

            {/* Divider */}
            <div className={styles.uploadDivider} aria-hidden="true" />

            {/* Upload button */}
            <button
              type="button"
              onClick={handleUploadClick}
              disabled={!selectedFile || !selectedType}
              className={styles.uploadButton}
            >
              Upload Files
            </button>
          </div>
        )}

        {/* Filter toolbar */}
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
            {/* Liked: desktop only, logged-in only */}
            {isLoggedIn && !isMobile && (
              <button
                onClick={() => setTypeFilter("liked")}
                className={typeFilter === "liked" ? styles.active : ""}
              >
                Liked
              </button>
            )}
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

        {/* Gallery grid */}
        <div
          className={styles.gallery}
          style={{ "--column-count": columnCount }}
        >
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

        {/* Image Preview */}
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
                {isPreviewLoading && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '500',
                      zIndex: 10,
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      padding: '12px 20px',
                      borderRadius: '24px',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <svg 
                      className="animate-spin" 
                      style={{ width: '16px', height: '16px' }}
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Loading...
                  </div>
                )}
                <img
                  src={previewImage}
                  alt="Preview"
                  className={styles.previewImage}
                  style={{ 
                    opacity: isPreviewLoading ? 0.5 : 1,
                    transition: 'opacity 0.15s ease-in-out'
                  }}
                />

                {currentPreviewImage && (
                  <div
                    className={styles.previewActions}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {isLoggedIn && isAdmin && (
                      <>
                        <select
                          value={previewType}
                          onChange={(e) => setPreviewType(e.target.value)}
                          className={styles.typeSelect}
                          aria-label="Image type"
                        >
                          <option value="other">Other</option>
                          <option value="makeup">Makeup</option>
                          <option value="hairstyle">Hairstyle</option>
                          <option value="nails">Nails</option>
                          <option value="facial">Facial</option>
                          <option value="bridal">Bridal</option>
                        </select>

                        <button
                          type="button"
                          className={`${styles.iconButton} ${styles.saveIcon}`}
                          onClick={handleUpdateImageType}
                          disabled={isUpdatingType}
                          title="Save type"
                          aria-label="Save type"
                        >
                          <MaterialIcon name="save" />
                        </button>

                        <button
                          type="button"
                          className={`${styles.iconButton} ${styles.pinIcon}`}
                          onClick={handleTogglePin}
                          disabled={isUpdatingPin}
                          title={previewPinned ? "Unpin" : "Pin to top"}
                          aria-label={previewPinned ? "Unpin" : "Pin to top"}
                        >
                          <MaterialIcon name="pin" slash={previewPinned} />
                        </button>
                      </>
                    )}

                    <button
                      type="button"
                      className={`${styles.iconButton} ${
                        isFavorite(currentPreviewImage)
                          ? styles.likeActive
                          : styles.likeIcon
                      }`}
                      onClick={(e) =>
                        handleFavoriteToggle(currentPreviewImage, e)
                      }
                      disabled={favoriteOperationPending.has(
                        getImageId(currentPreviewImage)
                      )}
                      title={
                        isFavorite(currentPreviewImage)
                          ? "Remove from favourites"
                          : "Add to favourites"
                      }
                      aria-label={
                        isFavorite(currentPreviewImage)
                          ? "Remove from favourites"
                          : "Add to favourites"
                      }
                    >
                      <MaterialIcon
                        name={
                          isFavorite(currentPreviewImage)
                            ? "favorite"
                            : "favoriteBorder"
                        }
                      />
                    </button>

                    <button
                      type="button"
                      className={`${styles.iconButton} ${styles.shareIcon}`}
                      onClick={() => handleShare(currentPreviewImage)}
                      title="Share"
                      aria-label="Share"
                    >
                      <MaterialIcon name="share" />
                    </button>

                    {isLoggedIn && isAdmin && (
                      <button
                        type="button"
                        className={`${styles.iconButton} ${styles.deleteIconBtn}`}
                        onClick={() => handleImageDelete(currentPreviewImage)}
                        title="Delete image"
                        aria-label="Delete image"
                      >
                        <MaterialIcon name="delete" />
                      </button>
                    )}
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
    </>
  );
}