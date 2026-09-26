'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { TeamMember } from '../lib/content';
import { TeamArt } from './visuals';
// Snap positions: one per card, until the last cards fit in view together.
function measure(track: HTMLElement) {
  const card = track.firstElementChild as HTMLElement | null;
  const step = card ? card.offsetWidth + parseFloat(getComputedStyle(track).columnGap || '0') : track.clientWidth;
  const max = track.scrollWidth - track.clientWidth;
  return { step, max, pages: max < 2 ? 1 : Math.ceil(max / step - .02) + 1 };
}
const pad = (n: number) => String(n).padStart(2, '0');
const chevron = (d: string) => <svg viewBox="0 0 10 16" aria-hidden="true"><path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
export function TeamCarousel({ members }: { members: TeamMember[] }) {
  const track = useRef<HTMLDivElement>(null);
  const player = useRef<HTMLDialogElement>(null);
  const [pages, setPages] = useState(Math.max(1, members.length - 1));
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<TeamMember | null>(null);
  useEffect(() => {
    const el = track.current; if (!el) return;
    let frame = 0;
    const update = () => { frame = 0; const { step, max, pages } = measure(el); setPages(pages); setActive(el.scrollLeft >= max - 2 ? pages - 1 : Math.min(pages - 1, Math.round(el.scrollLeft / step))); };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    el.addEventListener('scroll', schedule, { passive: true });
    const resize = new ResizeObserver(schedule); resize.observe(el);
    return () => { el.removeEventListener('scroll', schedule); resize.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  const go = (page: number) => {
    const el = track.current; if (!el) return;
    const { step, max, pages } = measure(el), target = Math.max(0, Math.min(pages - 1, page));
    el.scrollTo({ left: target === pages - 1 ? max : target * step, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  const play = (member: TeamMember) => { setPlaying(member); player.current?.showModal(); };
  return <div className="team-carousel" role="region" aria-roledescription="carousel" aria-label="Our team">
    <div className="team-viewport">
      {/* Horizontal swipes belong to the track; Lenis keeps vertical page scrolling. */}
      <div ref={track} className="team-track" role="group" aria-label="Team members" tabIndex={0} data-lenis-prevent-horizontal>{members.map((m, i) => <div key={i} className="team-card" role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${members.length}`}>
        <div className="team-media">{m.photo ? <Image src={m.photo} alt={m.name ? `Portrait of ${m.name}` : 'Portrait of an Oak Field team member'} fill sizes="(max-width: 600px) 78vw, (max-width: 850px) 46vw, (max-width: 1150px) 31vw, 22vw"/> : <><TeamArt seed={i}/><span className="team-tag">OFR / Team / {pad(i + 1)}</span><span className="team-tag team-tag-end">Portrait to follow</span></>}
          {m.video && <button type="button" className="team-play" onClick={() => play(m)} aria-label={`Play video: ${m.name ?? m.role}`}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5L13.5 8L4 13.5Z" fill="currentColor"/></svg></button>}</div>
        <div className="team-info"><h3>{m.name ?? m.role}</h3><p>{m.name ? m.role : 'Profile coming soon'}</p></div>
      </div>)}</div>
      {pages > 1 && <><button type="button" className="team-arrow team-prev" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous team members">{chevron('M7.5 2L2 8L7.5 14')}</button><button type="button" className="team-arrow team-next" onClick={() => go(active + 1)} disabled={active >= pages - 1} aria-label="Next team members">{chevron('M2.5 2L8 8L2.5 14')}</button></>}
    </div>
    {pages > 1 && <div className="team-dots">{Array.from({ length: pages }, (_, i) => <button key={i} type="button" aria-label={`Show position ${i + 1} of ${pages}`} aria-current={i === active || undefined} onClick={() => go(i)}/>)}</div>}
    <dialog ref={player} className="team-player" aria-label={`Video: ${playing ? playing.name ?? playing.role : 'team member'}`} data-lenis-prevent onClose={() => setPlaying(null)} onClick={e => { if (e.target === e.currentTarget) e.currentTarget.close(); }}>
      {playing?.video && <video src={playing.video} controls autoPlay playsInline/>}
      <button type="button" className="team-player-close" onClick={() => player.current?.close()}>Close<span aria-hidden="true">×</span></button>
    </dialog>
  </div>;
}
