(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/template.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Template
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const revealed = '.intro-section,.section-heading,.pillar,.technology-inner,.article-card,.careers-invitation,.content-section,.principles>div,.role-row,.hiring-steps>div,.footer-top>div';
function Template({ children }) {
    _s();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Template.useEffect": ()=>{
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const timers = [];
            const observer = new IntersectionObserver({
                "Template.useEffect": (entries)=>entries.forEach({
                        "Template.useEffect": (entry)=>{
                            if (!entry.isIntersecting) return;
                            const node = entry.target;
                            node.classList.add('revealed');
                            observer.unobserve(node);
                            // Once settled, drop the reveal classes so their stagger delay never slows hover transitions.
                            timers.push(window.setTimeout({
                                "Template.useEffect": ()=>node.classList.remove('reveal-pending', 'revealed')
                            }["Template.useEffect"], 1400 + Number(node.style.getPropertyValue('--i') || 0) * 110));
                        }
                    }["Template.useEffect"])
            }["Template.useEffect"], {
                threshold: .08,
                rootMargin: '0px 0px -6% 0px'
            });
            document.querySelectorAll(revealed).forEach({
                "Template.useEffect": (node)=>{
                    if (node.getBoundingClientRect().top <= window.innerHeight) return;
                    const siblings = [
                        ...node.parentElement?.children ?? []
                    ].filter({
                        "Template.useEffect.siblings": (el)=>el.matches(revealed)
                    }["Template.useEffect.siblings"]);
                    node.style.setProperty('--i', String(Math.max(0, siblings.indexOf(node))));
                    node.classList.add('reveal-pending');
                    observer.observe(node);
                }
            }["Template.useEffect"]);
            // A slow drift on the hero tree, so the page feels like it has depth as you leave it.
            const tree = root.current?.querySelector('.tree-visual>svg');
            let frame = 0;
            const drift = {
                "Template.useEffect.drift": ()=>{
                    frame = 0;
                    const y = window.scrollY;
                    if (tree && y < window.innerHeight * 1.3) tree.style.transform = `translate3d(0,${(y * .14).toFixed(1)}px,0)`;
                }
            }["Template.useEffect.drift"];
            const onScroll = {
                "Template.useEffect.onScroll": ()=>{
                    if (!frame) frame = requestAnimationFrame(drift);
                }
            }["Template.useEffect.onScroll"];
            if (tree) window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Template.useEffect": ()=>{
                    observer.disconnect();
                    timers.forEach(clearTimeout);
                    window.removeEventListener('scroll', onScroll);
                    cancelAnimationFrame(frame);
                }
            })["Template.useEffect"];
        }
    }["Template.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "page-transition",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/template.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
_s(Template, "/rr7G8WhLICCHRj4HQ5x5ovssB4=");
_c = Template;
var _c;
__turbopack_context__.k.register(_c, "Template");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_template_tsx_12-dhor._.js.map