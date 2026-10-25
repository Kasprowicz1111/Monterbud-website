/** Schematic industrial silo drawing — illustrative, not a real MONTERBUD document. */
export function ProjectCadVisual() {
  return (
    <svg
      viewBox="0 0 640 400"
      role="img"
      aria-label="Schemat techniczny zbiornika przemysłowego — ilustracja poglądowa"
      className="h-full w-full"
    >
      <rect width="640" height="400" fill="#0B0F14" />
      <g opacity="0.22" stroke="#AAB3BD" strokeWidth="0.6">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 46} y1="24" x2={40 + i * 46} y2="376" />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1="24" y1={32 + i * 42} x2="616" y2={32 + i * 42} />
        ))}
      </g>

      <g fill="none" stroke="#E8EEF4" strokeWidth="1.4">
        <rect x="248" y="58" width="144" height="168" rx="2" />
        <path d="M248 226 L320 318 L392 226" />
        <line x1="258" y1="90" x2="382" y2="90" />
        <line x1="258" y1="132" x2="382" y2="132" />
        <line x1="258" y1="174" x2="382" y2="174" />
        <circle cx="320" cy="58" r="10" />
        <line x1="320" y1="48" x2="320" y2="36" />
        <rect x="312" y="318" width="16" height="28" />
        <path d="M268 318 L268 354 L372 354 L372 318" />
        <line x1="284" y1="354" x2="284" y2="368" />
        <line x1="320" y1="354" x2="320" y2="368" />
        <line x1="356" y1="354" x2="356" y2="368" />
        <line x1="268" y1="368" x2="372" y2="368" />
      </g>

      <g fill="none" stroke="#F59E0B" strokeWidth="1" opacity="0.9">
        <line x1="214" y1="58" x2="214" y2="226" />
        <line x1="208" y1="58" x2="220" y2="58" />
        <line x1="208" y1="226" x2="220" y2="226" />
        <line x1="392" y1="226" x2="468" y2="226" />
        <line x1="392" y1="318" x2="468" y2="318" />
        <line x1="468" y1="226" x2="468" y2="318" />
        <line x1="462" y1="226" x2="474" y2="226" />
        <line x1="462" y1="318" x2="474" y2="318" />
        <line x1="248" y1="40" x2="392" y2="40" />
        <line x1="248" y1="34" x2="248" y2="46" />
        <line x1="392" y1="34" x2="392" y2="46" />
      </g>

      <g fill="#AAB3BD" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="11">
        <text x="188" y="148" transform="rotate(-90 188 148)">
          H
        </text>
        <text x="478" y="278">Ø</text>
        <text x="308" y="32">A–A</text>
      </g>

      <g fill="none" stroke="#E8EEF4" strokeWidth="1" opacity="0.7">
        <circle cx="520" cy="96" r="42" />
        <circle cx="520" cy="96" r="18" />
        <line x1="478" y1="96" x2="562" y2="96" />
        <line x1="520" y1="54" x2="520" y2="138" />
      </g>
    </svg>
  );
}
