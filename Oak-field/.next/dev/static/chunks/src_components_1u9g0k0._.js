(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/contact-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ContactForm() {
    _s();
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('General');
    const [startedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ContactForm.useState": ()=>Date.now()
    }["ContactForm.useState"]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactForm.useEffect": ()=>{
            if (new URLSearchParams(window.location.search).get('category') === 'careers') setCategory('Careers');
        }
    }["ContactForm.useEffect"], []);
    async function submit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        const issues = {};
        if (String(data.name || '').trim().length < 2) issues.name = 'Please enter your name (at least 2 characters).';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ''))) issues.email = 'Please enter a valid email address.';
        if (String(data.message || '').trim().length < 20) issues.message = 'Please add a little more detail (at least 20 characters).';
        if (!data.consent) issues.consent = 'Please confirm that you have read the privacy notice.';
        setErrors(issues);
        if (Object.keys(issues).length) {
            setStatus('idle');
            form.elements.namedItem(Object.keys(issues)[0])?.focus();
            return;
        }
        setStatus('sending');
        setMessage('');
        try {
            const response = await fetch('/api/enquiries', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    startedAt
                })
            });
            const result = await response.json();
            setStatus(response.ok ? 'success' : 'error');
            setMessage(result.message || 'We could not send your enquiry. Please try again.');
            if (response.ok) {
                form.reset();
                setCategory('General');
            }
        } catch  {
            setStatus('error');
            setMessage('We could not connect. Your enquiry has not been sent. Please try again.');
        }
    }
    const field = (name, label, type = 'text', required = true)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-field",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: name,
                    children: [
                        label,
                        required ? ' *' : ' (optional)'
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/contact-form.tsx",
                    lineNumber: 19,
                    columnNumber: 110
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: name,
                    name: name,
                    type: type,
                    autoComplete: name === 'name' ? 'name' : name === 'email' ? 'email' : 'organization',
                    required: required,
                    maxLength: name === 'email' ? 254 : 120,
                    "aria-invalid": !!errors[name],
                    "aria-describedby": errors[name] ? `${name}-error` : undefined
                }, void 0, false, {
                    fileName: "[project]/src/components/contact-form.tsx",
                    lineNumber: 19,
                    columnNumber: 180
                }, this),
                errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "field-error",
                    id: `${name}-error`,
                    children: errors[name]
                }, void 0, false, {
                    fileName: "[project]/src/components/contact-form.tsx",
                    lineNumber: 19,
                    columnNumber: 478
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/contact-form.tsx",
            lineNumber: 19,
            columnNumber: 82
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "contact-form",
        onSubmit: submit,
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "form-notice",
                children: "Fields marked * are required. Please keep confidential research and sensitive information out of your message."
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 70
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-row",
                children: [
                    field('name', 'Your name'),
                    field('email', 'Email address', 'email')
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 211
            }, this),
            field('organization', 'Organization', 'text', false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "category",
                        children: "What would you like to discuss? *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 389
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "category",
                        name: "category",
                        value: category,
                        onChange: (e)=>setCategory(e.target.value),
                        children: [
                            'General',
                            'Media',
                            'Research collaboration',
                            'Careers'
                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/components/contact-form.tsx",
                                lineNumber: 20,
                                columnNumber: 620
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 456
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 361
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        children: "Your message *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 693
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        name: "message",
                        rows: 5,
                        maxLength: 5000,
                        required: true,
                        "aria-invalid": !!errors.message,
                        "aria-describedby": errors.message ? 'message-error' : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 740
                    }, this),
                    errors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "message-error",
                        className: "field-error",
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 929
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 665
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "honeypot",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "website",
                        children: "Leave this field empty"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 1047
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "website",
                        name: "website",
                        tabIndex: -1,
                        autoComplete: "off"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 1102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 1002
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "consent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: "consent",
                        required: true,
                        "aria-describedby": errors.consent ? 'consent-error' : undefined
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 1204
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "I have read the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy",
                                children: "privacy notice"
                            }, void 0, false, {
                                fileName: "[project]/src/components/contact-form.tsx",
                                lineNumber: 20,
                                columnNumber: 1338
                            }, this),
                            " and agree to the use of my details to respond to this enquiry. *"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 1316
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 1177
            }, this),
            errors.consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "field-error",
                id: "consent-error",
                children: errors.consent
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 1480
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "button",
                disabled: status === 'sending',
                children: [
                    status === 'sending' ? 'Sending…' : 'Send enquiry',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/src/components/contact-form.tsx",
                        lineNumber: 20,
                        columnNumber: 1672
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 1547
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-live": "polite",
                "aria-atomic": "true",
                children: message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `form-result ${status === 'error' ? 'error' : ''}`,
                    role: status === 'error' ? 'alert' : 'status',
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/components/contact-form.tsx",
                    lineNumber: 20,
                    columnNumber: 1769
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/contact-form.tsx",
                lineNumber: 20,
                columnNumber: 1714
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/contact-form.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_s(ContactForm, "bE2lcxLoQO2LAdcdFbKCxH+yWbE=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/interactions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleListing",
    ()=>ArticleListing,
    "ResearchProcess",
    ()=>ResearchProcess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function ResearchProcess() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "process",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "process-tabs",
                role: "tablist",
                "aria-label": "Research process",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        id: `step-${i}`,
                        role: "tab",
                        "aria-selected": i === active,
                        "aria-controls": "process-panel",
                        tabIndex: i === active ? 0 : -1,
                        onClick: ()=>setActive(i),
                        onKeyDown: (e)=>{
                            let next = i;
                            if (e.key === 'ArrowRight') next = (i + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"].length;
                            else if (e.key === 'ArrowLeft') next = (i - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"].length;
                            else if (e.key === 'Home') next = 0;
                            else if (e.key === 'End') next = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"].length - 1;
                            else return;
                            e.preventDefault();
                            setActive(next);
                            document.getElementById(`step-${next}`)?.focus();
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "0",
                                    i + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 7,
                                columnNumber: 662
                            }, this),
                            s.title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "step-dot"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 7,
                                columnNumber: 692
                            }, this)
                        ]
                    }, s.title, true, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 7,
                        columnNumber: 131
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 7,
                columnNumber: 35
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "process-panel",
                id: "process-panel",
                role: "tabpanel",
                "aria-labelledby": `step-${active}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "process-number",
                        "aria-hidden": "true",
                        children: [
                            "0",
                            active + 1,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 7,
                                columnNumber: 902
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 7,
                        columnNumber: 838
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "process-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"][active].note
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 7,
                                columnNumber: 965
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"][active].subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 7,
                                columnNumber: 1012
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["steps"][active].description
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 7,
                                columnNumber: 1045
                            }, this)
                        ]
                    }, active, true, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 7,
                        columnNumber: 922
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 7,
                columnNumber: 737
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "diagram-caption",
                children: "A conceptual research process. No proprietary strategies or results are represented."
            }, void 0, false, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 7,
                columnNumber: 1091
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactions.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_s(ResearchProcess, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c = ResearchProcess;
function ArticleListing({ section }) {
    _s1();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const source = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["articles"].filter((a)=>a.section === section);
    const categories = [
        'All',
        ...new Set(source.map((a)=>a.category))
    ];
    const filtered = source.filter((a)=>(category === 'All' || a.category === category) && `${a.title} ${a.summary} ${a.category}`.toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "wrap listing",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "listing-tools",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "filters",
                        "aria-label": "Filter articles by topic",
                        children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCategory(c),
                                "aria-pressed": category === c,
                                children: c
                            }, c, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 13,
                                columnNumber: 159
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 13,
                        columnNumber: 75
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Search articles"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 13,
                                columnNumber: 282
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "search",
                                placeholder: "Search the field…",
                                value: query,
                                onChange: (e)=>setQuery(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 13,
                                columnNumber: 330
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "⌕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 13,
                                columnNumber: 439
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 13,
                        columnNumber: 256
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 13,
                columnNumber: 44
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "results-count",
                "aria-live": "polite",
                children: [
                    filtered.length,
                    " ",
                    filtered.length === 1 ? 'article' : 'articles',
                    " · Illustrative editorial content"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 13,
                columnNumber: 486
            }, this),
            filtered.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "article-grid",
                children: filtered.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticleCard"], {
                        article: a
                    }, a.slug, false, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 13,
                        columnNumber: 705
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 13,
                columnNumber: 656
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "empty-state",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "No notes found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 13,
                        columnNumber: 784
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Try another search or explore all topics."
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 13,
                        columnNumber: 808
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-link",
                        onClick: ()=>{
                            setQuery('');
                            setCategory('All');
                        },
                        children: [
                            "Clear filters ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactions.tsx",
                                lineNumber: 13,
                                columnNumber: 954
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactions.tsx",
                        lineNumber: 13,
                        columnNumber: 856
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactions.tsx",
                lineNumber: 13,
                columnNumber: 755
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactions.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s1(ArticleListing, "r29enwV3cnPZnBoiJ514tfjrY0I=");
_c1 = ArticleListing;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResearchProcess");
__turbopack_context__.k.register(_c1, "ArticleListing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleCard",
    ()=>ArticleCard,
    "CareersInvitation",
    ()=>CareersInvitation,
    "Eyebrow",
    ()=>Eyebrow,
    "Footer",
    ()=>Footer,
    "LatestWriting",
    ()=>LatestWriting,
    "PageIntro",
    ()=>PageIntro,
    "TextLink",
    ()=>TextLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/brand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/visuals.tsx [app-client] (ecmascript)");
;
;
;
;
;
function TextLink({ href, children, light = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: `text-link ${light ? 'light' : ''}`,
        href: href,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {}, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 5,
                columnNumber: 208
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 5,
        columnNumber: 132
    }, this);
}
_c = TextLink;
function Eyebrow({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "eyebrow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 6,
                columnNumber: 102
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 6,
        columnNumber: 79
    }, this);
}
_c1 = Eyebrow;
function PageIntro({ label, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "page-intro wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 7,
                columnNumber: 159
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 7,
                columnNumber: 185
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "intro-description",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 7,
                columnNumber: 201
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 7,
        columnNumber: 122
    }, this);
}
_c2 = PageIntro;
function ArticleCard({ article }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: "article-card",
        href: `/${article.section}/${article.slug}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "article-image",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visuals$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArticleVisual"], {
                        variant: article.visual
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 8,
                        columnNumber: 180
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "image-arrow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                            diagonal: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 8,
                            columnNumber: 251
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 8,
                        columnNumber: 221
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 8,
                columnNumber: 149
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "article-meta",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: article.category
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 8,
                        columnNumber: 311
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            article.minutes,
                            " min read"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 8,
                        columnNumber: 342
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 8,
                columnNumber: 281
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: article.title
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 8,
                columnNumber: 387
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: article.summary
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 8,
                columnNumber: 411
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sample-label",
                children: "Illustrative article"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 8,
                columnNumber: 435
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 8,
        columnNumber: 73
    }, this);
}
_c3 = ArticleCard;
function LatestWriting() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "writing-section wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                                children: "Ideas in the open"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 9,
                                columnNumber: 122
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Notes from the field."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 9,
                                columnNumber: 158
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 9,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextLink, {
                        href: "/news-insights",
                        children: "News & insights"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 9,
                        columnNumber: 194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 84
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "article-grid",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["articles"].slice(0, 3).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArticleCard, {
                        article: a
                    }, a.slug, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 9,
                        columnNumber: 319
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 9,
                columnNumber: 258
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 9,
        columnNumber: 42
    }, this);
}
_c4 = LatestWriting;
function CareersInvitation() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "careers-invitation wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Eyebrow, {
                        children: "Room for a different perspective"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 10,
                        columnNumber: 96
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: [
                            "Good questions deserve",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 10,
                                columnNumber: 173
                            }, this),
                            "great company."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 10,
                        columnNumber: 147
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 10,
                columnNumber: 91
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "For people who enjoy the difficult question.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 10,
                                columnNumber: 255
                            }, this),
                            "And the work it takes to answer it."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 10,
                        columnNumber: 208
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextLink, {
                        href: "/join-our-team",
                        children: "Find your place at Oak Field"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 10,
                        columnNumber: 299
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 10,
                columnNumber: 203
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 10,
        columnNumber: 46
    }, this);
}
_c5 = CareersInvitation;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "site-footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-top",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "brand footer-brand",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OakMark"], {}, void 0, false, {
                                            fileName: "[project]/src/components/ui.tsx",
                                            lineNumber: 11,
                                            columnNumber: 168
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "OAK FIELD",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "brand-sub",
                                                    children: "RESEARCH"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui.tsx",
                                                    lineNumber: 11,
                                                    columnNumber: 193
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui.tsx",
                                            lineNumber: 11,
                                            columnNumber: 178
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Quantitative. Systematic. Precise."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 250
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 11,
                            columnNumber: 117
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-links",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: n.href,
                                        children: n.label
                                    }, n.href, false, {
                                        fileName: "[project]/src/components/ui.tsx",
                                        lineNumber: 11,
                                        columnNumber: 348
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/tech-blog",
                                    children: "Tech blog"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 399
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 11,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-contact",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "A conversation is a good beginning."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 477
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/enquiries",
                                    children: [
                                        "Let’s talk ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$brand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                            diagonal: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui.tsx",
                                            lineNumber: 11,
                                            columnNumber: 560
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 525
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 11,
                            columnNumber: 445
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui.tsx",
                    lineNumber: 11,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-bottom",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Oak Field Research"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 11,
                            columnNumber: 627
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy",
                                    children: "Privacy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 692
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms",
                                    children: "Terms"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 728
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/disclosures",
                                    children: "Disclosures"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 760
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#top",
                                    children: "Back to top ↑"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui.tsx",
                                    lineNumber: 11,
                                    columnNumber: 804
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui.tsx",
                            lineNumber: 11,
                            columnNumber: 687
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui.tsx",
                    lineNumber: 11,
                    columnNumber: 596
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui.tsx",
            lineNumber: 11,
            columnNumber: 67
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 11,
        columnNumber: 35
    }, this);
}
_c6 = Footer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "TextLink");
__turbopack_context__.k.register(_c1, "Eyebrow");
__turbopack_context__.k.register(_c2, "PageIntro");
__turbopack_context__.k.register(_c3, "ArticleCard");
__turbopack_context__.k.register(_c4, "LatestWriting");
__turbopack_context__.k.register(_c5, "CareersInvitation");
__turbopack_context__.k.register(_c6, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/visuals.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleVisual",
    ()=>ArticleVisual,
    "ResearchTree",
    ()=>ResearchTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function random(seed) {
    const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
}
function ResearchTree() {
    const branches = [];
    const leaves = [];
    function branch(x, y, length, angle, depth, seed) {
        const endX = x + Math.cos(angle) * length, endY = y + Math.sin(angle) * length;
        branches.push({
            d: `M${x.toFixed(2)},${y.toFixed(2)} Q${(x + Math.cos(angle + .12) * length * .55).toFixed(2)},${(y + Math.sin(angle + .12) * length * .55).toFixed(2)} ${endX.toFixed(2)},${endY.toFixed(2)}`,
            width: depth * .48 + .2
        });
        if (depth <= 3) for(let i = 0; i < 15; i++){
            const t = random(seed + i * 7), a = random(seed + i * 9 + 8) * Math.PI * 2, spread = 9 + depth * 5;
            leaves.push({
                x: endX + Math.cos(a) * spread * t,
                y: endY + Math.sin(a) * spread * t,
                r: .65 + random(seed + i * 3) * 1.6,
                opacity: .22 + random(seed + i) * .65
            });
        }
        if (depth === 0) return;
        branch(endX, endY, length * (.7 + random(seed) * .11), angle - .32 - random(seed + 1) * .37, depth - 1, seed * 2 + 1);
        branch(endX, endY, length * (.68 + random(seed + 2) * .13), angle + .3 + random(seed + 3) * .36, depth - 1, seed * 2 + 2);
    }
    branch(300, 425, 95, -Math.PI / 2, 8, 7);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tree-visual",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 600 510",
                role: "img",
                "aria-labelledby": "tree-title",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        id: "tree-title",
                        children: "A branching oak tree drawn from fine lines and thousands of data points"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 106
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                id: "tree-grid",
                                width: "38",
                                height: "38",
                                patternUnits: "userSpaceOnUse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M38 0H0V38",
                                    fill: "none",
                                    stroke: "#1b5b40",
                                    strokeWidth: ".4",
                                    opacity: ".12"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/visuals.tsx",
                                    lineNumber: 14,
                                    columnNumber: 291
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 214
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                                id: "tree-glow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        stopColor: "#dfe8d9",
                                        stopOpacity: ".8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visuals.tsx",
                                        lineNumber: 14,
                                        columnNumber: 414
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "1",
                                        stopColor: "#f6f7f0",
                                        stopOpacity: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visuals.tsx",
                                        lineNumber: 14,
                                        columnNumber: 458
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 383
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 208
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "300",
                        cy: "252",
                        r: "245",
                        fill: "url(#tree-glow)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 536
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "40",
                        y: "25",
                        width: "520",
                        height: "440",
                        fill: "url(#tree-grid)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 594
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "none",
                        stroke: "#759482",
                        strokeWidth: ".6",
                        opacity: ".5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "300",
                                cy: "252",
                                r: "202",
                                strokeDasharray: "2 7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 725
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M300 10V476M33 252H570",
                                strokeDasharray: "2 6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 782
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "300",
                                cy: "432",
                                rx: "160",
                                ry: "24"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 838
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                                cx: "300",
                                cy: "432",
                                rx: "110",
                                ry: "15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 883
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 663
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "tree-branches",
                        fill: "none",
                        stroke: "#365e44",
                        strokeLinecap: "round",
                        children: branches.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: b.d,
                                strokeWidth: b.width
                            }, i, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1036
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 932
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        className: "tree-leaves",
                        fill: "#406d4b",
                        children: leaves.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: l.x,
                                cy: l.y,
                                r: l.r,
                                opacity: l.opacity
                            }, i, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1151
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 1087
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "#f8f9f3",
                        stroke: "#55745d",
                        strokeWidth: "1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "300",
                                cy: "331",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1271
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "191",
                                cy: "229",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1304
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "401",
                                cy: "195",
                                r: "4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1337
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 1220
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fontSize: "8",
                        fill: "#798878",
                        fontFamily: "monospace",
                        letterSpacing: "1.3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "43",
                                y: "38",
                                children: "FIG. 01 — THE NATURE OF DISCOVERY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1448
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "383",
                                y: "486",
                                children: "ROOTED IN RESEARCH."
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1508
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                x: "43",
                                y: "486",
                                children: "OFR / 001"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visuals.tsx",
                                lineNumber: 14,
                                columnNumber: 1556
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 1374
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        fill: "none",
                        stroke: "#7e927b",
                        strokeWidth: ".7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M35 65V55H45M555 55H565V65M35 437V447H45M555 447H565V437"
                        }, void 0, false, {
                            fileName: "[project]/src/components/visuals.tsx",
                            lineNumber: 14,
                            columnNumber: 1646
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 1597
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visuals.tsx",
                lineNumber: 14,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "visual-caption",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "live-dot"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 14,
                        columnNumber: 1757
                    }, this),
                    " Many observations. A deeper understanding."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visuals.tsx",
                lineNumber: 14,
                columnNumber: 1724
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visuals.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_c = ResearchTree;
function ArticleVisual({ variant }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 600 330",
        className: `article-art art-${variant}`,
        "aria-hidden": "true",
        preserveAspectRatio: "xMidYMid slice",
        children: [
            variant === 'rings' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "none",
                stroke: "currentColor",
                strokeWidth: ".9",
                children: Array.from({
                    length: 28
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: 320 + Math.sin(i * .45) * 9,
                        cy: 164 + Math.cos(i * .7) * 4,
                        rx: 22 + i * 6.1,
                        ry: 19 + i * 4.5,
                        transform: `rotate(${i * 3} 320 164)`
                    }, i, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 17,
                        columnNumber: 249
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/visuals.tsx",
                lineNumber: 17,
                columnNumber: 157
            }, this) : variant === 'grid' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "currentColor",
                fill: "none",
                strokeWidth: ".8",
                children: [
                    Array.from({
                        length: 19
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: `M${80 + i * 22} 270L${190 + i * 13} 70M80 ${80 + i * 10}L500 ${110 + i * 10}`
                        }, i, false, {
                            fileName: "[project]/src/components/visuals.tsx",
                            lineNumber: 17,
                            columnNumber: 529
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "300",
                        cy: "160",
                        r: "48",
                        fill: "var(--art-bg)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 17,
                        columnNumber: 629
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "300",
                        cy: "160",
                        r: "27"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 17,
                        columnNumber: 684
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M300 107V213M247 160H353"
                    }, void 0, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 17,
                        columnNumber: 718
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visuals.tsx",
                lineNumber: 17,
                columnNumber: 437
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "currentColor",
                fill: "none",
                strokeWidth: ".8",
                children: Array.from({
                    length: 25
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M-20 ${90 + i * 7} C100 ${250 + i * 3},160 ${-80 + i * 11},300 ${110 + i * 6} S470 ${310 - i * 9},620 ${100 + i * 5}`
                    }, i, false, {
                        fileName: "[project]/src/components/visuals.tsx",
                        lineNumber: 17,
                        columnNumber: 853
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/visuals.tsx",
                lineNumber: 17,
                columnNumber: 761
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "25",
                y: "306",
                fill: "currentColor",
                opacity: ".55",
                fontFamily: "monospace",
                fontSize: "9",
                letterSpacing: "2",
                children: "OAK FIELD / RESEARCH NOTES"
            }, void 0, false, {
                fileName: "[project]/src/components/visuals.tsx",
                lineNumber: 17,
                columnNumber: 998
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visuals.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = ArticleVisual;
var _c, _c1;
__turbopack_context__.k.register(_c, "ResearchTree");
__turbopack_context__.k.register(_c1, "ArticleVisual");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1u9g0k0._.js.map