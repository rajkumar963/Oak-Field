// Layered pine mark. Each tier is painted over the one behind it, carrying the lighter tone of its overlap.
export function OakMark({ className = '' }: { className?: string }) {
  return <svg className={`oak-mark ${className}`} viewBox="12 -2 222 222" fill="none" aria-hidden="true">
    <g className="mark-layer"><path d="M123 0L201 60L168 93H78L45 60Z" fill="#5c7466"/></g>
    <g className="mark-layer"><path d="M123 18L215 92L201 110H45L31 92Z" fill="#4e6658"/><path d="M123 18L189.5 71.5L168 93H78L56.5 71.5Z" fill="#7e9286"/></g>
    <g className="mark-layer"><path d="M123 43L229 128L199 163H47L17 128Z" fill="#455d4f"/><path d="M123 43L203.1 107.3L201 110H45L42.9 107.3Z" fill="#6e8279"/><path d="M123 43L175.7 85.3L168 93H78L70.3 85.3Z" fill="#97a49d"/></g>
    <rect className="mark-trunk" x="110" y="164" width="26" height="49" rx="6" fill="#99a69f"/>
    <path className="mark-ground" d="M43 216.5H203" stroke="#c69e3d" strokeWidth="3.5"/>
  </svg>;
}
export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>; }
