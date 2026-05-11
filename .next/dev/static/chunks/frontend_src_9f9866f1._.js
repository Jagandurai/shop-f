(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/Home/Hero.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomLeft": "Hero-module-scss-module__XG7yva__bottomLeft",
  "bottomRight": "Hero-module-scss-module__XG7yva__bottomRight",
  "container": "Hero-module-scss-module__XG7yva__container",
  "person": "Hero-module-scss-module__XG7yva__person",
  "topLeft": "Hero-module-scss-module__XG7yva__topLeft",
  "topRight": "Hero-module-scss-module__XG7yva__topRight",
});
}),
"[project]/frontend/src/components/Home/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Home/Hero.module.scss [app-client] (css module)");
"use client";
;
;
;
;
const fadeIn = (direction = "up", type = "tween", delay = 0.3, duration = 1)=>({
        initial: {
            opacity: 0,
            y: direction === "up" ? 20 : -20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type,
                delay,
                duration
            }
        }
    });
const slideIn = (direction = "up", type = "tween", delay = 0.3, duration = 1)=>({
        initial: {
            opacity: 0,
            y: direction === "up" ? 30 : -30
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type,
                delay,
                duration
            }
        }
    });
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp",
                alt: "",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flower} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topLeft}`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Home/Hero.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp",
                alt: "",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flower} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topRight}`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Home/Hero.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp",
                alt: "",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flower} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomLeft}`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Home/Hero.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp",
                alt: "",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flower} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomRight}`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Home/Hero.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Home$2f$Hero$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].person,
                initial: "initial",
                animate: "animate",
                variants: fadeIn("up", "tween", 0.3, 1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                    initial: "initial",
                    animate: "animate",
                    variants: slideIn("up", "tween", 0.5, 1.3),
                    src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp",
                    alt: "Person"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Home/Hero.jsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Home/Hero.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Home/Hero.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Home/Welcome.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
const Welcome = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "text-center px-4 py-8 md:px-6 lg:px-8 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-10 mb-16 md:mb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl font-semibold text-[#333333]",
                        children: "Welcome to Lovely Looks!!!"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-2",
                        children: [
                            "Where Beauty",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#5b0996]",
                                children: "Meets Indulgence"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " !!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-sm md:text-base text-[#4e4d4d] max-w-2xl mx-auto",
                        children: "Lovely Looks brings a fresh perspective to the beauty parlour experience by offering personalized services for Hair, Skin, Nail, Body, and Face."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-6 md:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-[calc(50%-1rem)] max-w-[550px]   h-[140px] sm:h-[220px] md:h-[250px]   rounded-[10px] overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/card2_t5asqq.webp",
                                alt: "Hair and skin services at Lovely Looks beauty parlour",
                                fill: true,
                                sizes: "(max-width: 640px) 100vw, 550px",
                                className: "object-cover",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/service",
                                className: "absolute bottom-4 left-1/2 -translate-x-1/2   bg-[rgb(160,45,160)] hover:bg-[#573477] text-white   text-xs sm:text-sm md:text-base   px-3 py-1.5 sm:px-4 sm:py-2   rounded-[5px] transition-colors duration-200 whitespace-nowrap",
                                children: "Explore Now"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full sm:w-[calc(50%-1rem)] max-w-[550px]   h-[140px] sm:h-[220px] md:h-[250px]   rounded-[10px] overflow-hidden shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/card1_h3carw.webp",
                                alt: "Nail and face services at Lovely Looks beauty parlour",
                                fill: true,
                                sizes: "(max-width: 640px) 100vw, 550px",
                                className: "object-cover",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/service",
                                className: "absolute bottom-4 left-1/2 -translate-x-1/2   bg-[rgb(160,45,160)] hover:bg-[#573477] text-white   text-xs sm:text-sm md:text-base   px-3 py-1.5 sm:px-4 sm:py-2   rounded-[5px] transition-colors duration-200 whitespace-nowrap",
                                children: "Explore Now"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Home/Welcome.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Welcome;
const __TURBOPACK__default__export__ = Welcome;
var _c;
__turbopack_context__.k.register(_c, "Welcome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/utils/motion.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// In Next.js, this file can be imported by Server or Client components.
// Avoid touching window/document at import time.
__turbopack_context__.s([
    "draw",
    ()=>draw,
    "fadeIn",
    ()=>fadeIn,
    "footerVariants",
    ()=>footerVariants,
    "getMenuStyles",
    ()=>getMenuStyles,
    "headerVariants",
    ()=>headerVariants,
    "listItem",
    ()=>listItem,
    "planetVariants",
    ()=>planetVariants,
    "slideIn",
    ()=>slideIn,
    "staggerChildren",
    ()=>staggerChildren,
    "staggerContainer",
    ()=>staggerContainer,
    "textContainer",
    ()=>textContainer,
    "textVariant",
    ()=>textVariant,
    "textVariant2",
    ()=>textVariant2,
    "zoomIn",
    ()=>zoomIn
]);
const headerVariants = {};
const slideIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const staggerContainer = (staggerChildren, delayChildren)=>({
        hidden: {},
        show: {
            transition: {
                staggerChildren,
                delayChildren
            }
        }
    });
const textVariant = (delay)=>({
        hidden: {
            y: 50,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    });
const textContainer = {
    hidden: {
        opacity: 0
    },
    show: (i = 1)=>({
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: i * 0.1
            }
        })
};
const textVariant2 = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeIn"
        }
    }
};
const fadeIn = (direction, type, delay, duration)=>({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const planetVariants = (direction)=>({
        hidden: {
            x: direction === "left" ? "-100%" : "100%",
            rotate: 120
        },
        show: {
            x: 0,
            rotate: 0,
            transition: {
                type: "spring",
                duration: 1.8,
                delay: 0.5
            }
        }
    });
const zoomIn = (delay, duration)=>({
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay,
                duration,
                ease: "easeOut"
            }
        }
    });
const footerVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.5
        }
    }
};
const draw = {
    hidden: {
        pathLength: 0,
        opacity: 0
    },
    visible: (i)=>{
        const delay = 1.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    delay,
                    type: "spring",
                    duration: 5,
                    bounce: 0
                },
                opacity: {
                    delay,
                    duration: 0.01
                }
            }
        };
    }
};
const staggerChildren = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
};
const listItem = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1
    }
};
const getMenuStyles = (menuOpened)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (window.innerWidth <= 640) {
        return {
            right: !menuOpened && "-100%"
        };
    }
    return undefined;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Home/Experties.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/src/utils/data'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/motion.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Experties = ()=>{
    _s();
    const [makeupCompleted, setMakeupCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [happyClients, setHappyClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const targetMakeups = 1100;
    const targetClients = 1500;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Experties.useEffect": ()=>{
            const makeupInterval = setInterval({
                "Experties.useEffect.makeupInterval": ()=>{
                    setMakeupCompleted({
                        "Experties.useEffect.makeupInterval": (prev)=>{
                            if (prev < targetMakeups) return prev + 1;
                            clearInterval(makeupInterval);
                            return prev;
                        }
                    }["Experties.useEffect.makeupInterval"]);
                }
            }["Experties.useEffect.makeupInterval"], 5);
            const clientInterval = setInterval({
                "Experties.useEffect.clientInterval": ()=>{
                    setHappyClients({
                        "Experties.useEffect.clientInterval": (prev)=>{
                            if (prev < targetClients) return prev + 1;
                            clearInterval(clientInterval);
                            return prev;
                        }
                    }["Experties.useEffect.clientInterval"]);
                }
            }["Experties.useEffect.clientInterval"], 4);
            return ({
                "Experties.useEffect": ()=>{
                    clearInterval(makeupInterval);
                    clearInterval(clientInterval);
                }
            })["Experties.useEffect"];
        }
    }["Experties.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white bg-cover bg-center bg-no-repeat w-full",
        style: {
            backgroundImage: "url('https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/home-bg-1_mspklj.webp')"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "block",
                id: "experties"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                initial: "hidden",
                whileInView: "show",
                viewport: {
                    once: false,
                    amount: 0.25
                },
                className: "max-w-6xl mx-auto px-4 py-16 flex flex-wrap gap-8 items-start justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 flex-1 min-w-[280px]",
                        children: projectExperience.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"])("right", "tween", (i + 1) * 0.05, 0.3),
                                className: "flex items-center gap-8 border border-[coral] rounded-[20px]   p-6 transition-all duration-200 ease-out hover:shadow-lg hover:cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center w-20 h-20 rounded-full shrink-0 p-2.5",
                                        style: {
                                            background: exp.bg
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: exp.icon,
                                            alt: exp.name,
                                            className: "w-[45px] h-[45px]"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-bold text-black",
                                                children: exp.name
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 text-sm",
                                                children: [
                                                    exp.projects,
                                                    " Reviews"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textVariant"])(0.5),
                        className: "flex flex-col gap-8 flex-1 min-w-[280px] text-center sm:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl md:text-3xl font-bold text-black inline-block transition-transform duration-500 ease-out",
                                children: "What makes our beauty services unique?"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            WhatDoIHelp.map((paragraph, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 text-sm md:text-base leading-relaxed",
                                    children: paragraph
                                }, i, false, {
                                    fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-16 items-start justify-start flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl md:text-3xl font-bold text-black",
                                                children: [
                                                    makeupCompleted,
                                                    "+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 text-sm",
                                                children: "Makeup Completed"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl md:text-3xl font-bold text-black",
                                                children: [
                                                    happyClients,
                                                    "+"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                                lineNumber: 114,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-500 text-sm",
                                                children: "Happy Clients"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Home/Experties.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Home/Experties.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Experties, "LvT3cKr1vKLFFO1fumX+3v8MfLA=");
_c = Experties;
const __TURBOPACK__default__export__ = Experties;
var _c;
__turbopack_context__.k.register(_c, "Experties");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_9f9866f1._.js.map