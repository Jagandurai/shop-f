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
]);

//# sourceMappingURL=frontend_src_components_Home_072fc55a._.js.map