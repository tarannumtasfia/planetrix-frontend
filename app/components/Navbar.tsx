"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#070d1a]/85 backdrop-blur-xl border-b border-[rgba(99,179,237,0.15)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[#63b3ed] text-lg">✦</span>
          <span className="font-[family-name:var(--font-orbitron)] font-bold text-lg tracking-widest text-slate-200">
            Planetrix
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1 flex-1">
          {["Explore", "Solar System", "Galaxies", "About"].map((link, i) => (
            <a
              key={link}
              href="#"
              className={`px-4 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200
                ${
                  i === 0
                    ? "text-[#63b3ed] bg-[rgba(99,179,237,0.08)]"
                    : "text-[#718096] hover:text-slate-200 hover:bg-[rgba(99,179,237,0.08)]"
                }`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <button className="px-4 py-1.5 text-sm font-medium tracking-wide text-slate-200 border border-[rgba(99,179,237,0.15)] rounded-lg hover:border-[#63b3ed] hover:text-[#63b3ed] transition-all">
            Login
          </button>
          <button className="px-4 py-1.5 text-sm font-bold text-[#070d1a] bg-[#63b3ed] rounded-lg hover:bg-[#90cdf4] transition-all">
            Get Started
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-slate-200 rounded" />
          <span className="block w-6 h-0.5 bg-slate-200 rounded" />
          <span className="block w-6 h-0.5 bg-slate-200 rounded" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[rgba(99,179,237,0.15)] px-6 py-4 flex flex-col gap-1">
          {["Explore", "Solar System", "Galaxies", "About"].map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-2.5 rounded-lg text-[#718096] text-sm hover:text-slate-200 hover:bg-[rgba(99,179,237,0.08)] transition-all"
            >
              {link}
            </a>
          ))}

          <div className="flex gap-2 mt-3 pt-3 border-t border-[rgba(99,179,237,0.15)]">
            <button className="flex-1 py-2 text-sm font-medium text-slate-200 border border-[rgba(99,179,237,0.15)] rounded-lg hover:border-[#63b3ed] hover:text-[#63b3ed]">
              Login
            </button>
            <button className="flex-1 py-2 text-sm font-bold text-[#070d1a] bg-[#63b3ed] rounded-lg hover:bg-[#90cdf4]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}