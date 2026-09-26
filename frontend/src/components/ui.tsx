import Link from 'next/link';
import { articles, type Article, footerColumns, legalLinks, team } from '../lib/content';
import { Arrow, OakMark } from './brand';
import { ArticleVisual, FooterWave } from './visuals';
import { TeamCarousel } from './team';
export function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link className={`text-link ${light ? 'light' : ''}`} href={href}>{children}<Arrow /></Link>; }
export function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span/>{children}</p>; }
export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) { return <section className="page-intro wrap"><Eyebrow>{label}</Eyebrow><h1>{title}</h1><p className="intro-description">{description}</p></section>; }
export function ArticleCard({ article }: { article: Article }) { return <Link className="article-card" href={`/${article.section}/${article.slug}`}><div className="article-image"><ArticleVisual variant={article.visual}/><span className="image-arrow"><Arrow diagonal/></span></div><div className="article-meta"><span>{article.category}</span><span>{article.minutes} min read</span></div><h3>{article.title}</h3><p>{article.summary}</p><span className="sample-label">Illustrative article</span></Link>; }
export function LatestWriting() { return <section className="writing-section wrap"><div className="section-heading"><div><Eyebrow>Ideas in the open</Eyebrow><h2>Notes from the field.</h2></div><TextLink href="/news-insights">News & insights</TextLink></div><div className="article-grid">{articles.slice(0, 3).map(a => <ArticleCard key={a.slug} article={a}/>)}</div></section>; }
export function CareersInvitation() { return <section className="careers-invitation wrap"><div><Eyebrow>Room for a different perspective</Eyebrow><h2>Good questions deserve<br/>great company.</h2></div><div><p>For people who enjoy the difficult question.<br/>And the work it takes to answer it.</p><TextLink href="/join-our-team">Find your place at Oak Field</TextLink></div></section>; }
export function MeetOurTeam() { return <section id="people" className="content-section wrap team-section"><div className="team-intro"><Eyebrow>The people behind the questions</Eyebrow><h2>Meet our team.</h2><p>Oak Field is built by researchers, engineers and scientists who bring different disciplines to the same questions. Meet some of the people researching markets and building systematic solutions.</p><Link href="/join-our-team" className="button">Explore careers<Arrow/></Link></div><TeamCarousel members={team}/></section>; }
const footerIcons = {
  linkedin: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="1" y="1" width="22" height="22" rx="3" fill="currentColor"/><path d="M6.3 9.6H8.9V18H6.3ZM7.6 5.6A1.5 1.5 0 1 1 7.6 8.6A1.5 1.5 0 0 1 7.6 5.6ZM10.6 9.6H13.1V10.8C13.5 10.1 14.4 9.4 15.8 9.4C18.4 9.4 18.9 11.1 18.9 13.4V18H16.3V13.9C16.3 12.9 16.3 11.7 14.9 11.7C13.6 11.7 13.3 12.7 13.3 13.9V18H10.6Z" fill="var(--footer-bg)"/></svg>,
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true"><path d="M12 21.5C12 21.5 5.5 15.4 5.5 10.3A6.5 6.5 0 0 1 18.5 10.3C18.5 15.4 12 21.5 12 21.5Z"/><circle cx="12" cy="10.3" r="2.3"/></svg>,
  envelope: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4.5" width="20" height="15" rx="1.5"/><path d="M2.5 5.5L12 13L21.5 5.5"/></svg>,
};
export function Footer() {
  return <footer className="site-footer">
    <div className="footer-art" aria-hidden="true"/>
    <div className="wrap footer-main"><span className="footer-wave-wrap" aria-hidden="true"><FooterWave/></span>
      <div className="footer-identity"><Link href="/" className="footer-wordmark" aria-label="Oak Field Research home"><span>OAK FIELD</span><span>RESEARCH</span></Link><span className="footer-rule"/><p className="footer-tagline">Quantitative Trading &amp; Investment Research</p><p className="footer-lede">Researching markets.<br/>Building systematic solutions.</p></div>
      <nav className="footer-columns" aria-label="Footer">{footerColumns.map(col => <div key={col.title} className="footer-col"><h2>{col.title}</h2><ul>{col.links.map(l => <li key={l.label}><Link href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{l.icon && <span className="footer-icon">{footerIcons[l.icon]}</span>}<span>{l.label}</span><Arrow/></Link></li>)}</ul>{col.address && <address className="footer-office"><span className="sr-only">{col.address.label}: </span><span className="footer-icon">{footerIcons.pin}</span><span>{col.address.lines.map(line => <span key={line}>{line}</span>)}</span></address>}</div>)}</nav>
    </div>
    <div className="footer-bottom"><div className="wrap"><span className="footer-copy">© {new Date().getFullYear()} Oak Field Research LLP. All rights reserved.</span><nav aria-label="Legal">{legalLinks.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}</nav></div></div>
  </footer>;
}
