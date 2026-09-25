'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation, type MenuIcon, type NavMenu } from '../lib/content';
import { OakMark } from './brand';
import { ArticleVisual } from './visuals';
const glyphs: Record<MenuIcon, React.ReactNode> = {
  leaf: <><path d="M7 25C7 14 14 7 25 7C25 18 18 25 7 25Z"/><path d="M7 25L19 13"/></>,
  rings: <><circle cx="16" cy="16" r="10"/><circle cx="16.8" cy="15.4" r="6.4"/><circle cx="17.4" cy="15" r="2.8"/></>,
  people: <><circle cx="11" cy="11" r="3.6"/><circle cx="21.5" cy="12.5" r="3"/><path d="M4.5 25C5 19.5 7.6 17 11 17S17 19.5 17.5 25M17.5 19.6C18.6 18.4 19.9 18 21.5 18C24.5 18 26.6 20.3 27 25"/></>,
  envelope: <><rect x="5" y="9" width="22" height="15" rx="1.5"/><path d="M5.5 10L16 18L26.5 10"/></>,
  notes: <><path d="M9 5.5H20L25 10.5V26.5H9Z"/><path d="M20 5.5V10.5H25M13 15H21M13 19H21M13 23H18"/></>,
  code: <><path d="M12 10L6 16L12 22M20 10L26 16L20 22M18 8L14 24"/></>,
  sprout: <><path d="M16 27V14"/><path d="M16 17C16 11.5 12.5 9 7 9C7 14.5 10.5 17 16 17Z"/><path d="M16 14C16 9.5 19 7 24 7C24 11.5 21 14 16 14Z"/></>,
};
function Glyph({ name }: { name: MenuIcon }) { return <span className="menu-glyph" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{glyphs[name]}</svg><i/></span>; }
function Grove() { return <div className="grove" aria-hidden="true">{[[8, 40, .55], [22, 62, .8], [41, 86, 1], [62, 58, .75], [78, 44, .6]].map(([left, size, o], i) => <span key={i} style={{ left: `${left}%`, width: size, opacity: o, '--i': i } as React.CSSProperties}><OakMark/></span>)}</div>; }
function Panel({ id, menu, onNavigate }: { id: string; menu: NavMenu; onNavigate: () => void }) {
  if (menu.kind === 'links') return <div id={id} className="nav-panel nav-panel-links">{menu.items.map((m, i) => <Link key={m.href} href={m.href} className="menu-row" style={{ '--i': i } as React.CSSProperties} onClick={onNavigate}><Glyph name={m.icon}/><span><strong>{m.title}</strong><span>{m.text}</span></span></Link>)}</div>;
  return <div id={id} className="nav-panel nav-panel-feature"><div className="menu-visual">{menu.visual === 'rings' ? <ArticleVisual variant="rings"/> : <Grove/>}</div><strong className="menu-feature-title">{menu.title}</strong><p>{menu.text}</p><Link href={menu.cta.href} className="menu-cta" onClick={onNavigate}>{menu.cta.label}<span aria-hidden="true">→</span></Link>{menu.secondary && <Link href={menu.secondary.href} className="menu-secondary" onClick={onNavigate}>{menu.secondary.label}</Link>}</div>;
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
  return <header className="site-header" data-scrolled={scrolled || undefined} data-hidden={(hidden && !open && !active) || undefined}><Link href="/" className="brand" aria-label="Oak Field Research home" onClick={close}><OakMark/><span>OAK FIELD<span className="brand-sub">RESEARCH</span></span></Link><button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button><nav id="main-navigation" aria-label="Main navigation" className={open ? 'main-nav is-open' : 'main-nav'}>{navigation.map(item => {
    const current = path === item.href || path.startsWith(`${item.href}/`) ? 'page' : undefined;
    if (!item.menu) return <Link href={item.href} key={item.href} className="nav-link nav-cta" onClick={close} aria-current={current}><span>{item.label}</span><span aria-hidden="true">↗</span></Link>;
    const panelId = `panel${item.href.replace('/', '-')}`, isOpen = active === item.href;
    return <div key={item.href} className="nav-item" data-open={isOpen || undefined} onMouseEnter={() => show(item.href)} onMouseLeave={hide} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget as Node)) hide(); }} onKeyDown={e => { if (e.key === 'Escape' && isOpen) { e.stopPropagation(); setActive(null); (e.currentTarget.querySelector('.nav-link') as HTMLElement)?.focus(); } }}>
      <Link href={item.href} className="nav-link" onClick={close} aria-current={current} onKeyDown={e => { if (e.key === 'ArrowDown') { e.preventDefault(); show(item.href); requestAnimationFrame(() => (document.querySelector(`#${panelId} a`) as HTMLElement)?.focus()); } }}>{item.label}</Link>
      <button className="nav-disclosure" aria-expanded={isOpen} aria-controls={panelId} aria-label={`Show ${item.label} menu`} onClick={() => isOpen ? setActive(null) : show(item.href)}><svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1L5 5L9 1" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg></button>
      <Panel id={panelId} menu={item.menu} onNavigate={close}/>
    </div>;
  })}</nav></header>;
}
