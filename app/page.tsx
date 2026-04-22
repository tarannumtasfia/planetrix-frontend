"use client";
import { useState, useEffect } from "react";
import OrbitalDiagram from "./components/OrbitalDiagram";
import Image from "next/image";





export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-10">

        {/* ── Section 1: Planet image panel (top rows) ── */}
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

        {/* ── Section 2: Planet cards with label overlay ── */}
        <section className="mb-8">
          {loading ? (
            <div className="flex gap-4">
              <div className="skeleton-shimmer rounded-2xl" style={{ width: 220, height: 460 }} />
              <div className="skeleton-shimmer rounded-2xl" style={{ width: 220, height: 460 }} />
            </div>
          ) : (
            <div className="flex gap-4 items-start">
              {/* Left image: 2 stacked planets with border */}
              <Image
                src="/mars_left.png"
                alt="Planet left"
                width={220}
                height={460}
                className="rounded-2xl object-contain"
              />

              {/* Right image: single planet with PLANET label */}
              <Image
                src="/mars_right.png"
                alt="Planet right"
                width={220}
                height={230}
                className="rounded-2xl object-contain"
              />
            </div>
          )}
        </section>

        {/* ── Section 3: Orbital diagram ── */}
        <section className="mb-8">
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