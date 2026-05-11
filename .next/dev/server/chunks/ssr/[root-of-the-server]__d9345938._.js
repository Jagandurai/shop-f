module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/frontend/src/components/Hero/Hero.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
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
function Hero() {
    const flower = "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/homeheroflower_l0owlr.webp";
    const person = "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/person_isbwyu.webp";
    const splash = "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/splash_z7aa5q.png";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex h-[90vh] w-full items-center justify-center overflow-hidden bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: flower,
                alt: "Flower",
                className: [
                    "absolute left-0 top-0 h-auto",
                    // size
                    "w-[18rem] max-[486px]:w-[20rem] max-[786px]:w-[22rem] lg:w-[35rem]",
                    // position offsets
                    "-mt-[40px] -ml-[30px] max-[486px]:-mt-[60px] max-[486px]:-ml-[20px] max-[786px]:-mt-[80px] max-[786px]:-ml-[30px] lg:-mt-[120px] lg:-ml-[40px]",
                    // default moved toward center (like your SCSS transform)
                    "translate-x-[5%] translate-y-[5%] max-[486px]:translate-x-[10%] max-[486px]:translate-y-[10%] max-[786px]:translate-x-[20%] max-[786px]:translate-y-[20%] lg:translate-x-[30%] lg:translate-y-[30%]",
                    // hover: move back out
                    "transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                ].join(" ")
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: flower,
                alt: "Flower",
                className: [
                    "absolute right-0 top-0 h-auto",
                    "w-[18rem] max-[486px]:w-[20rem] max-[786px]:w-[22rem] lg:w-[35rem]",
                    "-mt-[30px] -mr-[30px] max-[486px]:-mt-[50px] max-[486px]:-mr-[40px] max-[786px]:-mt-[70px] max-[786px]:-mr-[30px] lg:-mt-[110px] lg:-mr-[50px]",
                    "-translate-x-[5%] translate-y-[5%] max-[486px]:-translate-x-[10%] max-[486px]:translate-y-[10%] max-[786px]:-translate-x-[20%] max-[786px]:translate-y-[20%] lg:-translate-x-[30%] lg:translate-y-[30%]",
                    "transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                ].join(" ")
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: flower,
                alt: "Flower",
                className: [
                    "absolute bottom-0 left-0 h-auto",
                    "w-[18rem] max-[486px]:w-[20rem] max-[786px]:w-[22rem] lg:w-[35rem]",
                    "-mb-[50px] -ml-[40px] max-[486px]:-mb-[60px] max-[486px]:-ml-[50px] max-[786px]:-mb-[90px] max-[786px]:-ml-[60px] lg:-mb-[100px] lg:-ml-[100px]",
                    "z-[100] scale-x-[-1]",
                    "translate-x-[5%] -translate-y-[5%] max-[486px]:translate-x-[10%] max-[486px]:-translate-y-[10%] max-[786px]:translate-x-[20%] max-[786px]:-translate-y-[20%] lg:translate-x-[30%] lg:-translate-y-[30%]",
                    "transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                ].join(" ")
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: flower,
                alt: "Flower",
                className: [
                    "absolute bottom-0 right-0 h-auto",
                    "w-[18rem] max-[486px]:w-[20rem] max-[786px]:w-[22rem] lg:w-[35rem]",
                    "-mb-[50px] -mr-[40px] max-[486px]:-mb-[60px] max-[486px]:-mr-[30px] max-[786px]:-mb-[90px] max-[786px]:-mr-[40px] lg:-mb-[100px] lg:-mr-[60px]",
                    "z-[100] scale-x-[-1]",
                    "-translate-x-[5%] -translate-y-[5%] max-[486px]:-translate-x-[10%] max-[486px]:-translate-y-[10%] max-[786px]:-translate-x-[20%] max-[786px]:-translate-y-[20%] lg:-translate-x-[30%] lg:-translate-y-[30%]",
                    "transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0"
                ].join(" ")
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: fadeIn("up", "tween", 0.3, 1),
                initial: "initial",
                animate: "animate",
                className: [
                    "absolute top-[20px] z-10 flex items-center justify-center",
                    // size similar to SCSS (23rem, then smaller on breakpoints)
                    "w-[12rem] max-[486px]:w-[14rem] max-[786px]:w-[20rem] lg:w-[23rem]",
                    // background splash
                    "bg-no-repeat bg-center",
                    "bg-[length:12rem] max-[486px]:bg-[length:14rem] max-[786px]:bg-[length:16rem] lg:bg-[length:23rem]"
                ].join(" "),
                style: {
                    backgroundImage: `url(${splash})`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                    variants: slideIn("up", "tween", 0.5, 1.3),
                    initial: "initial",
                    animate: "animate",
                    src: person,
                    alt: "Person",
                    className: "h-auto w-[18rem] max-[786px]:w-[22.5rem] lg:w-[23rem]"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Hero/Hero.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d9345938._.js.map