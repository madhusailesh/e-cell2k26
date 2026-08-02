import ThreeHero from "@/components/ThreeHero";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen h-[100dvh] flex items-center justify-center overflow-hidden bg-black px-4">
      {/* 3D Black & White Wireframe Background */}
      <ThreeHero />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white uppercase">
          E-Cell <span className="font-semibold text-neutral-300">VSSUT</span>
        </h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-mono text-neutral-400">
          Where Innovation Meets Entrepreneurship
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/events"
            className="inline-flex items-center gap-3 px-8 py-4 text-black font-medium bg-white rounded-full hover:bg-neutral-200 transition-all duration-300 cursor-pointer"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">Explore Events</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}