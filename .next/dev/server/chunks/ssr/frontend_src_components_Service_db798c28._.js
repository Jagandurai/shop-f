module.exports = [
"[project]/frontend/src/components/Service/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Booking$2f$BookingContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Booking/BookingContext.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Hero() {
    const [videoLoaded, setVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { openForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Booking$2f$BookingContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingContext"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex h-[72vh] items-center justify-center overflow-hidden text-center text-white md:h-[84vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        className: `h-full w-full object-cover object-center transition-opacity duration-300 ease-out xl:object-[50%_20%] ${videoLoaded ? "opacity-100" : "opacity-100"}`,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        preload: "auto",
                        onCanPlay: ()=>setVideoLoaded(true),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199958/servicevideo_tmmdcb.webm",
                                type: "video/webm"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            "Your browser does not support the video tag."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(180deg,rgba(20,8,24,0.12)_0%,rgba(34,12,34,0.10)_45%,rgba(20,8,24,0.18)_100%)]"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[2] mx-auto flex max-w-[760px] flex-col items-center px-4 py-5 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm sm:text-sm",
                        children: "Lovely Looks Services"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mt-4 text-[1.9rem] font-extrabold leading-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.22)] sm:text-[2.4rem] md:text-[3.1rem]",
                        children: "Our Premium Beauty Services"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 max-w-[620px] text-sm leading-7 text-white/90 sm:text-base md:text-[1rem] md:leading-8",
                        children: "Explore expert makeup, skin, hair, and salon care tailored for every occasion."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openForm,
                        className: "mt-7 inline-flex items-center justify-center rounded-full bg-[linear-gradient(90deg,#7b1fa2,#d81b60)] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(216,27,96,0.24)] transition duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_36px_rgba(216,27,96,0.30)] sm:text-base",
                        children: "Book Appointment"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/Service/Switching.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Switching-module-scss-module__J-daJq__active",
  "contentContainer": "Switching-module-scss-module__J-daJq__contentContainer",
  "enquiryBtn": "Switching-module-scss-module__J-daJq__enquiryBtn",
  "fixedImage": "Switching-module-scss-module__J-daJq__fixedImage",
  "heading": "Switching-module-scss-module__J-daJq__heading",
  "inner": "Switching-module-scss-module__J-daJq__inner",
  "leftOptions": "Switching-module-scss-module__J-daJq__leftOptions",
  "rightContent": "Switching-module-scss-module__J-daJq__rightContent",
  "switchingContainer": "Switching-module-scss-module__J-daJq__switchingContainer",
  "tabDescription": "Switching-module-scss-module__J-daJq__tabDescription",
  "tabImage": "Switching-module-scss-module__J-daJq__tabImage",
  "tabs": "Switching-module-scss-module__J-daJq__tabs",
});
}),
"[project]/frontend/src/components/Service/Switching.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Service/Switching.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Booking$2f$BookingContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Booking/BookingContext.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const tabContent = {
    hair: {
        haircuts: {
            title: "Haircuts & Styling",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/haircut_wht2tg.webp",
            description: "Refresh your look with stylish haircuts and elegant styling tailored to your face shape, personality, and occasion. Our expert stylists create polished, flattering results with a professional touch."
        },
        hairColouring: {
            title: "Hair Colouring & Highlighting",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Haircolour_fppjdo.webp",
            description: "Add richness, depth, and vibrance to your hair with customised colouring and highlighting services. We help you achieve a beautiful shade that complements your style and enhances your overall look."
        },
        HairSpa: {
            title: "Hair Spa",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Hair-Spa_vvmujg.webp",
            description: "Rejuvenate dull, dry, or damaged hair with a nourishing hair spa experience designed to deeply condition, strengthen, and restore softness, shine, and vitality."
        },
        HairStraightening: {
            title: "Hair Straightening",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/Hair-Straightening_yesxl9.webp",
            description: "Enjoy smoother, sleeker, and more manageable hair with our professional straightening services. Perfect for reducing frizz and creating a refined, polished finish."
        },
        KeratinTreatment: {
            title: "Keratin Treatment",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Keratin_Treatment_rnjms9.webp",
            description: "Transform frizzy and unmanageable hair with our keratin treatment that leaves your hair smoother, shinier, and easier to style while maintaining a healthy, luminous appearance."
        }
    },
    skin: {
        skinCare: {
            title: "D-Tan",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/D-Tan_p0gep3.webp",
            description: "Restore your skin’s natural brightness with our effective D-Tan treatment that helps reduce tan, refresh dull skin, and reveal a cleaner, more radiant complexion."
        },
        FaceMasks: {
            title: "Face Masks",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/latest-Face-Masks_ozjct2.webp",
            description: "Treat your skin with carefully selected face masks tailored to your skin type and concerns, helping to hydrate, soothe, clarify, and revive your complexion."
        },
        FaceCleanUp: {
            title: "Face Clean-Up",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Face-Clean-Up_jqzixv.webp",
            description: "Refresh your face with a gentle yet effective clean-up service that removes impurities, supports skin clarity, and gives your skin a cleaner, brighter appearance."
        },
        Facials: {
            title: "Facials",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/facial_p4d6jg.webp",
            description: "Experience personalised facials designed to nourish, cleanse, and revitalise your skin, leaving it soft, glowing, and beautifully refreshed."
        },
        HydraFacial: {
            title: "HydraFacial",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/hydrafacial_vlqrxp.webp",
            description: "Deep cleansing, gentle exfoliation, and intense hydration come together in our hydrafacial treatment to give your skin a smoother, fresher, and more radiant glow."
        }
    },
    body: {
        bodyMassage: {
            title: "Manicure",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/manicure_o5q4cv.webp",
            description: "Treat your hands to a luxurious manicure that enhances nail beauty, improves grooming, and leaves your hands looking neat, polished, and elegant."
        },
        Pedicure: {
            title: "Pedicure",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/pedicure_o2njos.webp",
            description: "Relax and refresh with our soothing pedicure service that pampers your feet while improving comfort, cleanliness, and overall appearance."
        },
        Reflexology: {
            title: "Reflexology",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/Reflexology_iaqczh.webp",
            description: "Unwind with reflexology treatments designed to promote relaxation, relieve stress, and support your sense of balance and well-being."
        },
        ThreadingWaxing: {
            title: "Threading & Waxing",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/threading_aatw3w.webp",
            description: "Achieve clean, defined brows and smooth skin with professional threading and waxing services delivered with care, precision, and hygiene."
        },
        NailArt: {
            title: "Nail Art",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Nail_Art_jmvkbh.webp",
            description: "Express your personal style with elegant and creative nail art designs crafted to add charm, beauty, and a fashionable finishing touch."
        }
    }
};
const TAB_DEFAULT_OPTION = {
    hair: "haircuts",
    skin: "skinCare",
    body: "bodyMassage"
};
const Switching = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hair");
    const [activeOption, setActiveOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("haircuts");
    const { openForm } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Booking$2f$BookingContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBookingContext"])();
    const handleTabClick = (tab)=>{
        setActiveTab(tab);
        setActiveOption(TAB_DEFAULT_OPTION[tab]);
    };
    const currentContent = tabContent[activeTab][activeOption];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].switchingContainer,
        "aria-label": "Beauty Services",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Explore Our Services"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Beauty Treatments Tailored to Your Needs"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Discover expert hair, skin, and body care services designed to enhance your beauty with comfort, quality, and personalised attention."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabs,
                    "aria-label": "Service categories",
                    children: Object.keys(tabContent).map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabClick(tab),
                            className: activeTab === tab ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                            "aria-pressed": activeTab === tab,
                            children: tab.charAt(0).toUpperCase() + tab.slice(1)
                        }, tab, false, {
                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contentContainer,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftOptions,
                            "aria-label": "Service options",
                            children: Object.keys(tabContent[activeTab]).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveOption(option),
                                    className: activeOption === option ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "",
                                    "aria-pressed": activeOption === option,
                                    children: tabContent[activeTab][option].title
                                }, option, false, {
                                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabImage,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: currentContent.imgSrc,
                                        alt: currentContent.title,
                                        width: 460,
                                        height: 360,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fixedImage,
                                        loading: "lazy",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tabDescription,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: currentContent.title
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: currentContent.description
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].enquiryBtn,
                                            onClick: openForm,
                                            children: "Book a Service Today"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Service/Switching.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Switching;
}),
"[project]/frontend/src/components/Service/ExpandingGallery.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ExpandingGallery-module-scss-module__GobclW__active",
  "card": "ExpandingGallery-module-scss-module__GobclW__card",
  "cardsWrapper": "ExpandingGallery-module-scss-module__GobclW__cardsWrapper",
  "expandingCardsContainer": "ExpandingGallery-module-scss-module__GobclW__expandingCardsContainer",
  "gallerySection": "ExpandingGallery-module-scss-module__GobclW__gallerySection",
  "heading": "ExpandingGallery-module-scss-module__GobclW__heading",
  "headingWrap": "ExpandingGallery-module-scss-module__GobclW__headingWrap",
  "inner": "ExpandingGallery-module-scss-module__GobclW__inner",
  "overlay": "ExpandingGallery-module-scss-module__GobclW__overlay",
  "subtext": "ExpandingGallery-module-scss-module__GobclW__subtext",
  "tag": "ExpandingGallery-module-scss-module__GobclW__tag",
});
}),
"[project]/frontend/src/components/Service/ExpandingGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Service/ExpandingGallery.module.scss [app-ssr] (css module)");
"use client";
;
;
;
const cards = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/hairstyle1_k2mz5o.webp",
        title: "Ponytail"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle2_q8qr8y.webp",
        title: "Waterfall"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle3_iaebm5.webp",
        title: "Curls"
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/hairstyle4_bcorjl.webp",
        title: "Rubber Band"
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/hairstyle5_uuitxi.webp",
        title: "Messi"
    }
];
const ExpandingGallery = ()=>{
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Math.floor(cards.length / 2));
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleMouseMove = (e)=>{
        if (window.innerWidth <= 768) return;
        const container = containerRef.current;
        if (!container) return;
        const containerRect = container.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        const percentage = mouseX / containerRect.width;
        let index = Math.floor(percentage * cards.length);
        if (index < 0) index = 0;
        if (index >= cards.length) index = cards.length - 1;
        setActiveIndex(index);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        const activeCard = cardsRef.current[activeIndex];
        if (container && activeCard && window.innerWidth <= 768) {
            const cardWidth = activeCard.offsetWidth;
            const cardLeft = activeCard.offsetLeft;
            const containerWidth = container.offsetWidth;
            const scrollPosition = cardLeft - containerWidth / 2 + cardWidth / 2;
            container.scrollTo({
                left: scrollPosition,
                behavior: "smooth"
            });
        }
    }, [
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gallerySection,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].headingWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                            children: "Hair Style Inspiration"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                            children: "Trending Hair Style Looks"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtext,
                            children: "Explore elegant and stylish hair inspirations crafted to enhance your beauty for weddings, parties, and special occasions."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expandingCardsContainer,
                    ref: containerRef,
                    onMouseMove: handleMouseMove,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsWrapper,
                        children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card} ${activeIndex === index ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                                style: {
                                    backgroundImage: `url(${card.image})`
                                },
                                ref: (el)=>{
                                    cardsRef.current[index] = el;
                                },
                                onClick: ()=>setActiveIndex(index),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$ExpandingGallery$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, card.id, true, {
                                fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                                lineNumber: 102,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Service/ExpandingGallery.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ExpandingGallery;
}),
];

//# sourceMappingURL=frontend_src_components_Service_db798c28._.js.map