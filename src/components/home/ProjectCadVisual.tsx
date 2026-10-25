/** Illustrative engineering drawing — not a real MONTERBUD document. */
export function ProjectCadVisual() {
  return (
    <svg
      viewBox="0 0 800 520"
      role="img"
      aria-label="Rozbudowany schemat techniczny instalacji silosów — ilustracja poglądowa"
      className="h-full w-full"
    >
      <rect width="800" height="520" fill="#0B0F14" />

      <g opacity="0.16" stroke="#8A94A0" strokeWidth="0.5">
        {Array.from({ length: 25 }, (_, i) => (
          <line key={`v${i}`} x1={16 + i * 32} y1="28" x2={16 + i * 32} y2="504" />
        ))}
        {Array.from({ length: 16 }, (_, i) => (
          <line key={`h${i}`} x1="12" y1={28 + i * 30} x2="788" y2={28 + i * 30} />
        ))}
      </g>

      <g fill="none" stroke="#3A4450" strokeWidth="0.8">
        <rect x="12" y="8" width="776" height="504" />
        <line x1="12" y1="34" x2="788" y2="34" />
      </g>

      <g fill="#F59E0B" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8" letterSpacing="1.6">
        <text x="22" y="24">
          SCHEMAT POGLĄDOWY · ELEWACJA / PRZEKRÓJ / RZUT
        </text>
      </g>
      <g fill="#AAB3BD" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8">
        <text x="620" y="24">
          A1 · SKALA 1:100
        </text>
      </g>

      {/* construction axes */}
      <g stroke="#F59E0B" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.55">
        <line x1="168" y1="48" x2="168" y2="430" />
        <line x1="248" y1="48" x2="248" y2="430" />
        <line x1="328" y1="48" x2="328" y2="430" />
        <line x1="408" y1="48" x2="408" y2="390" />
      </g>

      {/* elevator lattice */}
      <g fill="none" stroke="#E8EEF4" strokeWidth="1.15">
        <rect x="392" y="58" width="36" height="332" />
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`el${i}`} x1="392" y1={86 + i * 28} x2="428" y2={86 + i * 28} />
        ))}
        {Array.from({ length: 10 }, (_, i) => (
          <g key={`ex${i}`}>
            <line x1="392" y1={86 + i * 28} x2="428" y2={114 + i * 28} />
            <line x1="428" y1={86 + i * 28} x2="392" y2={114 + i * 28} />
          </g>
        ))}
        <rect x="398" y="46" width="24" height="16" />
        <line x1="410" y1="46" x2="410" y2="36" />
        <path d="M410 36 L248 70 L168 70" />
        <path d="M248 70 L248 86" />
        <path d="M168 70 L168 86" />
      </g>

      {/* silo 1 */}
      <g fill="none" stroke="#F4F7FA" strokeWidth="1.35">
        <path d="M130 86 L206 86 L206 268 L168 338 L130 268 Z" />
        <line x1="138" y1="128" x2="198" y2="128" />
        <line x1="138" y1="170" x2="198" y2="170" />
        <line x1="138" y1="212" x2="198" y2="212" />
        <line x1="138" y1="248" x2="198" y2="248" />
        <circle cx="168" cy="86" r="7" />
        <rect x="160" y="338" width="16" height="22" />
        <path d="M142 338 L142 372 L194 372 L194 338" />
        <line x1="150" y1="372" x2="150" y2="392" />
        <line x1="168" y1="372" x2="168" y2="392" />
        <line x1="186" y1="372" x2="186" y2="392" />
        <line x1="142" y1="392" x2="194" y2="392" />
        <path d="M206 110 L226 110 L226 250" strokeWidth="1" />
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`lad1${i}`} x1="206" y1={118 + i * 18} x2="226" y2={118 + i * 18} />
        ))}
      </g>

      {/* silo 2 */}
      <g fill="none" stroke="#F4F7FA" strokeWidth="1.35">
        <path d="M210 86 L286 86 L286 268 L248 338 L210 268 Z" />
        <line x1="218" y1="128" x2="278" y2="128" />
        <line x1="218" y1="170" x2="278" y2="170" />
        <line x1="218" y1="212" x2="278" y2="212" />
        <line x1="218" y1="248" x2="278" y2="248" />
        <circle cx="248" cy="86" r="7" />
        <rect x="240" y="338" width="16" height="22" />
        <path d="M222 338 L222 372 L274 372 L274 338" />
        <line x1="230" y1="372" x2="230" y2="392" />
        <line x1="248" y1="372" x2="248" y2="392" />
        <line x1="266" y1="372" x2="266" y2="392" />
        <line x1="222" y1="392" x2="274" y2="392" />
        <rect x="232" y="188" width="32" height="18" />
      </g>

      {/* silo 3 */}
      <g fill="none" stroke="#F4F7FA" strokeWidth="1.35">
        <path d="M290 96 L366 96 L366 268 L328 338 L290 268 Z" />
        <line x1="298" y1="136" x2="358" y2="136" />
        <line x1="298" y1="176" x2="358" y2="176" />
        <line x1="298" y1="216" x2="358" y2="216" />
        <line x1="298" y1="248" x2="358" y2="248" />
        <circle cx="328" cy="96" r="7" />
        <rect x="320" y="338" width="16" height="22" />
        <path d="M302 338 L302 372 L354 372 L354 338" />
        <line x1="310" y1="372" x2="310" y2="392" />
        <line x1="328" y1="372" x2="328" y2="392" />
        <line x1="346" y1="372" x2="346" y2="392" />
        <line x1="302" y1="392" x2="354" y2="392" />
      </g>

      {/* catwalk */}
      <g fill="none" stroke="#E8EEF4" strokeWidth="1">
        <rect x="126" y="78" width="250" height="10" />
        <line x1="126" y1="78" x2="126" y2="70" />
        <line x1="376" y1="78" x2="376" y2="70" />
        <line x1="126" y1="70" x2="376" y2="70" />
      </g>

      {/* orange dimensions */}
      <g fill="none" stroke="#F59E0B" strokeWidth="0.9">
        <line x1="108" y1="86" x2="108" y2="268" />
        <line x1="102" y1="86" x2="114" y2="86" />
        <line x1="102" y1="268" x2="114" y2="268" />
        <line x1="88" y1="86" x2="88" y2="392" />
        <line x1="82" y1="86" x2="94" y2="86" />
        <line x1="82" y1="392" x2="94" y2="392" />
        <line x1="130" y1="412" x2="366" y2="412" />
        <line x1="130" y1="406" x2="130" y2="418" />
        <line x1="366" y1="406" x2="366" y2="418" />
        <line x1="392" y1="48" x2="428" y2="48" />
        <line x1="392" y1="42" x2="392" y2="54" />
        <line x1="428" y1="42" x2="428" y2="54" />
      </g>
      <g fill="#F59E0B" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="9">
        <text x="70" y="186" transform="rotate(-90 70 186)">
          H1
        </text>
        <text x="52" y="250" transform="rotate(-90 52 250)">
          H2
        </text>
        <text x="230" y="428">
          L
        </text>
        <text x="398" y="40">
          B
        </text>
      </g>

      {/* balloons */}
      <g fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="8">
        {[
          { n: "1", x: 168, y: 156, lx: 96, ly: 120 },
          { n: "2", x: 248, y: 197, lx: 248, ly: 52 },
          { n: "3", x: 410, y: 180, lx: 468, ly: 150 },
          { n: "4", x: 168, y: 310, lx: 96, ly: 330 },
          { n: "5", x: 328, y: 360, lx: 360, ly: 450 },
        ].map((item) => (
          <g key={item.n}>
            <line
              x1={item.x}
              y1={item.y}
              x2={item.lx}
              y2={item.ly}
              stroke="#AAB3BD"
              strokeWidth="0.7"
            />
            <circle cx={item.lx} cy={item.ly} r="8" fill="#0B0F14" stroke="#F59E0B" />
            <text x={item.lx} y={item.ly + 3} textAnchor="middle" fill="#F4F7FA">
              {item.n}
            </text>
          </g>
        ))}
      </g>

      {/* section B-B */}
      <g fill="none" stroke="#E8EEF4" strokeWidth="1.2">
        <text
          x="512"
          y="64"
          fill="#F59E0B"
          stroke="none"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="8"
          letterSpacing="1.4"
        >
          PRZEKRÓJ B–B
        </text>
        <path d="M500 86 L620 86 L620 230 L560 310 L500 230 Z" />
        <path d="M512 98 L608 98 L608 222 L560 292 L512 222 Z" stroke="#AAB3BD" />
        <g stroke="#F59E0B" strokeWidth="0.7" opacity="0.8">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`hatch${i}`} x1={520 + i * 10} y1="110" x2={508 + i * 10} y2="210" />
          ))}
        </g>
        <line x1="560" y1="86" x2="560" y2="310" strokeDasharray="4 3" stroke="#F59E0B" />
        <circle cx="560" cy="86" r="6" />
        <rect x="552" y="310" width="16" height="18" />
        <line x1="632" y1="86" x2="632" y2="230" stroke="#F59E0B" />
        <line x1="626" y1="86" x2="638" y2="86" stroke="#F59E0B" />
        <line x1="626" y1="230" x2="638" y2="230" stroke="#F59E0B" />
        <text x="640" y="164" fill="#F59E0B" stroke="none" fontSize="9">
          Ø
        </text>
      </g>

      {/* plan */}
      <g fill="none" stroke="#E8EEF4" strokeWidth="1.1">
        <text
          x="512"
          y="360"
          fill="#F59E0B"
          stroke="none"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="8"
          letterSpacing="1.4"
        >
          RZUT
        </text>
        <circle cx="548" cy="424" r="28" />
        <circle cx="548" cy="424" r="18" stroke="#AAB3BD" />
        <circle cx="612" cy="424" r="28" />
        <circle cx="612" cy="424" r="18" stroke="#AAB3BD" />
        <circle cx="676" cy="424" r="28" />
        <rect x="700" y="406" width="22" height="36" />
        <line x1="520" y1="424" x2="722" y2="424" strokeDasharray="3 3" stroke="#F59E0B" />
        <line x1="520" y1="458" x2="698" y2="458" stroke="#F59E0B" />
        <line x1="520" y1="452" x2="520" y2="464" stroke="#F59E0B" />
        <line x1="698" y1="452" x2="698" y2="464" stroke="#F59E0B" />
        <text x="592" y="474" fill="#F59E0B" stroke="none" fontSize="9">
          3×S
        </text>
      </g>

      <g fill="#AAB3BD" fontFamily="ui-sans-serif, system-ui, sans-serif" fontSize="7">
        <text x="22" y="456">1 PŁASZCZ</text>
        <text x="22" y="468">2 POMOST</text>
        <text x="22" y="480">3 WIEŻA</text>
        <text x="22" y="492">4 STOŻEK</text>
        <text x="22" y="504">5 PODPORA</text>
      </g>
    </svg>
  );
}
