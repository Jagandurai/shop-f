module.exports = [
"[project]/frontend/src/components/Hero/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Hero() {
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setAnimate(true); // trigger animation on load (mobile-friendly)
    }, []);
    const flower = "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp";
    const person = "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp";
    const splash = "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/splash_z7aa5q.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-white px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: flower,
                alt: "flower",
                width: 600,
                height: 600,
                priority: true,
                className: `
          absolute top-0 left-0
          w-[10rem] sm:w-[14rem] lg:w-[30rem]

          -mt-6 -ml-4 sm:-mt-10 sm:-ml-6 lg:-mt-[120px] lg:-ml-[40px]

          transition-all duration-700 ease-in-out
          ${animate ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-[40%] translate-y-[40%] opacity-0"}
        `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: flower,
                alt: "flower",
                width: 600,
                height: 600,
                priority: true,
                className: `
          absolute top-0 right-0
          w-[10rem] sm:w-[14rem] lg:w-[30rem]

          -mt-6 -mr-4 sm:-mt-10 sm:-mr-6 lg:-mt-[110px] lg:-mr-[50px]

          transition-all duration-700 ease-in-out
          ${animate ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-[40%] translate-y-[40%] opacity-0"}
        `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: flower,
                alt: "flower",
                width: 600,
                height: 600,
                className: `
          absolute bottom-0 left-0
          w-[10rem] sm:w-[14rem] lg:w-[30rem]

          -mb-6 -ml-4 sm:-mb-10 sm:-ml-6 lg:-mb-[100px] lg:-ml-[100px]

          scale-x-[-1]

          transition-all duration-700 ease-in-out
          ${animate ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-[40%] -translate-y-[40%] opacity-0"}
        `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: flower,
                alt: "flower",
                width: 600,
                height: 600,
                className: `
          absolute bottom-0 right-0
          w-[10rem] sm:w-[14rem] lg:w-[30rem]

          -mb-6 -mr-4 sm:-mb-10 sm:-mr-6 lg:-mb-[100px] lg:-mr-[60px]

          scale-x-[-1]

          transition-all duration-700 ease-in-out
          ${animate ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-[40%] -translate-y-[40%] opacity-0"}
        `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
          relative z-10 flex items-center justify-center

          w-[16rem] sm:w-[20rem] lg:w-[24rem]

          transition-all duration-700 ease-out
          ${animate ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `,
                style: {
                    backgroundImage: `url(${splash})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: person,
                    alt: "person",
                    width: 400,
                    height: 400,
                    priority: true,
                    className: "w-full h-auto"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_components_Hero_Hero_jsx_b393746e._.js.map