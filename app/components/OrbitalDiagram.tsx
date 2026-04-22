"use client";

import Image from "next/image";

export default function OrbitalDiagram() {
  return (
    <div className="relative w-full max-w-xxl mx-auto">
      {/* Figma orbit image as background */}
      <Image
        src="/orbit.png"
        alt="Orbital diagram"
        width={3840}
        height={2160}
        className="w-full h-auto object-contain"
        priority
      />

      
    </div>
  );
}