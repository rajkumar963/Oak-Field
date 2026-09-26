import { researchTreeSvg, type TreeLayer } from '../../../lib/research-tree';
export const dynamic = 'force-static';
const layers: Record<string, TreeLayer> = { 'branches.svg': 'branches', 'leaves.svg': 'leaves' };
export function generateStaticParams() { return Object.keys(layers).map(layer => ({ layer })); }
export async function GET(_: Request, { params }: { params: Promise<{ layer: string }> }) {
  const layer = layers[(await params).layer];
  if (!layer) return new Response('Not found', { status: 404 });
  return new Response(researchTreeSvg(layer), { headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800' } });
}
