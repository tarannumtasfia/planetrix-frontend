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

        {/* ── Section 2+3: Planet cards LEFT + Orbital diagram RIGHT ── */}
        <section className="mb-8">
          {loading ? (
            <div className="flex gap-5 items-center">
              {/* Left skeletons */}
              <div className="flex gap-3 shrink-0">
                <div className="skeleton-shimmer rounded-2xl w-[110px] h-[260px]" />
                <div className="skeleton-shimmer rounded-2xl w-[110px] h-[260px]" />
              </div>
              {/* Right skeleton */}
              <div className="skeleton-shimmer rounded-2xl flex-1 h-[260px]" />
            </div>
          ) : (
            <div className="flex gap-5 items-start">

              {/* LEFT: mars images side by side */}
              <div className="flex gap-3 shrink-0">
                <Image
                  src="/mars_left.png"
                  alt="Planet left"
                  width={472}
                  height={620}
                  className="w-[110px] h-auto rounded-2xl object-contain"
                />
                <Image
                  src="/mars_right.png"
                  alt="Planet right"
                  width={438}
                  height={280}
                  className="w-[110px] h-auto rounded-2xl object-contain"
                />
              </div>

              {/* RIGHT: orbital diagram takes remaining space */}
              <div className="flex-1 flex justify-center">
                <OrbitalDiagram />
              </div>

            </div>
          )}
        </section>

      </div>
    </main>
  );
}