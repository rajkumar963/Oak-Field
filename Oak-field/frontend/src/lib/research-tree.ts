// Geometry for the hero oak. Thousands of shapes, so it is served as two static SVG images
// (branches, leaves) instead of inline DOM: the browser rasterises each once and scrolling stays cheap.
function random(seed: number) { const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); }
export const treeViewBox = { width: 600, height: 510 };
export type TreeLayer = 'branches' | 'leaves';
export function researchTreeSvg(layer: TreeLayer) {
  const branches: string[] = [], leaves: string[] = [];
  function branch(x: number, y: number, length: number, angle: number, depth: number, seed: number) {
    const endX = x + Math.cos(angle) * length, endY = y + Math.sin(angle) * length;
    branches.push(`<path d="M${x.toFixed(1)},${y.toFixed(1)}Q${(x + Math.cos(angle + .12) * length * .55).toFixed(1)},${(y + Math.sin(angle + .12) * length * .55).toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}" stroke-width="${(depth * .48 + .2).toFixed(2)}"/>`);
    if (depth <= 3) for (let i = 0; i < 15; i++) { const t = random(seed + i * 7), a = random(seed + i * 9 + 8) * Math.PI * 2, spread = 9 + depth * 5; leaves.push(`<circle cx="${(endX + Math.cos(a) * spread * t).toFixed(1)}" cy="${(endY + Math.sin(a) * spread * t).toFixed(1)}" r="${(.65 + random(seed + i * 3) * 1.6).toFixed(2)}" opacity="${(.22 + random(seed + i) * .65).toFixed(2)}"/>`); }
    if (depth === 0) return;
    branch(endX, endY, length * (.7 + random(seed) * .11), angle - .32 - random(seed + 1) * .37, depth - 1, seed * 2 + 1);
    branch(endX, endY, length * (.68 + random(seed + 2) * .13), angle + .3 + random(seed + 3) * .36, depth - 1, seed * 2 + 2);
  }
  branch(300, 425, 95, -Math.PI / 2, 8, 7);
  const body = layer === 'branches' ? `<g fill="none" stroke="#365e44" stroke-linecap="round">${branches.join('')}</g>` : `<g fill="#406d4b">${leaves.join('')}</g>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${treeViewBox.width} ${treeViewBox.height}">${body}</svg>`;
}
