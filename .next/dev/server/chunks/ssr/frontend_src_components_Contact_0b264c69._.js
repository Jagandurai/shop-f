module.exports = [
"[project]/frontend/src/components/Contact/ContactForm.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "ContactForm-module-scss-module__yVcSZW__badge",
  "contactContainer": "ContactForm-module-scss-module__yVcSZW__contactContainer",
  "contactForm": "ContactForm-module-scss-module__yVcSZW__contactForm",
  "contactInfo": "ContactForm-module-scss-module__yVcSZW__contactInfo",
  "contactPage": "ContactForm-module-scss-module__yVcSZW__contactPage",
  "errorMessage": "ContactForm-module-scss-module__yVcSZW__errorMessage",
  "formCard": "ContactForm-module-scss-module__yVcSZW__formCard",
  "formControl": "ContactForm-module-scss-module__yVcSZW__formControl",
  "formRow": "ContactForm-module-scss-module__yVcSZW__formRow",
  "infoBlock": "ContactForm-module-scss-module__yVcSZW__infoBlock",
  "infoCard": "ContactForm-module-scss-module__yVcSZW__infoCard",
  "infoIntro": "ContactForm-module-scss-module__yVcSZW__infoIntro",
  "infoLabel": "ContactForm-module-scss-module__yVcSZW__infoLabel",
  "inputLabel": "ContactForm-module-scss-module__yVcSZW__inputLabel",
  "overlay": "ContactForm-module-scss-module__yVcSZW__overlay",
  "submitBtn": "ContactForm-module-scss-module__yVcSZW__submitBtn",
  "textarea": "ContactForm-module-scss-module__yVcSZW__textarea",
});
}),
"[project]/frontend/src/components/Contact/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/@emailjs/browser/es/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Contact/ContactForm.module.scss [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ContactForm = ()=>{
    const { register, handleSubmit, reset, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])();
    const [disabled, setDisabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const onSubmit = async (data)=>{
        const { name, phone, subject, message } = data;
        try {
            setDisabled(true);
            const templateParams = {
                name,
                phone,
                subject,
                message
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send("service_zoumudh", "template_60i2wae", templateParams, "2oWDW3PThT-1qOPT4");
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Form submission was successful!");
            reset();
        } catch (e) {
            console.error(e);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Uh oh. Something went wrong.");
        } finally{
            setDisabled(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactPage,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                children: "Get In Touch"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoIntro,
                                children: "We are here to help. Please get in touch with us using the form or the contact details below. Whether it is bridal makeup, beauty services, or general enquiries, our team would love to hear from you."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoLabel,
                                                children: "Mobile"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "908799220"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].infoLabel,
                                                children: "Shop Opening Hours"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "10:00 AM to 8:00 PM"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                lineNumber: 73,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contactForm,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "Send us a Message"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    id: "contact-form",
                                    onSubmit: handleSubmit(onSubmit),
                                    noValidate: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputLabel,
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    ...register("name", {
                                                        required: {
                                                            value: true,
                                                            message: "Please enter your name"
                                                        },
                                                        maxLength: {
                                                            value: 30,
                                                            message: "Name must be 30 characters or less"
                                                        }
                                                    }),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formControl,
                                                    placeholder: "Enter your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                                    children: errors.name.message
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputLabel,
                                                    children: "Phone Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    ...register("phone", {
                                                        required: {
                                                            value: true,
                                                            message: "Please enter your phone number"
                                                        },
                                                        pattern: {
                                                            value: /^[0-9]{10}$/,
                                                            message: "Please enter a valid 10-digit phone number"
                                                        }
                                                    }),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formControl,
                                                    placeholder: "Enter your phone number"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                                    children: errors.phone.message
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputLabel,
                                                    children: "Subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    ...register("subject", {
                                                        required: {
                                                            value: true,
                                                            message: "Please enter a subject"
                                                        },
                                                        maxLength: {
                                                            value: 75,
                                                            message: "Subject cannot exceed 75 characters"
                                                        }
                                                    }),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formControl,
                                                    placeholder: "Enter subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.subject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                                    children: errors.subject.message
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputLabel,
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 4,
                                                    ...register("message", {
                                                        required: {
                                                            value: true,
                                                            message: "Please enter a message"
                                                        }
                                                    }),
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formControl} ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textarea}`,
                                                    placeholder: "Write your message here..."
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].errorMessage,
                                                    children: errors.message.message
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formRow,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$ContactForm$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].submitBtn,
                                                disabled: disabled,
                                                type: "submit",
                                                children: disabled ? "Submitting..." : "Submit Message"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: true
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Contact/ContactForm.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ContactForm;
}),
"[project]/frontend/src/components/Contact/FAQ.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "faqBody": "FAQ-module-scss-module__3TBP3W__faqBody",
  "faqGroup": "FAQ-module-scss-module__3TBP3W__faqGroup",
  "faqIcon": "FAQ-module-scss-module__3TBP3W__faqIcon",
  "faqItem": "FAQ-module-scss-module__3TBP3W__faqItem",
  "faqSubHeading": "FAQ-module-scss-module__3TBP3W__faqSubHeading",
  "faqText": "FAQ-module-scss-module__3TBP3W__faqText",
  "faqTitle": "FAQ-module-scss-module__3TBP3W__faqTitle",
  "faqWrapper": "FAQ-module-scss-module__3TBP3W__faqWrapper",
  "heading": "FAQ-module-scss-module__3TBP3W__heading",
});
}),
"[project]/frontend/src/components/Contact/FAQ.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Contact/FAQ.module.scss [app-ssr] (css module)");
"use client";
;
;
const faqs = [
    {
        question: "How much does the keratin treatment cost?",
        answer: "At Lovely Looks, our keratin treatments start from ₹3,999 and are conducted by expert stylists using premium products. Transform your hair with our professional care, ensuring smooth, shiny, and frizz-free results."
    },
    {
        question: "What is the cost for pedicure?",
        answer: "At Lovely Looks, pedicure services start at just ₹500. Enjoy the expertise of our professionals who provide top-quality care to keep your feet looking and feeling their best. Visit us for a relaxing and rejuvenating pedicure experience."
    },
    {
        question: "What are the bridal makeup packages available?",
        answer: "At Lovely Looks, the Bridal Package starts at ₹5000. Let our experts pamper you with top-tier beauty treatments to make you look stunning on your special day. Experience a comprehensive bridal makeover tailored to enhance your natural beauty."
    },
    {
        question: "What is cost Skin lightening?",
        answer: "At Lovely Looks, skin lightening treatments start at ₹2400. Experience the benefits of our specialized care with the expertise of our skin professionals. Visit us for a premium treatment that enhances your skin's radiance and glow."
    },
    {
        question: "How much for hair wash and blow dry for women?",
        answer: "At Lovely Looks, a hair wash and blow-dry for women starts at ₹300. Enjoy the expertise of our professional stylists for a refreshing and stylish look. Visit us for a premium hair care experience tailored to your style."
    },
    {
        question: "How much does waxing cost?",
        answer: "At Lovely Looks, waxing services start at just ₹250. Experience smooth and flawless skin with the expertise of our professionals. Visit us for a premium waxing experience tailored to your needs."
    },
    {
        question: "Pricing for hair spa Treatment?",
        answer: "At Lovely Looks, our hair spa treatments start at ₹1000. Experience the expertise of our hairstylists and the benefits of premium quality products. Indulge in a luxurious session that revitalizes and nourishes your hair."
    },
    {
        question: "How much you will charge for deep U cut for women?",
        answer: "At Lovely Looks, the cost of a deep U-cut for women starts at just ₹150. Let our expert hairstylists transform your hair with precision and style. Experience the perfect blend of creativity and skill to achieve a look that's uniquely yours. Visit us today for a premium haircut experience."
    },
    {
        question: "What is the starting price for women's haircut?",
        answer: "At Lovely Looks, women's haircuts start at just ₹250. Experience the expertise of our professional hairstylists who are dedicated to giving you a look that suits your style. Visit us for a top-notch grooming experience tailored specifically for women."
    },
    {
        question: "What are the opening hours of Lovely Looks?",
        answer: "Mon to Fri 10.00 am to 9.00 pm / Sat & Sun 8.00 am to 9.00 pm"
    },
    {
        question: "What is the price for scalp treatment?",
        answer: "At Lovely Looks, our scalp treatments, starting from ₹1,950, are performed by expert stylists using premium products. Restore and nourish your scalp with our professional care, ensuring optimal health and rejuvenation for your hair."
    },
    {
        question: "How much does it cost for hair colouring?",
        answer: "At Lovely Looks, expert stylists use premium products for our hair coloring services, which start from ₹600. Achieve vibrant and personalized color with the assurance of professional expertise and top-quality products."
    },
    {
        question: "What is the membership card price?",
        answer: "At Lovely Looks, the membership card is available for just ₹100, offering exclusive benefits and discounts on our range of premium salon services."
    },
    {
        question: "What about the price for layer cut?",
        answer: "At Lovely Looks, a stylish and expertly crafted layer cut starts at just ₹500. Our professional stylists ensure you get the perfect look tailored to your unique style."
    },
    {
        question: "How much does it cost for facial?",
        answer: "At Lovely Looks, the cost for a facial starts at just ₹300. We use high-quality premium products and our services are provided by experienced experts."
    },
    {
        question: "Is a prior booking appointment required?",
        answer: "No, prior booking appointment required at Lovely Looks."
    },
    {
        question: "What is the cost of hair straightening and smoothing at Lovely Looks?",
        answer: "At Lovely Looks, hair straightening and smoothing services start at just ₹4,999, offering you sleek, frizz-free hair at an affordable price."
    }
];
const FAQ = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                children: "Frequently Asked Questions (FAQs)"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqGroup,
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqItem,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqTitle,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqSubHeading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqText,
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqIcon
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Contact$2f$FAQ$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faqBody,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Contact/FAQ.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FAQ;
}),
];

//# sourceMappingURL=frontend_src_components_Contact_0b264c69._.js.map