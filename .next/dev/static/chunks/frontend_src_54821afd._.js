(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/src/components/Header/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/bi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/utils/motion.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../hooks/useOutsideAlerter'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useHeaderShadow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useHeaderShadow.jsx [app-client] (ecmascript)");
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
function Header() {
    _s();
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menuOpened, setMenuOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerShadow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useHeaderShadow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    useOutsideAlerter({
        menuRef,
        setMenuOpened
    });
    const toggleMenu = ()=>setMenuOpened((prev)=>!prev);
    // Close menu on mobile after clicking a link
    const handleMenuItemClick = ()=>{
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.innerWidth <= 640) {
            setMenuOpened(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerVariants"],
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: true,
            amount: 0.25
        },
        style: {
            boxShadow: headerShadow
        },
        className: "sticky top-0 z-[1000] bg-gradient-to-r from-purple-700 via-red-600 to-orange-400 transition-all duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    onClick: handleMenuItemClick,
                    className: "select-none font-serif text-[32px] font-bold text-white no-underline",
                    children: "LOVELY LOOKS"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Header/Header.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    ref: menuRef,
                    // getMenuStyles(menuOpened) returns inline style for open/close;
                    // we keep it so you don't have to rewrite its logic now.
                    style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$utils$2f$motion$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMenuStyles"])(menuOpened),
                    className: [
                        "flex list-none gap-6 uppercase text-white",
                        "sm:static sm:h-auto sm:w-auto sm:flex-row sm:bg-transparent sm:p-0 sm:shadow-none",
                        // mobile panel defaults:
                        "max-sm:absolute max-sm:right-0 max-sm:top-12 max-sm:h-[calc(100vh-6.3rem)] max-sm:w-1/2 max-sm:min-w-60",
                        "max-sm:flex-col max-sm:items-start max-sm:justify-start max-sm:gap-8",
                        "max-sm:rounded-lg max-sm:bg-purple-800 max-sm:p-8 max-sm:shadow-lg"
                    ].join(" "),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: handleMenuItemClick,
                                className: "no-underline hover:text-white",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Header/Header.jsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Header/Header.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/service",
                                onClick: handleMenuItemClick,
                                className: "no-underline hover:text-white",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Header/Header.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Header/Header.jsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/gallery",
                                onClick: handleMenuItemClick,
                                className: "no-underline hover:text-white",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Header/Header.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Header/Header.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                onClick: handleMenuItemClick,
                                className: "no-underline hover:text-white",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Header/Header.jsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Header/Header.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Header/Header.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: toggleMenu,
                    className: "hidden text-white max-sm:block",
                    "aria-label": "Open menu",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BiMenuAltRight, {
                        size: 30
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Header/Header.jsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Header/Header.jsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/Header/Header.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/Header/Header.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Header, "CdP0HefF+kUccA9KC4hZKuQbsPE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useHeaderShadow$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        useOutsideAlerter
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_54821afd._.js.map