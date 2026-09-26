'use client';
import { useEffect, useRef } from 'react';
const revealed = '.intro-section,.section-heading,.pillar,.technology-inner,.article-card,.careers-invitation,.content-section,.principles>div,.role-row,.hiring-steps>div,.footer-top>div';
export default function Template({children}:{children:React.ReactNode}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timers: number[] = [];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const node = entry.target as HTMLElement; node.classList.add('revealed'); observer.unobserve(node);
      // Once settled, drop the reveal classes so their stagger delay never slows hover transitions.
      timers.push(window.setTimeout(() => node.classList.remove('reveal-pending','revealed'), 1400 + Number(node.style.getPropertyValue('--i') || 0) * 110));
    }), {threshold:.08, rootMargin:'0px 0px -6% 0px'});
    document.querySelectorAll<HTMLElement>(revealed).forEach(node => {
      if(node.getBoundingClientRect().top <= window.innerHeight) return;
      const siblings = [...(node.parentElement?.children ?? [])].filter(el => el.matches(revealed));
      node.style.setProperty('--i', String(Math.max(0, siblings.indexOf(node))));
      node.classList.add('reveal-pending'); observer.observe(node);
    });
    // A slow drift on the hero tree, so the page feels like it has depth as you leave it.
    const tree = root.current?.querySelector<SVGElement>('.tree-visual>svg');
    let frame = 0;
    const drift = () => { frame = 0; const y = window.scrollY; if(tree && y < window.innerHeight * 1.3) tree.style.transform = `translate3d(0,${(y * .14).toFixed(1)}px,0)`; };
    const onScroll = () => { if(!frame) frame = requestAnimationFrame(drift); };
    if(tree) window.addEventListener('scroll', onScroll, {passive:true});
    return () => { observer.disconnect(); timers.forEach(clearTimeout); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  },[]);
  return <div ref={root} className="page-transition">{children}</div>;
}
