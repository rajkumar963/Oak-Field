'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation, type NavMenu } from '../lib/content';
import { OakMark } from './brand';
// The last menu opens from its right edge so it stays inside narrower viewports.
const lastMenu = navigation.map(n => !!n.menu).lastIndexOf(true);
const pad = (n: number) => String(n).padStart(2, '0');
function Panel({ id, label, menu, onNavigate }: { id: string; label: string; menu: NavMenu; onNavigate: () => void }) {
  return <div id={id} className="nav-panel"><div className="menu-head" aria-hidden="true"><span>{label}</span><span>01 — {pad(menu.items.length)}</span></div><ol className="menu-list">{menu.items.map((m, i) => <li key={m.href} style={{ '--i': i } as React.CSSProperties}><Link href={m.href} className="menu-row" onClick={onNavigate}><span className="menu-index" aria-hidden="true">{pad(i + 1)}</span><span><strong>{m.title}</strong><span>{m.text}</span></span><span className="menu-go" aria-hidden="true">→</span></Link></li>)}</ol><Link href={menu.cta.href} className="menu-cta" style={{ '--i': menu.items.length } as React.CSSProperties} onClick={onNavigate}>{menu.cta.label}<span aria-hidden="true">→</span></Link></div>;
}
export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number>(undefined);
  useEffect(() => { if (!open) return; const handle = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }; document.addEventListener('keydown', handle); return () => document.removeEventListener('keydown', handle); }, [open]);
  useEffect(() => { setActive(null); }, [path]);
  useEffect(() => {
    let last = window.scrollY, frame = 0;
    const update = () => { frame = 0; const y = window.scrollY; setScrolled(y > 24); if (y > last + 6 && y > 180) setHidden(true); else if (y < last - 6 || y < 180) setHidden(false); last = y; };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive: true }); update();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);
  const show = (href: string) => { window.clearTimeout(closeTimer.current); setActive(href); };
  const hide = () => { window.clearTimeout(closeTimer.current); closeTimer.current = window.setTimeout(() => setActive(null), 140); };
  const close = () => { window.clearTimeout(closeTimer.current); setActive(null); setOpen(false); };
  return <header className="site-header" data-scrolled={scrolled || undefined} data-hidden={(hidden && !open && !active) || undefined}><Link href="/" className="brand" aria-label="Oak Field Research home" onClick={close}><OakMark/><span>OAK FIELD<span className="brand-sub">RESEARCH</span></span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button><nav id="main-navigation" aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>{navigation.map((item, index) => {
    const current = path === item.href || path.startsWith(`${item.href}/`) ? 'page' : undefined;
    if (!item.menu) return <Link href={item.href} key={item.href} className="nav-link nav-cta" onClick={close} aria-current={current}><span>{item.label}</span><span aria-hidden="true">↗</span></Link>;
    const panelId = `panel${item.href.replace('/', '-')}`, isOpen = active === item.href;
    return <div key={item.href} className={index === lastMenu ? 'nav-item nav-item-end' : 'nav-item'} data-open={isOpen || undefined} onMouseEnter={() => show(item.href)} onMouseLeave={hide} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) hide(); }} onKeyDown={e => { if (e.key === 'Escape' && isOpen) { e.stopPropagation(); setActive(null); (e.currentTarget.querySelector('.nav-link') as HTMLElement)?.focus(); } }}>
      <Link href={item.href} className="nav-link" onClick={close} aria-current={current} onKeyDown={e => { if (e.key === 'ArrowDown') { e.preventDefault(); show(item.href); requestAnimationFrame(() => (document.querySelector(`#${panelId} a`) as HTMLElement)?.focus()); } }}>{item.label}</Link>
      <button className="nav-disclosure" aria-expanded={isOpen} aria-controls={panelId} aria-label={`Show ${item.label} menu`} onClick={() => isOpen ? setActive(null) : show(item.href)}><svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1L5 5L9 1" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg></button>
      <Panel id={panelId} label={item.label} menu={item.menu} onNavigate={close}/>
    </div>;
  })}</nav></header>;
}
