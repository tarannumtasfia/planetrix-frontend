"use client";
import { useState, useEffect } from "react";
import OrbitalDiagram from "./components/OrbitalDiagram";
import Image from "next/image";

const PLANETS = [
  { name: "Mercury", color: "#a0a0a0", gradient: "radial-gradient(circle at 35% 30%, #c8c8c8, #606060)" },
  { name: "Venus", color: "#e8c56e", gradient: "radial-gradient(circle at 35% 30%, #f5e08a, #c47a1e)" },
  { name: "Earth", color: "#4a90d9", gradient: "radial-gradient(circle at 35% 30%, #6bb8f7, #1a4a8a)" },
  { name: "Mars", color: "#c1440e", gradient: "radial-gradient(circle at 35% 30%, #e0654a, #8a2a0a)" },
  { name: "Jupiter", color: "#c88b3a", gradient: "radial-gradient(circle at 35% 30%, #e8b86d, #9a5a1a)" },
  { name: "Saturn", color: "#e4d191", gradient: "radial-gradient(circle at 35% 30%, #f0e0a0, #b09040)", hasRing: true },
  { name: "Uranus", color: "#7de8e8", gradient: "radial-gradient(circle at 35% 30%, #a0f0f0, #2a9898)" },
  { name: "Neptune", color: "#4b70dd", gradient: "radial-gradient(circle at 35% 30%, #7090f0, #1a2a90)" },
];

function PlanetSphere({ gradient, color, size, hasRing }: {
  gradient: string; color: string; size: number; hasRing?: boolean;
}) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {hasRing && (
        <div
          className="absolute rounded-full border-[3px]"
          style={{
            width: size * 1.7,
            height: size * 0.35,
            borderColor: `${color}99`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotateX(75deg)",
            zIndex: 0,
          }}
        />
      )}
      <div
        className="rounded-full shadow-[inset_-6px_-4px_14px_rgba(0,0,0,0.55)]"
        style={{
          width: size,
          height: size,
          background: gradient,
          position: "relative",
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-10">

        {/* Planet display panel */}
        <section className="mb-8">
          {loading ? (
            <div className="flex items-end justify-between px-6 py-8 border border-[rgba(99,179,237,0.15)] rounded-2xl bg-[#080e1d]">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="skeleton-shimmer rounded-full"
                  style={{ width: 80 + i * 8, height: 80 + i * 8 }}
                />
              ))}
            </div>
          ) : (
            <Image
            src="/top_portion.png"
            alt="Solar system planets"
            width={1200}
            height={600}
            className="w-full rounded-2xl"
          />
          )}
        </section>

        {/* Orbital diagram */}
        <section className="mb-8">



          {/* Orbital diagram */}
          {loading ? (
            <div className="rounded-2xl skeleton-shimmer" style={{ minHeight: 360 }} />
          ) : (
            <OrbitalDiagram />
          )}
        </section>

      </div>
    </main>
  );
}