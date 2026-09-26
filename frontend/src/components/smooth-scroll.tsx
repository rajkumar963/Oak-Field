'use client';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
export function SmoothScroll() {
  const lenis = useRef<Lenis | null>(null);
  const path = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const instance = new Lenis({ lerp: .1, wheelMultiplier: 1, autoRaf: true });
    lenis.current = instance;
    // Same-page anchors glide instead of jumping. Captured before Next's Link so the two don't compete.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest?.('a');
      if (!link || link.classList.contains('skip-link')) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      e.preventDefault(); e.stopPropagation();
      instance.scrollTo(url.hash === '#top' ? 0 : target, { offset: -40, duration: 1.4 });
    };
    document.addEventListener('click', onClick, true);
    return () => { document.removeEventListener('click', onClick, true); instance.destroy(); lenis.current = null; };
  }, []);
  // A new page has a new height; let Lenis re-measure once it has rendered.
  useEffect(() => { requestAnimationFrame(() => lenis.current?.resize()); }, [path]);
  return null;
}
