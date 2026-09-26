import type { Metadata, Viewport } from 'next';
import { Navigation } from '../components/navigation';
import { SmoothScroll } from '../components/smooth-scroll';
import { Footer } from '../components/ui';
import { siteUrl } from '../lib/content';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title: { default: 'Oak Field Research — Rooted in curiosity. Driven by evidence.', template: '%s | Oak Field Research' },
  description: 'A quantitative research firm bringing scientific thinking, systematic research, and thoughtful engineering to complex markets.',
  openGraph: { type: 'website', siteName: 'Oak Field Research', images: [{ url: '/opengraph-image', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image' },
};
export const viewport: Viewport = { themeColor: '#233c2c' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body id="top"><a href="#main" className="skip-link">Skip to content</a><SmoothScroll/><Navigation/><main id="main">{children}</main><Footer/></body></html>; }
