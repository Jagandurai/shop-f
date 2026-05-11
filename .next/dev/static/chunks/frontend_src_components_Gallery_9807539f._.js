(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/Gallery/BodyImage.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "BodyImage-module-scss-module__iwFGrG__actions",
  "active": "BodyImage-module-scss-module__iwFGrG__active",
  "arrow": "BodyImage-module-scss-module__iwFGrG__arrow",
  "bookButton": "BodyImage-module-scss-module__iwFGrG__bookButton",
  "checkboxGroup": "BodyImage-module-scss-module__iwFGrG__checkboxGroup",
  "closeButton": "BodyImage-module-scss-module__iwFGrG__closeButton",
  "deleteIcon": "BodyImage-module-scss-module__iwFGrG__deleteIcon",
  "description": "BodyImage-module-scss-module__iwFGrG__description",
  "filterButtons": "BodyImage-module-scss-module__iwFGrG__filterButtons",
  "gallery": "BodyImage-module-scss-module__iwFGrG__gallery",
  "galleryContainer": "BodyImage-module-scss-module__iwFGrG__galleryContainer",
  "galleryStats": "BodyImage-module-scss-module__iwFGrG__galleryStats",
  "infiniteScrollTrigger": "BodyImage-module-scss-module__iwFGrG__infiniteScrollTrigger",
  "item": "BodyImage-module-scss-module__iwFGrG__item",
  "leftArrow": "BodyImage-module-scss-module__iwFGrG__leftArrow",
  "loadMoreButton": "BodyImage-module-scss-module__iwFGrG__loadMoreButton",
  "loginButtonWrapper": "BodyImage-module-scss-module__iwFGrG__loginButtonWrapper",
  "logoutButton": "BodyImage-module-scss-module__iwFGrG__logoutButton",
  "noImages": "BodyImage-module-scss-module__iwFGrG__noImages",
  "pagination": "BodyImage-module-scss-module__iwFGrG__pagination",
  "pinButton": "BodyImage-module-scss-module__iwFGrG__pinButton",
  "pinnedBadge": "BodyImage-module-scss-module__iwFGrG__pinnedBadge",
  "previewContainer": "BodyImage-module-scss-module__iwFGrG__previewContainer",
  "previewContent": "BodyImage-module-scss-module__iwFGrG__previewContent",
  "previewImage": "BodyImage-module-scss-module__iwFGrG__previewImage",
  "previewOverlay": "BodyImage-module-scss-module__iwFGrG__previewOverlay",
  "rightArrow": "BodyImage-module-scss-module__iwFGrG__rightArrow",
  "saveTypeButton": "BodyImage-module-scss-module__iwFGrG__saveTypeButton",
  "shimmer": "BodyImage-module-scss-module__iwFGrG__shimmer",
  "skeletonItem": "BodyImage-module-scss-module__iwFGrG__skeletonItem",
  "sortSelect": "BodyImage-module-scss-module__iwFGrG__sortSelect",
  "sortWrapper": "BodyImage-module-scss-module__iwFGrG__sortWrapper",
  "toolbar": "BodyImage-module-scss-module__iwFGrG__toolbar",
  "typeEditor": "BodyImage-module-scss-module__iwFGrG__typeEditor",
  "typeSelect": "BodyImage-module-scss-module__iwFGrG__typeSelect",
  "uploadButton": "BodyImage-module-scss-module__iwFGrG__uploadButton",
});
}),
"[project]/frontend/src/components/Gallery/BodyImage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BodyImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@react-oauth/google/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-swipeable/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Gallery/BodyImage.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
const API_BASE_URL = `${("TURBOPACK compile-time value", "http://localhost:5000")}/api/gallery`;
const ITEMS_PER_PAGE = 30;
const MOBILE_BREAKPOINT = 768;
const PIN_ICON_URL = "https://img.icons8.com/?size=100&id=2EuI26KqYJ6b&format=png&color=000000";
const shuffleArray = (array)=>{
    const shuffled = [
        ...array
    ];
    for(let i = shuffled.length - 1; i > 0; i -= 1){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled;
};
const reorderGalleryImages = (images)=>{
    const pinnedImages = images.filter((image)=>Boolean(image?.isPinned));
    const regularImages = images.filter((image)=>!image?.isPinned);
    return [
        ...pinnedImages,
        ...shuffleArray(regularImages)
    ];
};
function BodyImage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const loadMoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [galleryImages, setGalleryImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalImages, setTotalImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFetchingMore, setIsFetchingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUpdatingType, setIsUpdatingType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUpdatingPin, setIsUpdatingPin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewImageIndex, setPreviewImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewType, setPreviewType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("other");
    const [previewPinned, setPreviewPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedType, setSelectedType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("latest");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [hasNextPage, setHasNextPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyImage.useEffect": ()=>{
            const storedLogin = localStorage.getItem("isLoggedIn");
            const storedEmail = localStorage.getItem("userEmail");
            if (storedLogin === "true" && storedEmail) {
                setIsLoggedIn(true);
                setUserEmail(storedEmail);
                checkIfAdmin(storedEmail);
            }
        }
    }["BodyImage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyImage.useEffect": ()=>{
            const checkScreen = {
                "BodyImage.useEffect.checkScreen": ()=>{
                    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
                }
            }["BodyImage.useEffect.checkScreen"];
            checkScreen();
            window.addEventListener("resize", checkScreen);
            return ({
                "BodyImage.useEffect": ()=>window.removeEventListener("resize", checkScreen)
            })["BodyImage.useEffect"];
        }
    }["BodyImage.useEffect"], []);
    const fetchImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BodyImage.useCallback[fetchImages]": async ({ page = 1, append = false } = {})=>{
            try {
                if (append) {
                    setIsFetchingMore(true);
                } else {
                    setIsLoading(true);
                }
                const params = {
                    page,
                    limit: ITEMS_PER_PAGE,
                    sort: sortOrder
                };
                if (typeFilter !== "all") {
                    params.type = typeFilter;
                }
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(API_BASE_URL, {
                    params
                });
                const data = Array.isArray(res.data?.data) ? res.data.data : [];
                const pagination = res.data?.pagination || {};
                const totalPages = Number(pagination.pages || 0);
                const resolvedPage = Number(pagination.page || page);
                const resolvedTotal = Number(pagination.total || 0);
                const resolvedHasNextPage = typeof pagination.hasNextPage === "boolean" ? pagination.hasNextPage : resolvedPage < totalPages;
                setGalleryImages({
                    "BodyImage.useCallback[fetchImages]": (prev)=>{
                        const mergedImages = append ? [
                            ...prev,
                            ...data
                        ] : data;
                        return reorderGalleryImages(mergedImages);
                    }
                }["BodyImage.useCallback[fetchImages]"]);
                setCurrentPage(resolvedPage);
                setTotalImages(resolvedTotal);
                setHasNextPage(resolvedHasNextPage);
            } catch (error) {
                console.error("Error fetching images:", error);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to load gallery");
                if (!append) {
                    setGalleryImages([]);
                    setTotalImages(0);
                }
                setHasNextPage(false);
            } finally{
                setIsLoading(false);
                setIsFetchingMore(false);
            }
        }
    }["BodyImage.useCallback[fetchImages]"], [
        sortOrder,
        typeFilter
    ]);
    const resetAndFetchImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BodyImage.useCallback[resetAndFetchImages]": async ()=>{
            setGalleryImages([]);
            setCurrentPage(1);
            setTotalImages(0);
            setHasNextPage(false);
            await fetchImages({
                page: 1,
                append: false
            });
        }
    }["BodyImage.useCallback[resetAndFetchImages]"], [
        fetchImages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyImage.useEffect": ()=>{
            resetAndFetchImages();
        }
    }["BodyImage.useEffect"], [
        resetAndFetchImages
    ]);
    const loadMoreImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BodyImage.useCallback[loadMoreImages]": async ()=>{
            if (isLoading || isFetchingMore || !hasNextPage) return;
            await fetchImages({
                page: currentPage + 1,
                append: true
            });
        }
    }["BodyImage.useCallback[loadMoreImages]"], [
        currentPage,
        fetchImages,
        hasNextPage,
        isFetchingMore,
        isLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyImage.useEffect": ()=>{
            if (!isMobile) return;
            if (!loadMoreRef.current) return;
            if (!hasNextPage) return;
            if (isLoading || isFetchingMore) return;
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new IntersectionObserver({
                "BodyImage.useEffect": (entries)=>{
                    const entry = entries[0];
                    if (entry?.isIntersecting) {
                        loadMoreImages();
                    }
                }
            }["BodyImage.useEffect"], {
                root: null,
                rootMargin: "300px",
                threshold: 0
            });
            observerRef.current.observe(loadMoreRef.current);
            return ({
                "BodyImage.useEffect": ()=>{
                    if (observerRef.current) {
                        observerRef.current.disconnect();
                    }
                }
            })["BodyImage.useEffect"];
        }
    }["BodyImage.useEffect"], [
        isMobile,
        hasNextPage,
        isLoading,
        isFetchingMore,
        loadMoreImages,
        galleryImages.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BodyImage.useEffect": ()=>{
            const handleKeyDown = {
                "BodyImage.useEffect.handleKeyDown": (e)=>{
                    if (!previewImage) return;
                    if (e.key === "ArrowRight") nextImage();
                    if (e.key === "ArrowLeft") prevImage();
                    if (e.key === "Escape") closePreview();
                }
            }["BodyImage.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "BodyImage.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["BodyImage.useEffect"];
        }
    }["BodyImage.useEffect"], [
        previewImage,
        previewImageIndex,
        galleryImages
    ]);
    const checkIfAdmin = async (email)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/check-admin`, {
                email
            });
            if (res.data?.success) {
                setIsAdmin(true);
            } else {
                handleLogout(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("You are not an admin");
            }
        } catch (error) {
            console.error("Admin check error:", error);
        }
    };
    const compressImage = (file, quality = 0.9)=>{
        return new Promise((resolve)=>{
            if (file.size <= 9 * 1024 * 1024) {
                resolve(file);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Compressing image...");
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event)=>{
                const img = new window.Image();
                img.src = event.target.result;
                img.onload = ()=>{
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob)=>{
                        resolve(new File([
                            blob
                        ], file.name, {
                            type: file.type
                        }));
                    }, file.type, quality);
                };
            };
        });
    };
    const handleFileChange = (e)=>{
        setSelectedFile(e.target.files?.[0] || null);
    };
    const handleUploadClick = async ()=>{
        if (!selectedFile) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("Please choose a file first");
            return;
        }
        if (!selectedType) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warn("Please select a type");
            return;
        }
        let fileToUpload = selectedFile;
        if (selectedFile.size > 9 * 1024 * 1024) {
            fileToUpload = await compressImage(selectedFile, 0.9);
        }
        const formData = new FormData();
        formData.append("image", fileToUpload);
        formData.append("type", selectedType);
        const uploadToast = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Uploading...");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(API_BASE_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "x-user-email": userEmail
                }
            });
            await resetAndFetchImages();
            setSelectedFile(null);
            setSelectedType("");
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].update(uploadToast, {
                render: "Image uploaded successfully!",
                type: "success",
                isLoading: false,
                autoClose: 2000
            });
        } catch (error) {
            console.error("Upload error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].update(uploadToast, {
                render: "Failed to upload image",
                type: "error",
                isLoading: false,
                autoClose: 2000
            });
        }
    };
    const handleImageDelete = async (image)=>{
        const imageId = image?.id || image?._id;
        if (!imageId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid image id");
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`${API_BASE_URL}/${imageId}`, {
                headers: {
                    "x-user-email": userEmail
                }
            });
            setGalleryImages((prev)=>reorderGalleryImages(prev.filter((img)=>(img.id || img._id) !== imageId)));
            setTotalImages((prev)=>Math.max(prev - 1, 0));
            closePreview();
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Image deleted successfully!");
        } catch (error) {
            console.error("Delete error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete image");
        }
    };
    const handleUpdateImageType = async ()=>{
        const image = previewImages[previewImageIndex];
        const imageId = image?.id || image?._id;
        if (!imageId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid image id");
            return;
        }
        try {
            setIsUpdatingType(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`${API_BASE_URL}/${imageId}/type`, {
                type: previewType
            }, {
                headers: {
                    "x-user-email": userEmail
                }
            });
            const updatedImage = res.data?.data;
            setGalleryImages((prev)=>reorderGalleryImages(prev.map((img)=>(img.id || img._id) === imageId ? {
                        ...img,
                        type: updatedImage.type
                    } : img)));
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Image type updated successfully");
            if (typeFilter !== "all" && previewType !== typeFilter) {
                closePreview();
                await resetAndFetchImages();
            }
        } catch (error) {
            console.error("Update type error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update image type");
        } finally{
            setIsUpdatingType(false);
        }
    };
    const handleTogglePin = async ()=>{
        const image = previewImages[previewImageIndex];
        const imageId = image?.id || image?._id;
        if (!imageId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid image id");
            return;
        }
        try {
            setIsUpdatingPin(true);
            const nextPinnedValue = !previewPinned;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`${API_BASE_URL}/${imageId}/pin`, {
                isPinned: nextPinnedValue
            }, {
                headers: {
                    "x-user-email": userEmail
                }
            });
            const updatedImage = res.data?.data;
            setPreviewPinned(Boolean(updatedImage?.isPinned));
            setGalleryImages((prev)=>reorderGalleryImages(prev.map((img)=>(img.id || img._id) === imageId ? {
                        ...img,
                        isPinned: Boolean(updatedImage?.isPinned)
                    } : img)));
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(updatedImage?.isPinned ? "Image pinned successfully" : "Image unpinned successfully");
            await resetAndFetchImages();
            if (typeFilter !== "all" && updatedImage?.type !== typeFilter) {
                closePreview();
            }
        } catch (error) {
            console.error("Pin update error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update pin status");
        } finally{
            setIsUpdatingPin(false);
        }
    };
    const handleLoginSuccess = async (credentialResponse)=>{
        try {
            const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(credentialResponse.credential);
            const email = decoded.email;
            setIsLoggedIn(true);
            setUserEmail(email);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", email);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${API_BASE_URL}/check-admin`, {
                email
            });
            if (res.data?.success) {
                setIsAdmin(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Welcome: ${email}`);
            } else {
                handleLogout(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("You are not an admin");
            }
        } catch (error) {
            console.error("JWT/Login error:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to process login.");
        }
    };
    const handleLogout = (showToast = true)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["googleLogout"])();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        setIsLoggedIn(false);
        setUserEmail("");
        setIsAdmin(false);
        if (showToast) {
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Logged out successfully");
        }
    };
    const previewImages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BodyImage.useMemo[previewImages]": ()=>{
            return Array.isArray(galleryImages) ? galleryImages : [];
        }
    }["BodyImage.useMemo[previewImages]"], [
        galleryImages
    ]);
    const handleImageClick = (index)=>{
        const image = previewImages[index];
        setPreviewImage(image?.image_url || null);
        setPreviewImageIndex(index);
        setPreviewType(image?.type || "other");
        setPreviewPinned(Boolean(image?.isPinned));
    };
    const closePreview = ()=>{
        setPreviewImage(null);
        setPreviewImageIndex(null);
        setPreviewType("other");
        setPreviewPinned(false);
    };
    const nextImage = ()=>{
        if (!previewImages.length || previewImageIndex === null) return;
        const nextIndex = (previewImageIndex + 1) % previewImages.length;
        const image = previewImages[nextIndex];
        setPreviewImage(image?.image_url || null);
        setPreviewImageIndex(nextIndex);
        setPreviewType(image?.type || "other");
        setPreviewPinned(Boolean(image?.isPinned));
    };
    const prevImage = ()=>{
        if (!previewImages.length || previewImageIndex === null) return;
        const prevIndex = previewImageIndex === 0 ? previewImages.length - 1 : previewImageIndex - 1;
        const image = previewImages[prevIndex];
        setPreviewImage(image?.image_url || null);
        setPreviewImageIndex(prevIndex);
        setPreviewType(image?.type || "other");
        setPreviewPinned(Boolean(image?.isPinned));
    };
    const handleBookNowClick = ()=>{
        router.push("/service");
    };
    const swipeHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipeable"])({
        onSwipedLeft: nextImage,
        onSwipedRight: prevImage,
        preventScrollOnSwipe: true,
        trackMouse: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                children: "Explore our amazing Makeup & Hairstyle collections."
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 555,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleBookNowClick,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bookButton,
                children: "View Our Service"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 559,
                columnNumber: 7
            }, this),
            !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loginButtonWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$react$2d$oauth$2f$google$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleLogin"], {
                    onSuccess: handleLoginSuccess,
                    onError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Google Login Failed")
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                    lineNumber: 565,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 564,
                columnNumber: 9
            }, this),
            isLoggedIn && isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: handleFileChange
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 574,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checkboxGroup,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: selectedType === "makeup" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "imageType",
                                        value: "makeup",
                                        checked: selectedType === "makeup",
                                        onChange: (e)=>setSelectedType(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                        lineNumber: 578,
                                        columnNumber: 15
                                    }, this),
                                    "Makeup"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 577,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: selectedType === "hairstyle" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "imageType",
                                        value: "hairstyle",
                                        checked: selectedType === "hairstyle",
                                        onChange: (e)=>setSelectedType(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                        lineNumber: 589,
                                        columnNumber: 15
                                    }, this),
                                    "Hairstyle"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 588,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 576,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUploadClick,
                        disabled: !selectedFile || !selectedType,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadButton,
                        children: "Upload Files"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 600,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutButton,
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 608,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 573,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterButtons,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTypeFilter("all"),
                                className: typeFilter === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTypeFilter("makeup"),
                                className: typeFilter === "makeup" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                children: "Makeup"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTypeFilter("hairstyle"),
                                className: typeFilter === "hairstyle" ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                children: "Hairstyle"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 615,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortWrapper,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "sort",
                            value: sortOrder,
                            onChange: (e)=>setSortOrder(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sortSelect,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "latest",
                                    children: "Latest"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "oldest",
                                    children: "Oldest"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                            lineNumber: 637,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 614,
                columnNumber: 7
            }, this),
            !isLoading && totalImages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].galleryStats,
                children: galleryImages.length >= totalImages ? `Showing all ${totalImages} images` : `Showing ${galleryImages.length} of ${totalImages} images`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 650,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gallery,
                children: isLoading ? Array.from({
                    length: 8
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeletonItem
                    }, index, false, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 660,
                        columnNumber: 13
                    }, this)) : galleryImages.length > 0 ? galleryImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                        children: [
                            image.isPinned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pinnedBadge,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: PIN_ICON_URL,
                                    alt: "Pinned"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                    lineNumber: 667,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 666,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: image.image_url,
                                alt: image.type ? `${image.type} gallery image ${index + 1}` : `Gallery image ${index + 1}`,
                                onClick: ()=>handleImageClick(index),
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 671,
                                columnNumber: 15
                            }, this)
                        ]
                    }, image.id || image._id || index, true, {
                        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                        lineNumber: 664,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].noImages,
                    children: "No images found for the selected filter."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                    lineNumber: 684,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 657,
                columnNumber: 7
            }, this),
            !isLoading && !isMobile && hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pagination,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loadMoreImages,
                    disabled: isFetchingMore,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreButton,
                    children: isFetchingMore ? "Loading..." : "Load More"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                    lineNumber: 690,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 689,
                columnNumber: 9
            }, this),
            !isLoading && isMobile && hasNextPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loadMoreRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infiniteScrollTrigger,
                children: isFetchingMore ? "Loading more..." : "Scroll for more"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 701,
                columnNumber: 9
            }, this),
            previewImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewOverlay,
                onClick: closePreview,
                role: "button",
                tabIndex: 0,
                onKeyDown: (e)=>{
                    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
                        closePreview();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewContainer,
                    ...swipeHandlers,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                            onClick: closePreview,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 724,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                            lineNumber: 723,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftArrow}`,
                            onClick: prevImage,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 731,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: previewImage,
                                    alt: "Preview",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previewImage
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                    lineNumber: 735,
                                    columnNumber: 15
                                }, this),
                                isLoggedIn && isAdmin && previewImageIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeEditor,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: previewType,
                                            onChange: (e)=>setPreviewType(e.target.value),
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].typeSelect,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 748,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "makeup",
                                                    children: "Makeup"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 749,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "hairstyle",
                                                    children: "Hairstyle"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 750,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "nails",
                                                    children: "Nails"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 751,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "facial",
                                                    children: "Facial"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 752,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "bridal",
                                                    children: "Bridal"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 753,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                            lineNumber: 743,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleUpdateImageType,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].saveTypeButton,
                                            disabled: isUpdatingType,
                                            children: isUpdatingType ? "Saving..." : "Save Type"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                            lineNumber: 756,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleTogglePin,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pinButton,
                                            disabled: isUpdatingPin,
                                            children: isUpdatingPin ? "Saving..." : previewPinned ? "Unpin" : "Pin to Top"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                            lineNumber: 764,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteIcon,
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                handleImageDelete(previewImages[previewImageIndex]);
                                            },
                                            "aria-label": "Delete image",
                                            type: "button",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "18",
                                                height: "18",
                                                viewBox: "0 0 24 24",
                                                fill: "black",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                    lineNumber: 792,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                                lineNumber: 785,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                            lineNumber: 776,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                    lineNumber: 742,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                            lineNumber: 734,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Gallery$2f$BodyImage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightArrow}`,
                            onClick: nextImage,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                                lineNumber: 803,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                            lineNumber: 799,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                    lineNumber: 718,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 707,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
                lineNumber: 809,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Gallery/BodyImage.jsx",
        lineNumber: 554,
        columnNumber: 5
    }, this);
}
_s(BodyImage, "193e3GBYSnXncKxdXg9vXnsRQio=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$swipeable$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwipeable"]
    ];
});
_c = BodyImage;
var _c;
__turbopack_context__.k.register(_c, "BodyImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_Gallery_9807539f._.js.map