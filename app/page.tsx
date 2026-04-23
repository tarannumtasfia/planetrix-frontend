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

        {/* ── Section 1: Top planet rows ── */}
        <section className="mb-6">
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

        {/* ── Section 2: Bottom layout — 2 column grid ── */}
        <section>
          {loading ? (
            <div className="grid grid-cols-2 gap-6">
              {/* bottom-left skeleton */}
              <div className="flex gap-3">
                <div className="skeleton-shimmer rounded-2xl w-[110px] h-[260px]" />
                <div className="skeleton-shimmer rounded-2xl w-[110px] h-[260px]" />
              </div>
              {/* bottom-right skeleton */}
              <div className="skeleton-shimmer rounded-2xl h-[320px]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

              {/* BOTTOM-LEFT: planet cards */}
              <div className="flex gap-3 items-start">
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

              {/* BOTTOM-RIGHT: orbital diagram */}
              <div className="flex justify-center">
                <OrbitalDiagram />
              </div>

            </div>
          )}
        </section>

      </div>
    </main>
  );
}