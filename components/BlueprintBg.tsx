export default function BlueprintBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute -right-20 top-10 h-[900px] w-[900px] opacity-[0.035]"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ===== MAIN GEAR (large) ===== */}
        <g stroke="white" strokeWidth="1.2">
          {/* Outer teeth */}
          <circle cx="420" cy="350" r="120" />
          <circle cx="420" cy="350" r="105" />
          <circle cx="420" cy="350" r="30" />
          <circle cx="420" cy="350" r="12" />
          {/* Gear teeth */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const x1 = 420 + 105 * Math.cos(rad);
            const y1 = 350 + 105 * Math.sin(rad);
            const x2 = 420 + 130 * Math.cos(rad);
            const y2 = 350 + 130 * Math.sin(rad);
            return <line key={`gt-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
          {/* Spokes */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 420 + 30 * Math.cos(rad);
            const y1 = 350 + 30 * Math.sin(rad);
            const x2 = 420 + 100 * Math.cos(rad);
            const y2 = 350 + 100 * Math.sin(rad);
            return (
              <line key={`sp-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} />
            );
          })}
        </g>

        {/* ===== SECONDARY GEAR (medium) ===== */}
        <g stroke="white" strokeWidth="1">
          <circle cx="580" cy="230" r="70" />
          <circle cx="580" cy="230" r="58" />
          <circle cx="580" cy="230" r="18" />
          <circle cx="580" cy="230" r="7" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x1 = 580 + 58 * Math.cos(rad);
            const y1 = 230 + 58 * Math.sin(rad);
            const x2 = 580 + 78 * Math.cos(rad);
            const y2 = 230 + 78 * Math.sin(rad);
            return <line key={`g2t-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* ===== SMALL GEAR (top) ===== */}
        <g stroke="white" strokeWidth="0.8">
          <circle cx="680" cy="140" r="35" />
          <circle cx="680" cy="140" r="26" />
          <circle cx="680" cy="140" r="10" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            const x1 = 680 + 26 * Math.cos(rad);
            const y1 = 140 + 26 * Math.sin(rad);
            const x2 = 680 + 40 * Math.cos(rad);
            const y2 = 140 + 40 * Math.sin(rad);
            return <line key={`g3t-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>

        {/* ===== EXPLODED VIEW LINES (dashed) ===== */}
        <g stroke="white" strokeWidth="0.5" strokeDasharray="6 4">
          {/* Gear to gear connections */}
          <line x1="530" y1="290" x2="550" y2="260" />
          <line x1="640" y1="190" x2="655" y2="170" />
          {/* Piston assembly exploded */}
          <line x1="200" y1="400" x2="200" y2="500" />
          <line x1="200" y1="550" x2="200" y2="620" />
          {/* Bearing exploded */}
          <line x1="700" y1="450" x2="750" y2="380" />
          <line x1="700" y1="450" x2="750" y2="520" />
          {/* PCB to component */}
          <line x1="120" y1="180" x2="180" y2="130" />
          <line x1="120" y1="180" x2="60" y2="150" />
        </g>

        {/* ===== PISTON ASSEMBLY ===== */}
        <g stroke="white" strokeWidth="1">
          {/* Cylinder */}
          <rect x="165" y="360" width="70" height="40" rx="3" />
          <line x1="175" y1="365" x2="175" y2="395" />
          <line x1="225" y1="365" x2="225" y2="395" />
          {/* Piston head (exploded below) */}
          <rect x="172" y="520" width="56" height="25" rx="2" />
          <circle cx="200" cy="532" r="4" />
          {/* Rod */}
          <rect x="192" y="635" width="16" height="60" rx="2" />
          <circle cx="200" cy="665" r="3" />
        </g>

        {/* ===== CIRCUIT BOARD SECTION ===== */}
        <g stroke="white" strokeWidth="0.7">
          {/* Board outline */}
          <rect x="40" y="60" width="160" height="100" rx="4" />
          {/* Traces */}
          <path d="M60 90 h30 v20 h25" />
          <path d="M60 110 h15 v30 h40 v-15" />
          <path d="M160 80 h-25 v25 h-20" />
          <path d="M160 130 h-30 v-10 h-15" />
          {/* Components */}
          <rect x="75" y="85" width="12" height="8" rx="1" />
          <rect x="130" y="100" width="8" height="14" rx="1" />
          <circle cx="100" cy="120" r="6" />
          <circle cx="100" cy="120" r="3" />
          {/* IC chip */}
          <rect x="90" y="75" width="20" height="12" rx="1" />
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`ic-${i}`}
              x1={94 + i * 5}
              y1="75"
              x2={94 + i * 5}
              y2="70"
            />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line
              key={`icb-${i}`}
              x1={94 + i * 5}
              y1="87"
              x2={94 + i * 5}
              y2="92"
            />
          ))}
        </g>

        {/* ===== BEARING ASSEMBLY (exploded) ===== */}
        <g stroke="white" strokeWidth="0.9">
          {/* Outer ring */}
          <circle cx="750" cy="370" r="40" />
          <circle cx="750" cy="370" r="32" />
          {/* Balls */}
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            const cx = 750 + 36 * Math.cos(rad);
            const cy = 370 + 36 * Math.sin(rad);
            return <circle key={`ball-${i}`} cx={cx} cy={cy} r="4" />;
          })}
          {/* Inner ring (exploded below) */}
          <circle cx="750" cy="530" r="22" />
          <circle cx="750" cy="530" r="14" />
          <circle cx="750" cy="530" r="5" />
        </g>

        {/* ===== DIMENSION LINES ===== */}
        <g stroke="white" strokeWidth="0.4">
          {/* Gear diameter */}
          <line x1="290" y1="340" x2="290" y2="360" />
          <line x1="550" y1="340" x2="550" y2="360" />
          <line x1="290" y1="350" x2="550" y2="350" />
          {/* Arrow tips */}
          <path d="M290 350 l8 -3 v6 z" fill="white" />
          <path d="M550 350 l-8 -3 v6 z" fill="white" />

          {/* Piston width */}
          <line x1="160" y1="375" x2="160" y2="385" />
          <line x1="240" y1="375" x2="240" y2="385" />
          <line x1="160" y1="380" x2="240" y2="380" />

          {/* Vertical measurement */}
          <line x1="255" y1="360" x2="265" y2="360" />
          <line x1="255" y1="400" x2="265" y2="400" />
          <line x1="260" y1="360" x2="260" y2="400" />
        </g>

        {/* ===== TECHNICAL ANNOTATIONS (small text) ===== */}
        <g
          fill="white"
          fontFamily="monospace"
          fontSize="8"
          opacity="0.8"
        >
          <text x="395" y="320">A-001</text>
          <text x="560" y="210">B-042</text>
          <text x="665" y="120">C-007</text>
          <text x="170" y="355">D-103</text>
          <text x="175" y="515">D-104</text>
          <text x="185" y="630">D-105</text>
          <text x="730" y="340">E-201</text>
          <text x="730" y="520">E-202</text>
          <text x="55" y="55">PCB-R3</text>
        </g>

        {/* ===== CROSSHAIR MARKS ===== */}
        <g stroke="white" strokeWidth="0.4">
          {/* Top-left */}
          <line x1="30" y1="30" x2="50" y2="30" />
          <line x1="40" y1="20" x2="40" y2="40" />
          {/* Bottom-right */}
          <line x1="840" y1="860" x2="860" y2="860" />
          <line x1="850" y1="850" x2="850" y2="870" />
          {/* Center mark */}
          <circle cx="450" cy="450" r="8" strokeDasharray="2 2" />
          <line x1="442" y1="450" x2="458" y2="450" />
          <line x1="450" y1="442" x2="450" y2="458" />
        </g>

        {/* ===== SHAFT & COUPLING ===== */}
        <g stroke="white" strokeWidth="0.8">
          {/* Long shaft */}
          <rect x="340" y="480" width="160" height="14" rx="2" />
          <line x1="370" y1="480" x2="370" y2="494" />
          <line x1="440" y1="480" x2="440" y2="494" />
          {/* Keyway */}
          <rect x="395" y="476" width="20" height="4" rx="1" />
          {/* Coupling */}
          <rect x="510" y="470" width="35" height="34" rx="4" />
          <circle cx="527" cy="487" r="10" />
          <circle cx="527" cy="487" r="5" />
          {/* Bolts */}
          <circle cx="518" cy="478" r="2.5" />
          <circle cx="536" cy="478" r="2.5" />
          <circle cx="518" cy="496" r="2.5" />
          <circle cx="536" cy="496" r="2.5" />
        </g>

        {/* ===== SPRING (exploded) ===== */}
        <g stroke="white" strokeWidth="0.7" fill="none">
          <path d="M100 300 q15 -12 30 0 q15 12 30 0 q15 -12 30 0 q15 12 30 0 q15 -12 30 0" />
          {/* Spring retainer caps */}
          <rect x="90" y="295" width="10" height="10" rx="1" />
          <rect x="250" y="295" width="10" height="10" rx="1" />
        </g>

        {/* ===== VALVE ASSEMBLY ===== */}
        <g stroke="white" strokeWidth="0.8">
          {/* Valve body */}
          <path d="M620 580 l30 -20 v-40 l-30 -20 l-30 20 v40 z" />
          <circle cx="620" cy="560" r="12" />
          <circle cx="620" cy="560" r="5" />
          {/* Stem */}
          <rect x="616" y="510" width="8" height="20" rx="1" />
          {/* Handwheel (exploded above) */}
          <line
            x1="620"
            y1="510"
            x2="620"
            y2="480"
            strokeDasharray="4 3"
          />
          <circle cx="620" cy="465" r="18" />
          <circle cx="620" cy="465" r="12" />
          <line x1="608" y1="465" x2="632" y2="465" />
          <line x1="620" y1="453" x2="620" y2="477" />
        </g>

        {/* ===== CIRCUIT TRACES (decorative) ===== */}
        <g stroke="white" strokeWidth="0.4" opacity="0.6">
          <path d="M50 700 h80 v-30 h50 v40 h30" />
          <path d="M50 730 h40 v20 h70 v-35 h25" />
          <path d="M50 760 h120 v-20 h40" />
          {/* Nodes */}
          <circle cx="130" cy="670" r="3" fill="white" />
          <circle cx="210" cy="710" r="3" fill="white" />
          <circle cx="185" cy="735" r="3" fill="white" />
          <circle cx="210" cy="740" r="3" fill="white" />
        </g>

        {/* ===== HEX BOLT DETAIL ===== */}
        <g stroke="white" strokeWidth="0.7">
          <path d="M790 650 l12 -7 h14 l12 7 l-12 7 h-14 z" />
          <circle cx="809" cy="650" r="5" />
          {/* Thread */}
          <rect x="805" y="660" width="8" height="30" rx="1" />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={`th-${i}`}
              x1="805"
              y1={664 + i * 5}
              x2="813"
              y2={664 + i * 5}
            />
          ))}
        </g>

        {/* ===== SECTION LINE ===== */}
        <g stroke="white" strokeWidth="0.5" strokeDasharray="12 4 2 4">
          <line x1="300" y1="600" x2="300" y2="850" />
          <text
            x="295"
            y="595"
            fill="white"
            fontFamily="monospace"
            fontSize="10"
          >
            A
          </text>
          <text
            x="295"
            y="865"
            fill="white"
            fontFamily="monospace"
            fontSize="10"
          >
            A
          </text>
        </g>

        {/* ===== HATCHING DETAIL ===== */}
        <g stroke="white" strokeWidth="0.3" opacity="0.5">
          {[...Array(8)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1={400 + i * 6}
              y1="620"
              x2={415 + i * 6}
              y2="660"
            />
          ))}
          <rect
            x="398"
            y="618"
            width="52"
            height="44"
            strokeWidth="0.6"
            fill="none"
          />
        </g>

        {/* ===== SMALL GEAR TRAIN (bottom) ===== */}
        <g stroke="white" strokeWidth="0.6">
          <circle cx="500" cy="780" r="25" />
          <circle cx="500" cy="780" r="18" />
          <circle cx="500" cy="780" r="6" />
          {[...Array(10)].map((_, i) => {
            const angle = (i * 360) / 10;
            const rad = (angle * Math.PI) / 180;
            const x1 = 500 + 18 * Math.cos(rad);
            const y1 = 780 + 18 * Math.sin(rad);
            const x2 = 500 + 28 * Math.cos(rad);
            const y2 = 780 + 28 * Math.sin(rad);
            return (
              <line key={`g4t-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
            );
          })}

          <circle cx="545" cy="760" r="16" />
          <circle cx="545" cy="760" r="10" />
          <circle cx="545" cy="760" r="4" />
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const rad = (angle * Math.PI) / 180;
            const x1 = 545 + 10 * Math.cos(rad);
            const y1 = 760 + 10 * Math.sin(rad);
            const x2 = 545 + 19 * Math.cos(rad);
            const y2 = 760 + 19 * Math.sin(rad);
            return (
              <line key={`g5t-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />
            );
          })}
        </g>

        {/* ===== FRAME / TITLE BLOCK ===== */}
        <g stroke="white" strokeWidth="0.4" opacity="0.4">
          <rect x="650" y="790" width="220" height="80" />
          <line x1="650" y1="820" x2="870" y2="820" />
          <line x1="650" y1="845" x2="870" y2="845" />
          <line x1="770" y1="790" x2="770" y2="870" />
        </g>
        <g
          fill="white"
          fontFamily="monospace"
          fontSize="7"
          opacity="0.4"
        >
          <text x="660" y="810">KODRA CONSEIL</text>
          <text x="660" y="837">LABO</text>
          <text x="780" y="810">REV. 01</text>
          <text x="780" y="837">SCALE 1:1</text>
          <text x="660" y="862">ASSEMBLAGE GÉNÉRAL</text>
          <text x="780" y="862">DWG-001</text>
        </g>
      </svg>

      {/* Secondary subtle SVG on the left/bottom for larger screens */}
      <svg
        className="absolute -left-32 bottom-0 hidden h-[500px] w-[500px] opacity-[0.02] lg:block"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="white" strokeWidth="1">
          <circle cx="250" cy="250" r="100" />
          <circle cx="250" cy="250" r="80" />
          <circle cx="250" cy="250" r="25" />
          {[...Array(20)].map((_, i) => {
            const angle = (i * 360) / 20;
            const rad = (angle * Math.PI) / 180;
            const x1 = 250 + 80 * Math.cos(rad);
            const y1 = 250 + 80 * Math.sin(rad);
            const x2 = 250 + 110 * Math.cos(rad);
            const y2 = 250 + 110 * Math.sin(rad);
            return <line key={`lg-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
        <g stroke="white" strokeWidth="0.5" strokeDasharray="4 3">
          <line x1="50" y1="250" x2="150" y2="250" />
          <line x1="350" y1="250" x2="450" y2="250" />
          <line x1="250" y1="50" x2="250" y2="150" />
          <line x1="250" y1="350" x2="250" y2="450" />
        </g>
      </svg>
    </div>
  );
}
