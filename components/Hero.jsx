"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import FloatingLines from "./ui/FloatingLines";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      
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
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-20 sm:pt-0 pointer-events-none">
        
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md pointer-events-auto shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium tracking-widest uppercase">
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wider text-white uppercase leading-[1.15] drop-shadow-2xl">
            Entrepreneurship Cell <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">| VSSUT</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-lg md:text-xl italic font-light text-gray-300 tracking-wide max-w-2xl mx-auto"
        >
          A Techno-Management Club
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-auto w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link
            href="/events"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden text-black font-semibold bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-white/20"
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase">Explore Events</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden text-white border border-white/20 rounded-full hover:border-white transition-all duration-300 bg-black/40 backdrop-blur-md shadow-lg"
          >
            <span className="text-xs sm:text-sm tracking-widest uppercase font-medium">Join Us</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}