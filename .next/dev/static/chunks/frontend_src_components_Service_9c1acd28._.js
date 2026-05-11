(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/components/Service/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Hero() {
    _s();
    const [videoLoaded, setVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex h-[75vh] items-center justify-center overflow-hidden text-center text-white md:h-[90vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[1] bg-transparent",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    className: `h-full w-full object-cover object-center transition-opacity duration-300 ease-out xl:object-[50%_20%] ${videoLoaded ? "opacity-100" : "opacity-100"}`,
                    autoPlay: true,
                    loop: true,
                    muted: true,
                    playsInline: true,
                    preload: "auto",
                    onCanPlay: ()=>setVideoLoaded(true),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: "https://res.cloudinary.com/dtiaycw2o/video/upload/v1756199958/servicevideo_tmmdcb.webm",
                            type: "video/webm"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        "Your browser does not support the video tag."
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-[2] mx-auto max-w-[800px] px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mb-5 text-[2rem] font-bold drop-shadow-[2px_1px_5px_white] md:text-[3rem]",
                        children: "Welcome to Our Services"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-8 text-base font-normal md:text-[1.3rem]",
                        children: "Discover our wide range of services tailored for you."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "rounded-md border-none bg-purple-700 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-[#5f12ed]",
                        children: "Variety of Makeup"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Service/Hero.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Service/Hero.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Hero, "Rcm2DsS5NfC7GU9WZa7CBm1Rc6I=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/Service/Switching.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Switching-module-scss-module__J-daJq__active",
  "contentContainer": "Switching-module-scss-module__J-daJq__contentContainer",
  "enquiryBtn": "Switching-module-scss-module__J-daJq__enquiryBtn",
  "fixedImage": "Switching-module-scss-module__J-daJq__fixedImage",
  "leftOptions": "Switching-module-scss-module__J-daJq__leftOptions",
  "rightContent": "Switching-module-scss-module__J-daJq__rightContent",
  "switchingContainer": "Switching-module-scss-module__J-daJq__switchingContainer",
  "tabDescription": "Switching-module-scss-module__J-daJq__tabDescription",
  "tabImage": "Switching-module-scss-module__J-daJq__tabImage",
  "tabs": "Switching-module-scss-module__J-daJq__tabs",
});
}),
"[project]/frontend/src/components/Service/Switching.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Service/Switching.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tabContent = {
    hair: {
        haircuts: {
            title: "Haircuts & Styling",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/haircut_wht2tg.webp",
            description: "Whether you crave a trendy cut, a vibrant hue, or simply a style that flatters your unique features, our top hairstylists will guide you with their unparalleled knowledge and passion."
        },
        hairColouring: {
            title: "Hair Colouring & Highlighting",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Haircolour_fppjdo.webp",
            description: "Craving a splash of colour that reflects your vibrant spirit? Look no further than Lovely Looks Beauty Salon, a Luxury Salon renowned for its artistry in hair colouring and highlighting."
        },
        HairSpa: {
            title: "Hair Spa",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Hair-Spa_vvmujg.webp",
            description: "Give your hair the ultimate Luxury Salon getaway at Lovely Looks Beauty Salon, your premier Unisex Salon haven. Step beyond the everyday and into a world of deep nourishment and revitalization. Our Best Beauty Salon experts will curate a personalised Hair Spa experience tailored to your specific needs."
        },
        HairStraightening: {
            title: "Hair Straightening",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/Hair-Straightening_yesxl9.webp",
            description: "Say goodbye to frizz and hello to smooth, manageable locks with Lovely Looks Beauty Salon, the Best Beauty Salon offering Permanent Hair Straightening. Step into our Luxury Salon and prepare to experience the transformation you've always dreamed of."
        },
        KeratinTreatment: {
            title: "Keratin Treatment",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Keratin_Treatment_rnjms9.webp",
            description: "Say goodbye to dull, unmanageable hair and hello to a world of smooth, luminous locks with Lovely Looks Beauty Salon, offering transformative Keratin Treatments. Step into our Luxury Salon and experience the magic of keratin."
        }
    },
    skin: {
        skinCare: {
            title: "D-Tan",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/D-Tan_p0gep3.webp",
            description: "Let Lovely Looks Beauty Salon help you unveil your natural glow! Our De-Tan treatments gently and effectively remove unwanted tan lines, revealing an even, radiant complexion."
        },
        FaceMasks: {
            title: "Face Masks",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/latest-Face-Masks_ozjct2.webp",
            description: "Indulge in a personalised experience with Face Masks at Lovely Looks Beauty Salon. We have masks carefully chosen to address your specific skin concerns."
        },
        FaceCleanUp: {
            title: "Face-Clean Up",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Face-Clean-Up_jqzixv.webp",
            description: "Treat your skin to a meticulous Face-Clean Up at Lovely Looks Beauty Salon. Our experts utilise gentle yet effective techniques to remove impurities, dead skin cells, and excess oil."
        },
        Facials: {
            title: "Facials",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/facial_p4d6jg.webp",
            description: "Embark on a personalised journey to radiant skin with a Facial at Lovely Looks Beauty Salon. Choose from a variety of options, each designed to address specific concerns like dryness or uneven skin tone."
        },
        HydraFacial: {
            title: "HydraFacial",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/hydrafacial_vlqrxp.webp",
            description: "Experience the transformative power of a HydraFacial at Lovely Looks Beauty Salon. This combines deep cleansing, exfoliation, and hydration in one seamless treatment."
        }
    },
    body: {
        bodyMassage: {
            title: "Manicure",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/manicure_o5q4cv.webp",
            description: "At Lovely Looks Beauty Salon, your hands don't just deserve nail care, they deserve a masterpiece. Our skilled technicians will transform your fingertips into works of art with luxurious manicures."
        },
        Pedicure: {
            title: "Pedicure",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/pedicure_o2njos.webp",
            description: "At Lovely Looks Beauty Salon, your hands don't just deserve nail care, they deserve a masterpiece. Our skilled technicians will transform your fingertips into works of art with luxurious manicures."
        },
        Reflexology: {
            title: "Reflexology",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/Reflexology_iaqczh.webp",
            description: "Embark on a journey of inner peace and balance with Reflexology at Lovely Looks Beauty Salon. Our skilled therapists apply gentle pressure to specific points on your feet."
        },
        ThreadingWaxing: {
            title: "Threading & Waxing",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/threading_aatw3w.webp",
            description: "Achieve flawless brows and silky-smooth skin with Threading & Waxing at Lovely Looks Beauty Salon. Our expert technicians offer meticulous services tailored to your specific needs."
        },
        NailArt: {
            title: "Nail Art",
            imgSrc: "https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Nail_Art_jmvkbh.webp",
            description: "Let your nails be your canvas at Lovely Looks Beauty Salon. Our talented technicians are artists in disguise, wielding their brushes to create intricate designs and elegant accents."
        }
    }
};
const TAB_DEFAULT_OPTION = {
    hair: "haircuts",
    skin: "skinCare",
    body: "bodyMassage"
};
const Switching = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hair");
    const [activeOption, setActiveOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("haircuts");
    const handleTabClick = (tab)=>{
        setActiveTab(tab);
        setActiveOption(TAB_DEFAULT_OPTION[tab]);
    };
    const currentContent = tabContent[activeTab][activeOption];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switchingContainer,
        "aria-label": "Beauty Services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabs,
                "aria-label": "Service categories",
                children: Object.keys(tabContent).map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleTabClick(tab),
                        className: activeTab === tab ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                        "aria-pressed": activeTab === tab,
                        "aria-label": `${tab.charAt(0).toUpperCase() + tab.slice(1)} services`,
                        children: tab.charAt(0).toUpperCase() + tab.slice(1)
                    }, tab, false, {
                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contentContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftOptions,
                        "aria-label": "Service options",
                        children: Object.keys(tabContent[activeTab]).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveOption(option),
                                className: activeOption === option ? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "",
                                "aria-pressed": activeOption === option,
                                children: tabContent[activeTab][option].title
                            }, option, false, {
                                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabImage,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: currentContent.imgSrc,
                                    alt: `${currentContent.title} at Lovely Looks Beauty Salon`,
                                    width: 400,
                                    height: 328,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fixedImage,
                                    loading: "lazy",
                                    sizes: "(max-width: 468px) 100vw, (max-width: 768px) 100vw, 40vw",
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabDescription,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: currentContent.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: currentContent.description
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Service$2f$Switching$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enquiryBtn,
                                        children: "Book a Service Today"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Switching, "30ekZ+89/S/5ex0I5mTLGJvoqCw=");
_c = Switching;
const __TURBOPACK__default__export__ = Switching;
var _c;
__turbopack_context__.k.register(_c, "Switching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_Service_9c1acd28._.js.map