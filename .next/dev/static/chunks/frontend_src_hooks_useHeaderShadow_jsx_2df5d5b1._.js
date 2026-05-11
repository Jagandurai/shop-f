(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/hooks/useHeaderShadow.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useHeaderShadow = ()=>{
    _s();
    const [headerShadow, setHeaderShadow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeaderShadow.useEffect": ()=>{
            function handleScroll() {
                if (window.scrollY > 0) {
                    setHeaderShadow("rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px");
                } else {
                    setHeaderShadow("none");
                }
            }
            handleScroll(); // set initial shadow on load
            window.addEventListener("scroll", handleScroll);
            return ({
                "useHeaderShadow.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["useHeaderShadow.useEffect"];
        }
    }["useHeaderShadow.useEffect"], []);
    return headerShadow;
};
_s(useHeaderShadow, "cuTnVkzRS6zdDqKUjtKyXaFn6Mg=");
const __TURBOPACK__default__export__ = useHeaderShadow;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_hooks_useHeaderShadow_jsx_2df5d5b1._.js.map