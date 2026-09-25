import type { MetadataRoute } from 'next';
import { articles, navigation, siteUrl } from '../lib/content';
export default function sitemap(): MetadataRoute.Sitemap { return ['/', ...navigation.map(n=>n.href), '/tech-blog','/privacy','/terms','/disclosures',...articles.map(a=>`/${a.section}/${a.slug}`)].map(path=>({url:`${siteUrl}${path}`,changeFrequency:'monthly',priority:path === '/' ? 1 : .7})); }
