interface Planet {
  name: string;
  type: string;
  distance: string;
  moons: number;
  color: string;
  emoji: string;
  gradient: string;
}

export default function Card({ planet }: { planet: Planet }) {
  return (
    <div className="card-fadein group bg-[#0d1629] border border-[rgba(99,179,237,0.15)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(99,179,237,0.4)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(99,179,237,0.1)]">

      {/* Visual */}
      <div className="relative h-44 flex items-center justify-center bg-gradient-to-br from-[#080e1d] to-[#0d1629] overflow-hidden">
        {/* Glow */}
        <div
          className="absolute w-28 h-28 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-300"
          style={{ background: planet.color }}
        />

        {/* Planet */}
        <div
          className="planet-float relative z-10 w-28 h-28 rounded-full flex items-center justify-center shadow-[inset_-20px_-10px_40px_rgba(0,0,0,0.5)]"
          style={{ background: planet.gradient }}
        >
          <span className="text-6xl drop-shadow-xl">{planet.emoji}</span>
        </div>

        {/* Badge */}
        <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-[family-name:var(--font-orbitron)] tracking-widest uppercase text-[#63b3ed] bg-[rgba(99,179,237,0.12)] border border-[rgba(99,179,237,0.25)] rounded-full">
          {planet.type}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-semibold tracking-widest text-slate-200 mb-3">
          {planet.name}
        </h3>

        <div className="flex gap-4 mb-3.5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-widest text-[#718096] font-medium">Distance</span>
            <span className="text-xs font-[family-name:var(--font-orbitron)] text-[#63b3ed] font-medium">{planet.distance}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-widest text-[#718096] font-medium">Moons</span>
            <span className="text-xs font-[family-name:var(--font-orbitron)] text-[#63b3ed] font-medium">{planet.moons}</span>
          </div>
        </div>

        <button className="w-full py-2 text-xs tracking-widest text-[#718096] border border-[rgba(99,179,237,0.15)] rounded-lg transition-all duration-200 group-hover:border-[#63b3ed] group-hover:text-[#63b3ed] group-hover:bg-[rgba(99,179,237,0.05)]">
          Explore →
        </button>
      </div>
    </div>
  );
}