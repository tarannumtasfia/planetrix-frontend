"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";
import SectionHeader from "./components/SectionHeader";
import OrbitalDiagram from "./components/OrbitalDiagram";

const PLANETS = [
  { name: "Mercury", type: "Terrestrial", distance: "77M km",  moons: 0,   color: "#a0a0a0", emoji: "🪨", gradient: "radial-gradient(circle at 35% 35%, #c8c8c8, #606060)" },
  { name: "Venus",   type: "Terrestrial", distance: "261M km", moons: 0,   color: "#e8c56e", emoji: "🌕", gradient: "radial-gradient(circle at 35% 35%, #f5e08a, #c47a1e)" },
  { name: "Earth",   type: "Terrestrial", distance: "150M km", moons: 1,   color: "#4a90d9", emoji: "🌍", gradient: "radial-gradient(circle at 35% 35%, #6bb8f7, #1a4a8a)" },
  { name: "Mars",    type: "Terrestrial", distance: "225M km", moons: 2,   color: "#c1440e", emoji: "🔴", gradient: "radial-gradient(circle at 35% 35%, #e0654a, #8a2a0a)" },
  { name: "Jupiter", type: "Gas Giant",   distance: "778M km", moons: 95,  color: "#c88b3a", emoji: "🟠", gradient: "radial-gradient(circle at 35% 35%, #e8b86d, #9a5a1a)" },
  { name: "Saturn",  type: "Gas Giant",   distance: "1.4B km", moons: 146, color: "#e4d191", emoji: "🪐", gradient: "radial-gradient(circle at 35% 35%, #f0e0a0, #b09040)" },
  { name: "Uranus",  type: "Ice Giant",   distance: "2.9B km", moons: 28,  color: "#7de8e8", emoji: "🔵", gradient: "radial-gradient(circle at 35% 35%, #a0f0f0, #2a9898)" },
  { name: "Neptune", type: "Ice Giant",   distance: "4.5B km", moons: 16,  color: "#4b70dd", emoji: "💙", gradient: "radial-gradient(circle at 35% 35%, #7090f0, #1a2a90)" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">

        {/* Hero */}
        <section className="py-16 md:py-20 max-w-xl">
          <p className="text-[11px] font-[family-name:var(--font-orbitron)] tracking-[0.2em] uppercase text-[#63b3ed] mb-5">
            ✦ &nbsp; Explore the Cosmos
          </p>
          <h1 className="font-[family-name:var(--font-orbitron)] font-black text-4xl md:text-5xl lg:text-6xl leading-tight text-slate-200 mb-5">
            Discover the<br />
            <span className="text-[#63b3ed]">Solar System</span>
          </h1>
          <p className="text-base text-[#718096] leading-relaxed max-w-md">
            Journey through space and explore the planets, moons, and wonders of our celestial neighborhood.
          </p>
        </section>

        {/* Planets grid */}
        <section className="mb-16">
          <SectionHeader
            title="Planets"
            subtitle="Our Solar System's eight worlds"
            count={8}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} />)
              : PLANETS.map((p) => <Card key={p.name} planet={p} />)
            }
          </div>
        </section>

        {/* Orbital diagram */}
        <section className="mb-16">
          <SectionHeader
            title="Orbital Map"
            subtitle="Real-time orbital simulation"
          />
          {loading
            ? <div className="h-64 md:h-96 rounded-2xl skeleton-shimmer" />
            : <OrbitalDiagram />
          }
        </section>

      </div>
    </main>
  );
}