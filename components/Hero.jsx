"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import FloatingLines from "./ui/FloatingLines";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Floating Lines Effect with Deep Contrast */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-90">
        <FloatingLines 
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          animationSpeed={1}
          linesGradient={['#000000', '#ffffff', '#aaaaaa', '#000000']}
        />
      </div>

      {/* Rich Dark Gradient Overlay for Deep Black Look */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black via-black/40 to-black pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 px-4 pointer-events-none">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md pointer-events-auto shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-widest uppercase">
            Innovate • Create • Scale
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-wider text-white uppercase leading-tight drop-shadow-2xl">
            Entrepreneurship Cell <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">| VSSUT</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl italic font-light text-gray-300 tracking-wide"
        >
          A Techno-Management Club
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-6 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <Link
            href="/events"
            className="group relative inline-flex items-center px-8 py-3.5 overflow-hidden text-black font-semibold bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-white/20"
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase">Explore Events</span>
          </Link>

          <Link
            href="/contact"
            className="group relative inline-flex items-center px-8 py-3.5 overflow-hidden text-white border border-white/20 rounded-full hover:border-white transition-all duration-300 bg-black/40 backdrop-blur-md shadow-lg"
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase font-medium">Join Us</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}