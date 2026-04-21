"use client";

const PLANETS = [
  { name: "Mercury", color: "#a0a0a0", size: 6,  orbitR: 55,  speed: 4.7 },
  { name: "Venus",   color: "#e8c56e", size: 9,  orbitR: 85,  speed: 3.5 },
  { name: "Earth",   color: "#4a90d9", size: 10, orbitR: 118, speed: 3.0 },
  { name: "Mars",    color: "#c1440e", size: 7,  orbitR: 152, speed: 2.4 },
  { name: "Jupiter", color: "#c88b3a", size: 17, orbitR: 198, speed: 1.3 },
  { name: "Saturn",  color: "#e4d191", size: 13, orbitR: 244, speed: 0.97 },
  { name: "Uranus",  color: "#7de8e8", size: 11, orbitR: 284, speed: 0.68 },
  { name: "Neptune", color: "#4b70dd", size: 10, orbitR: 320, speed: 0.54 },
];

const CX = 340;
const CY = 260;

export default function OrbitalDiagram() {
  return (
    <div className="bg-[#0d1629] border border-[rgba(99,179,237,0.15)] rounded-2xl overflow-hidden">
      <svg
        viewBox="0 0 680 520"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
      >
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 137.508) % 680}
            cy={(i * 79.372) % 520}
            r={i % 4 === 0 ? 1.2 : 0.6}
            fill="white"
            opacity={0.1 + (i % 5) * 0.08}
          />
        ))}

        {/* Orbit rings */}
        {PLANETS.map((p) => (
          <circle
            key={p.name + "-ring"}
            cx={CX} cy={CY} r={p.orbitR}
            fill="none"
            stroke="rgba(99,179,237,0.1)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
        ))}

        {/* Sun */}
        <defs>
          <radialGradient id="sunGrad" cx="38%" cy="38%">
            <stop offset="0%" stopColor="#fff5cc" />
            <stop offset="55%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#ff6600" />
          </radialGradient>
          <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <circle cx={CX} cy={CY} r={34} fill="rgba(255,140,0,0.08)" />
        <circle cx={CX} cy={CY} r={26} fill="rgba(255,140,0,0.12)" />
        <circle cx={CX} cy={CY} r={20} fill="url(#sunGrad)" filter="url(#sunGlow)" />

        {/* Planets */}
        {PLANETS.map((p, i) => {
          const dur = `${20 / p.speed}s`;
          const offset = (i / PLANETS.length) * 360;
          return (
            <g key={p.name}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`${offset} ${CX} ${CY}`}
                to={`${offset + 360} ${CX} ${CY}`}
                dur={dur}
                repeatCount="indefinite"
              />
              <circle cx={CX + p.orbitR} cy={CY} r={p.size} fill={p.color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}