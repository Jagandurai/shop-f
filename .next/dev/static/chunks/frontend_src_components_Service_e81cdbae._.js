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
"[project]/frontend/src/components/Service/Switching.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/Switching.jsx
'use client';
;
;
const Switching = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hair');
    const [activeOption, setActiveOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('haircuts');
    const handleTabClick = (tab)=>{
        setActiveTab(tab);
        const defaultOptions = {
            hair: 'haircuts',
            skin: 'skinCare',
            body: 'bodyMassage',
            bridal: 'bridalServices'
        };
        setActiveOption(defaultOptions[tab]);
    };
    const handleOptionClick = (option)=>setActiveOption(option);
    const tabContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Switching.useMemo[tabContent]": ()=>({
                hair: {
                    haircuts: {
                        title: 'Haircuts & Styling',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/haircut_wht2tg.webp',
                        description: 'Whether you crave a trendy cut, a vibrant hue, or simply a style that flatters your unique features, our top hairstylists will guide you with their unparalleled knowledge and passion.'
                    },
                    hairColouring: {
                        title: 'Hair Colouring & Highlighting',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Haircolour_fppjdo.webp',
                        description: 'Craving a splash of colour that reflects your vibrant spirit? Look no further than Lovely Looks Beauty Salon, a Luxury Salon renowned for its artistry in hair colouring and highlighting.'
                    },
                    HairSpa: {
                        title: 'Hair Spa',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199684/Hair-Spa_vvmujg.webp',
                        description: 'Give your hair the ultimate Luxury Salon getaway at Lovely Looks Beauty Salon, your premier Unisex Salon haven. Step beyond the everyday and into a world of deep nourishment and revitalization.'
                    },
                    HairStraightening: {
                        title: 'Hair Straightening',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/Hair-Straightening_yesxl9.webp',
                        description: 'Say goodbye to frizz and hello to smooth, manageable locks with Lovely Looks Beauty Salon, the Best Beauty Salon offering Permanent Hair Straightening.'
                    },
                    KeratinTreatment: {
                        title: 'Keratin Treatment',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Keratin_Treatment_rnjms9.webp',
                        description: 'Say goodbye to dull, unmanageable hair and hello to a world of smooth, luminous locks with Lovely Looks Beauty Salon, offering transformative Keratin Treatments.'
                    }
                },
                skin: {
                    skinCare: {
                        title: 'D-Tan',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199686/D-Tan_p0gep3.webp',
                        description: 'Let Lovely Looks Beauty Salon help you unveil your natural glow! Our De-Tan treatments gently and effectively remove unwanted tan lines, revealing an even, radiant complexion.'
                    },
                    FaceMasks: {
                        title: 'Face Masks',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/latest-Face-Masks_ozjct2.webp',
                        description: 'Indulge in a personalised experience with Face Masks at Lovely Looks Beauty Salon. We have masks carefully chosen to address your specific skin concerns.'
                    },
                    FaceCleanUp: {
                        title: 'Face-Clean Up',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/Face-Clean-Up_jqzixv.webp',
                        description: 'Treat your skin to a meticulous Face-Clean Up at Lovely Looks Beauty Salon. Our experts utilise gentle yet effective techniques to remove impurities, dead skin cells, and excess oil.'
                    },
                    Facials: {
                        title: 'Facials',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199687/facial_p4d6jg.webp',
                        description: 'Embark on a personalised journey to radiant skin with a Facial at Lovely Looks Beauty Salon. Our expert estheticians will tailor the facial to your unique needs.'
                    },
                    HydraFacial: {
                        title: 'HydraFacial',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/hydrafacial_vlqrxp.webp',
                        description: 'Experience the transformative power of a HydraFacial at Lovely Looks Beauty Salon. This combines deep cleansing, exfoliation, and hydration in one seamless treatment.'
                    }
                },
                body: {
                    bodyMassage: {
                        title: 'Manicure',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/manicure_o5q4cv.webp',
                        description: 'At Lovely Looks Beauty Salon, your hands don\'t just deserve nail care, they deserve a masterpiece. Our skilled technicians will transform your fingertips into works of art with luxurious manicures.'
                    },
                    Pedicure: {
                        title: 'Pedicure',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/pedicure_o2njos.webp',
                        description: 'At Lovely Looks Beauty Salon, your hands don\'t just deserve nail care, they deserve a masterpiece. Our skilled technicians will transform your fingertips into works of art.'
                    },
                    Reflexology: {
                        title: 'Reflexology',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199689/Reflexology_iaqczh.webp',
                        description: 'Embark on a journey of inner peace and balance with Reflexology at Lovely Looks Beauty Salon. Our skilled therapists apply gentle pressure to specific points on your feet.'
                    },
                    ThreadingWaxing: {
                        title: 'Threading & Waxing',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199690/threading_aatw3w.webp',
                        description: 'Achieve flawless brows and silky-smooth skin with Threading & Waxing at Lovely Looks Beauty Salon. Our expert technicians offer meticulous services tailored to your specific needs.'
                    },
                    NailArt: {
                        title: 'Nail Art',
                        imgSrc: 'https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199688/Nail_Art_jmvkbh.webp',
                        description: 'Let your nails be your canvas at Lovely Looks Beauty Salon. Our talented technicians are artists in disguise, wielding their brushes to create intricate designs, playful patterns, or elegant accents.'
                    }
                },
                bridal: {
                    bridalServices: {
                        title: 'Pre-Wedding & Bridal',
                        imgSrc: '/images/bridal-services.png',
                        description: 'Prepare for your special day with our bridal services, designed to enhance your beauty and confidence.'
                    }
                }
            })
    }["Switching.useMemo[tabContent]"], []);
    const currentContent = tabContent[activeTab][activeOption];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center pt-20 mb-5 flex-row items-center",
                children: [
                    'hair',
                    'skin',
                    'body'
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleTabClick(tab),
                        className: `px-6 py-[15px] mx-[5px] border-none font-bold text-xl cursor-pointer transition-colors duration-300
              ${activeTab === tab ? 'bg-[rgba(125,70,154,1)] text-white' : 'bg-[#f0f0f0] text-black hover:bg-[rgb(192,115,233)]'}`,
                        children: tab.charAt(0).toUpperCase() + tab.slice(1)
                    }, tab, false, {
                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between max-w-[1200px] mx-auto p-5   lg:flex-col lg:max-w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 p-5 flex flex-col gap-[15px] lg:flex-none lg:w-full lg:mb-5",
                        children: Object.keys(tabContent[activeTab]).map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleOptionClick(option),
                                className: `bg-white border border-[#ddd] py-[15px] px-4 text-left font-medium text-lg cursor-pointer w-full transition-colors duration-200
                ${activeOption === option ? 'bg-[rgba(125,70,154,1)] !text-white' : 'hover:bg-[rgb(119,185,6)]'}`,
                                children: tabContent[activeTab][option].title
                            }, option, false, {
                                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                        lineNumber: 143,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-[2] p-5 flex flex-row items-start   lg:flex-none lg:w-full lg:ml-0   max-[768px]:flex-col   max-[468px]:flex-col max-[468px]:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[40%] h-[328px] overflow-hidden flex justify-center items-center   max-[1024px]:w-full max-[1024px]:h-[250px]   max-[768px]:w-full max-[768px]:h-[200px]   max-[468px]:w-full max-[468px]:h-[180px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: currentContent.imgSrc,
                                    alt: activeOption,
                                    width: 600,
                                    height: 328,
                                    loading: "lazy",
                                    className: "w-full h-full object-cover rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[60%] text-left ml-5   max-[1024px]:w-full max-[1024px]:text-center max-[1024px]:ml-0   max-[768px]:w-full max-[768px]:text-center   max-[468px]:w-full max-[468px]:text-center max-[468px]:mt-[10px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[30px] font-semibold mb-[10px]",
                                        children: currentContent.title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[17px] leading-[1.7rem] tracking-[0.001rem] text-[#333333] font-medium",
                                        children: currentContent.description
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mt-5 px-[22px] py-3 bg-[rgba(125,70,154,1)] text-white border-none font-bold cursor-pointer hover:bg-[rgba(125,70,154,0.85)] transition-colors duration-200",
                                        children: "Book a Service Today"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                                        lineNumber: 191,
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
                        lineNumber: 160,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Service/Switching.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Service/Switching.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Switching, "38jOvCpaHCW99dimz0iRPzaCpfU=");
_c = Switching;
const __TURBOPACK__default__export__ = Switching;
var _c;
__turbopack_context__.k.register(_c, "Switching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_components_Service_e81cdbae._.js.map