"use client";
import { useState, useEffect } from "react";
import OrbitalDiagram from "./components/OrbitalDiagram";
import Image from "next/image";

type Planet = {
  id: string;
  name: string;
  bigImage: string;
  smallImage: string;
  bgImage: string;
  galaxy: string;
  diameter: string;
  lengthOfDay: string;
  avgTemp: string;
};

const PLANETS: Planet[] = [
  { id: "sun", name: "Sun", bigImage: "/sun_big.png", smallImage: "/sun_small.png", bgImage: "/sun_solar_system_02.png", galaxy: "Milky Way", diameter: "1,392,684 km", lengthOfDay: "---", avgTemp: "6000 Kelvin" },
  { id: "mercury", name: "Mercury", bigImage: "/mercury_big.png", smallImage: "/mercury_small.png", bgImage: "/mercury_solar_system_02.png", galaxy: "Milky Way", diameter: "4,878 km", lengthOfDay: "4,222 Earth hours", avgTemp: "167°C" },
  { id: "venus", name: "Venus", bigImage: "/venus_big.png", smallImage: "/venus_small.png", bgImage: "/venus_solar_system_02.png", galaxy: "Milky Way", diameter: "12,104 km", lengthOfDay: "2,802 Earth hours", avgTemp: "464°C" },
  { id: "earth", name: "Earth", bigImage: "/earth_big.png", smallImage: "/earth_small.png", bgImage: "/earth_solar_system_02.png", galaxy: "Milky Way", diameter: "12,756 km", lengthOfDay: "24 hour ground", avgTemp: "15°C" },
  { id: "mars", name: "Mars", bigImage: "/mars_big.png", smallImage: "/mars_small.png", bgImage: "/mars_solar_system_02.png", galaxy: "Milky Way", diameter: "6,794 km", lengthOfDay: "24.7 Earth hours", avgTemp: "65 degrees Celsius" },
  { id: "jupiter", name: "Jupiter", bigImage: "/jupiter_big.png", smallImage: "/jupiter_small.png", bgImage: "/jupiter_solar_system_02.png", galaxy: "Milky Way", diameter: "142,984 km", lengthOfDay: "9.9 Earth hours", avgTemp: "110-degree Celsius" },
  { id: "saturn", name: "Saturn", bigImage: "/saturn_big.png", smallImage: "/saturn_small.png", bgImage: "/saturn_solar_system_02.png", galaxy: "Milky Way", diameter: "120,536 km", lengthOfDay: "10.7 Earth hours", avgTemp: "140-degree Celsius" },
  { id: "uranus", name: "Uranus", bigImage: "/uranus_big.png", smallImage: "/uranus_small.png", bgImage: "/Uranus_solar_system_02.png", galaxy: "Milky Way", diameter: "51,118 km", lengthOfDay: "17.2 Earth hours", avgTemp: "195-degree Celsius" },
  { id: "neptune", name: "Neptune", bigImage: "/neptune_big.png", smallImage: "/neptune_small.png", bgImage: "/neptune_solar_system_02.png", galaxy: "Milky Way", diameter: "49,528 km", lengthOfDay: "16.1 Earth hours", avgTemp: "-200°C" },
];

const BIG_SIZE = 100;
const SMALL_SIZE = 60;

function PlanetDetail({
  planet,
  onBack,
  onNavigate,
}: {
  planet: Planet;
  onBack: () => void;
  onNavigate: (id: string) => void;
}) {
  const idx = PLANETS.findIndex((p) => p.id === planet.id);
  const leftPlanet = PLANETS[(idx - 1 + PLANETS.length) % PLANETS.length];
  const rightPlanet = PLANETS[(idx + 1) % PLANETS.length];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url('${planet.bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="flex items-center justify-between px-8 pt-6 pb-2">
        <button
          onClick={onBack}
          style={{ cursor: "pointer" }}
          className="text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
        >
          ← Back
        </button>
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Planetrix" width={28} height={28} />
          <span className="text-white font-light tracking-[0.3em] text-sm uppercase">Planetrix</span>
        </div>
        <div className="w-16" />
      </div>


      <div className="text-center pt-4 pb-2 px-4">
        <h1 className="text-white font-bold tracking-[0.25em] text-4xl mb-6 uppercase">
          {planet.name}
        </h1>
        <div className="flex justify-center gap-12 flex-wrap">
          {[
            { label: "Galaxy", value: planet.galaxy },
            { label: "Diameter", value: planet.diameter },
            { label: "Length of Day", value: planet.lengthOfDay },
            { label: "Average Temperature", value: planet.avgTemp },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white/50 text-xs tracking-widest uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-white/80 text-sm">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex-1 flex items-center justify-between px-6 relative min-h-[340px]">

        <button
          onClick={() => onNavigate(leftPlanet.id)}
          className="flex flex-col items-center gap-2 group transition-transform hover:scale-105"
        >
          <Image
            src={leftPlanet.bigImage}
            alt={leftPlanet.name}
            width={130}
            height={130}
            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
            style={{ width: 130, height: 130 }}
          />
          <span className="text-white/60 text-xs tracking-widest uppercase group-hover:text-white transition-colors">
            {leftPlanet.name}
          </span>
        </button>


        <div className="flex flex-col items-center">
          <Image
            src={planet.bigImage}
            alt={planet.name}
            width={320}
            height={320}
            className="object-contain drop-shadow-2xl"
            style={{ width: 320, height: 320 }}
          />
        </div>


        <button
          onClick={() => onNavigate(rightPlanet.id)}
          className="flex flex-col items-center gap-2 group transition-transform hover:scale-105"
        >
          <Image
            src={rightPlanet.bigImage}
            alt={rightPlanet.name}
            width={130}
            height={130}
            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity cursor-pointer"
            style={{ width: 130, height: 130 }}
          />
          <span className="text-white/60 text-xs tracking-widest uppercase group-hover:text-white transition-colors">
            {rightPlanet.name}
          </span>
        </button>
      </div>

      <div
        className="flex justify-between items-start px-8 py-6 mt-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.3)" }}
      >
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/logo.png" alt="Planetrix" width={22} height={22} />
            <span className="text-white/70 tracking-[0.3em] text-xs uppercase">Planetrix</span>
          </div>
          <p className="text-white/30 text-xs leading-relaxed ">
            Lorem ipsum dolor sit amet consectetur. Fusce sed aliquam amet curabitur eget quam. Tortor nam volutpat tincidunt nibh lacus vitae sed mi. Viverra eu commodo sed sed commodo commodo urna sed.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-right">
          {["About Us", "Blog", "Career", "FAQ", "Contact us"].map((link) => (
            <span key={link} className="text-white/40 text-xs hover:text-white cursor-pointer transition-colors">
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const activePlanet = PLANETS.find((p) => p.id === selectedPlanet);

  if (activePlanet) {
    return (
      <PlanetDetail
        planet={activePlanet}
        onBack={() => setSelectedPlanet(null)}
        onNavigate={(id) => setSelectedPlanet(id)}
      />
    );
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 pt-10">
        <div style={{ border: "1pt dashed #9740FF" }}>


          <section >
            {loading ? (
              <div className="flex items-center justify-between px-6 py-3 rounded-2xl">
                {PLANETS.map((_, i) => (
                  <div
                    key={i}
                    className="skeleton-shimmer rounded-full"
                    style={{ width: BIG_SIZE, height: BIG_SIZE }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between px-6 py-3 rounded-2xl ">
                {PLANETS.map((planet) => (
                  <button
                    key={planet.id}
                    onClick={() => setSelectedPlanet(planet.id)}
                    className={`
                      relative transition-all duration-300 rounded-full cursor-pointer
                      hover:scale-110 hover:brightness-110 focus:outline-none
                      ${selectedPlanet === planet.id
                        ? "ring-2 ring-[#9747FF] ring-offset-2 ring-offset-black scale-110 brightness-110"
                        : "opacity-90 hover:opacity-100"
                      }
                    `}
                    title={planet.name}
                  >
                    <Image
                      src={planet.bigImage}
                      alt={planet.name}
                      width={BIG_SIZE}
                      height={BIG_SIZE}
                      className="rounded-full object-contain"
                      style={{ width: BIG_SIZE, height: BIG_SIZE }}
                    />
                  </button>
                ))}
              </div>
            )}
          </section>

          <section >
            {loading ? (
              <div className="flex items-center justify-center gap-1 px-6 py-4 rounded-2xl">
                {PLANETS.map((_, i) => (
                  <div
                    key={i}
                    className="skeleton-shimmer rounded-full"
                    style={{ width: SMALL_SIZE, height: SMALL_SIZE }}
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1 px-6 py-4 rounded-2xl">
                {PLANETS.map((planet) => (
                  <button
                    key={planet.id}
                    onClick={() => setSelectedPlanet(planet.id)}
                    className={`
                      relative transition-all duration-300 rounded-full cursor-pointer
                      hover:scale-125 hover:brightness-110 focus:outline-none
                      ${selectedPlanet === planet.id
                        ? "ring-2 ring-[#9747FF] ring-offset-1 ring-offset-black scale-125 brightness-110"
                        : "opacity-80 hover:opacity-100"
                      }
                    `}
                    title={planet.name}
                  >
                    <Image
                      src={planet.smallImage}
                      alt={`${planet.name} small`}
                      width={SMALL_SIZE}
                      height={SMALL_SIZE}
                      className="rounded-full object-contain"
                      style={{ width: SMALL_SIZE, height: SMALL_SIZE }}
                    />
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>


        <section>
          {loading ? (
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-3">
                <div className="skeleton-shimmer rounded-2xl w-[110px] h-[260px]" />
                <div className="skeleton-shimmer rounded-2xl w-[110px] h-[260px]" />
              </div>
              <div className="skeleton-shimmer rounded-2xl h-[320px]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex gap-3 items-start cursor-pointer">
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

              <div className="flex justify-center cursor-pointer">
                <OrbitalDiagram />
              </div>

            </div>
          )}
        </section>

      </div>
    </main>
  );
}