import type { Metadata } from "next";
import { Orbitron, Exo_2 } from "next/font/google";
import "./styles/globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "900"],
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Planetrix",
  description: "Explore the Solar System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="min-h-screen bg-[#070d1a] text-slate-200">
        {children}
      </body>
    </html>
  );
}