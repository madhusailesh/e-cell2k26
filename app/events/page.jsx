"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

// --- 3D IMPORTS ---
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ==========================================
// 1. 3D OBJECT COMPONENT (Responsive & Monochrome)
// ==========================================
function Card3DShape({ isHovered }) {
  const meshRef = useRef();
  
  // Mobile/Tab/PC ke liye screen ka size lena
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Hover hone par spin speed
    const speed = isHovered ? 2.5 : 0.3;
    meshRef.current.rotation.x += delta * speed;
    meshRef.current.rotation.y += delta * speed;

    // RESPONSIVE LOGIC: Screen (card width) ke hisaab se base size set karo
    const baseScale = Math.min(1, viewport.width / 4); 
    
    // Hover hone par zoom effect + responsive size
    const targetScale = (isHovered ? 1.4 : 1) * baseScale;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    // Position ko thoda center-right rakha hai taaki mobile pe bhi accha dikhe
    <mesh ref={meshRef} position={[viewport.width > 3 ? 2 : 0, 0, -2]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        // Sirf white aur black theme
        color="#ffffff"
        wireframe={true}
        transparent={true}
        opacity={isHovered ? 0.25 : 0.05} // Hover par white glow badhega
      />
    </mesh>
  );
}

// ==========================================
// 2. INDIVIDUAL EVENT CARD COMPONENT
// ==========================================
function EventCard({ event, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Center Dot */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black border-2 border-white flex items-center justify-center z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-ping" />
      </div>

      {/* Date Badge - Mobile par chota, PC par normal */}
      <div className="w-full md:w-1/2 flex justify-start md:justify-center pl-14 md:pl-0 mb-4 md:mb-0">
        <span className="inline-block px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase bg-white/10 text-gray-300 border border-white/15 backdrop-blur-md">
          {event.date}
        </span>
      </div>

      {/* 3D EVENT CONTENT CARD */}
      <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
        <div 
          className="group relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* --- 3D CANVAS BACKGROUND INSIDE CARD --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={1} />
              <Card3DShape isHovered={isHovered} />
            </Canvas>
          </div>

          {/* Hover Gradient Overlay (White/Gray) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

          {/* HTML CONTENT (Foreground z-10) */}
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-wide group-hover:text-gray-300 transition-colors duration-300">
              {event.title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-light mb-5 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
              {event.description}
            </p>

            <Link
              href={event.link}
              className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white text-black font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-lg group-hover:gap-3"
            >
              Visit Site
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
export default function EventsPage() {
  const eventsList = [
    {
      title: "E-Summit",
      date: "March 2020 - April 2021",
      description: "Eastern India's biggest flagship event brings together a horde of business moguls and industry experts to butt heads for the much needed societal changes.",
      link: "#"
    },
    {
      title: "TedX",
      date: "Jan 2021 - Feb 2022",
      description: "Tedx is a program of local, self organized events that brings in live speakers to combine and indulge in discussions. TEDx VSSUT is organized annually inviting speakers from distinguished fields who share their experiences and inspire all.",
      link: "https://www.tedxvssut.in/"
    },
    {
      title: "Innobuzz",
      date: "Jan 2022 - Jan 2023",
      description: "A 36-hour national level hackathon where participants get a chance to win exciting goodies and cash prizes by submitting effective solutions to a problem statement.",
      link: "#"
    },
    {
      title: "Business Model",
      date: "Jan 2023 - Present",
      description: "Business Model competition is a platform where various startups pitch in their ideas to tackle day to day problems infront of genuine investors who guide them during and even after the event.",
      link: "#"
    },
    {
      title: "IPL Auction",
      date: "Jan 2023 - Present",
      description: "A fun event where participants place themselves in the shoes of a bidder to build a dream team they always thought of. Team with the best bargaining and bidding skills wins.",
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navbar Component */}
      <Navbar />

      <section className="relative w-full pt-24 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-white/5 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4 mb-16 sm:mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase"
            >
              Events
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-xs sm:text-sm md:text-base font-light tracking-wide"
            >
              The milestones achieved by our club over the years
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Glowing Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/80 to-white/20 -translate-x-1/2" />

            {/* Event Cards Mapping */}
            <div className="space-y-12 sm:space-y-16">
              {eventsList.map((event, index) => (
                <EventCard key={index} event={event} index={index} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}