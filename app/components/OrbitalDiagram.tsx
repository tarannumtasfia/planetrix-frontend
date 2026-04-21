"use client";

import Image from "next/image";

export default function OrbitalDiagram() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-[#080e1d]">
      {/* Figma orbit image as background */}
      <Image
        src="/orbit.png"
        alt="Orbital diagram"
        width={1200}
        height={640}
        className="w-full h-auto block"
        priority
      />

      
    </div>
  );
}