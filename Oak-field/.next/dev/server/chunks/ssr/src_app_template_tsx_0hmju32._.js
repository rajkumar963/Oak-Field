module.exports = [
"[project]/src/app/template.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Template
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const revealed = '.intro-section,.section-heading,.pillar,.technology-inner,.article-card,.careers-invitation,.content-section,.principles>div,.role-row,.hiring-steps>div,.footer-top>div';
function Template({ children }) {
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const timers = [];
        const observer = new IntersectionObserver((entries)=>entries.forEach((entry)=>{
                if (!entry.isIntersecting) return;
                const node = entry.target;
                node.classList.add('revealed');
                observer.unobserve(node);
                // Once settled, drop the reveal classes so their stagger delay never slows hover transitions.
                timers.push(window.setTimeout(()=>node.classList.remove('reveal-pending', 'revealed'), 1400 + Number(node.style.getPropertyValue('--i') || 0) * 110));
            }), {
            threshold: .08,
            rootMargin: '0px 0px -6% 0px'
        });
        document.querySelectorAll(revealed).forEach((node)=>{
            if (node.getBoundingClientRect().top <= window.innerHeight) return;
            const siblings = [
                ...node.parentElement?.children ?? []
            ].filter((el)=>el.matches(revealed));
            node.style.setProperty('--i', String(Math.max(0, siblings.indexOf(node))));
            node.classList.add('reveal-pending');
            observer.observe(node);
        });
        // A slow drift on the hero tree, so the page feels like it has depth as you leave it.
        const tree = root.current?.querySelector('.tree-visual>svg');
        let frame = 0;
        const drift = ()=>{
            frame = 0;
            const y = window.scrollY;
            if (tree && y < window.innerHeight * 1.3) tree.style.transform = `translate3d(0,${(y * .14).toFixed(1)}px,0)`;
        };
        const onScroll = ()=>{
            if (!frame) frame = requestAnimationFrame(drift);
        };
        if (tree) window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>{
            observer.disconnect();
            timers.forEach(clearTimeout);
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "page-transition",
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/template.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=src_app_template_tsx_0hmju32._.js.map