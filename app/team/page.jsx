"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import ChromaGrid from "@/components/ui/ChromaGrid";

// Faculty & Leadership Data (Screenshot ke mutabiq)
const facultyMembers = [
  {
    image: "/logo.png",
    title: "Dr. Rakesh Roshan Dash",
    subtitle: "Dean Students' Welfare",
    handle: "VSSUT Burla",
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/faculty/trs.jpg",
    title: "Dr. Trupti Ranjan Mohapatra",
    subtitle: "Vice President, Technical Society",
    handle: "VSSUT Burla",
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Mr. Prasanta Kumar Parida",
    subtitle: "Assistant Professor",
    handle: "EEE Department",
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Mr. Anil Kumar Murmu",
    subtitle: "Assistant Professor",
    handle: "Chemical Engineering",
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
];

// Student Team Data (Batch wise + Domain + Madhu Sailesh Demo)
const studentTeam = [
  {
    image: "/logo.png",
    title: "Madhu Sailesh",
    subtitle: "Full Stack Lead",
    handle: "Batch 2027",
    batch: 2027,
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Madhu Sailesh",
    subtitle: "AI / ML Engineer",
    handle: "Batch 2027",
    batch: 2027,
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Madhu Sailesh",
    subtitle: "UI/UX Designer",
    handle: "Batch 2028",
    batch: 2028,
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Madhu Sailesh",
    subtitle: "Cloud & DevOps",
    handle: "Batch 2028",
    batch: 2028,
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Madhu Sailesh",
    subtitle: "Competitive Programmer",
    handle: "Alumni",
    batch: 2025, // Auto-Alumni check (2025/2026 passed out)
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
  {
    image: "/logo.png",
    title: "Madhu Sailesh",
    subtitle: "App Developer",
    handle: "Alumni",
    batch: 2025, // Auto-Alumni check
    borderColor: "#ffffff",
    gradient: "linear-gradient(145deg,#171717,#000)",
    url: "#"
  },
];

export default function TeamPage() {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const currentYear = new Date().getFullYear(); // 2026

  // Filter logic based on tabs (2026 excluded from tabs)
  const filteredStudents = studentTeam.filter((student) => {
    const isAlumni = student.batch <= 2026;

    if (selectedTab === "ALL") return true;
    if (selectedTab === "ALUMNI") return isAlumni;
    return !isAlumni && student.batch.toString() === selectedTab;
  });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="relative w-full pt-36 pb-32 overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-white/5 blur-[190px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-5 mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4 text-white animate-spin" />
              <span className="text-xs sm:text-sm text-gray-200 font-semibold tracking-widest uppercase">
                The Minds Behind E-Cell
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-7xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
            >
              Our Team
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base font-light tracking-wide max-w-2xl mx-auto"
            >
              Guiding mentors and passionate student innovators driving the entrepreneurial culture at VSSUT Burla.
            </motion.p>
          </div>

          {/* FACULTY SECTION USING CHROMAGRID */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase">Faculty Advisors & Leadership</h2>
            </div>

            <div className="w-full">
              <ChromaGrid items={facultyMembers} radius={280} damping={0.4} />
            </div>
          </div>

          {/* STUDENT TEAM SECTION WITH FILTER TABS & CHROMAGRID */}
          <div>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase">Student Executive Board</h2>
              </div>
            </div>

            {/* Filter Buttons Bar (2026 excluded as requested) */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {["ALL", "2027", "2028", "ALUMNI"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 border ${
                    selectedTab === tab
                      ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-105"
                      : "bg-neutral-900/80 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Student Cards Grid using ChromaGrid */}
            <div className="w-full">
              {filteredStudents.length > 0 ? (
                <ChromaGrid items={filteredStudents} radius={280} damping={0.4} />
              ) : (
                <div className="text-center py-16 text-gray-500 text-sm tracking-wider uppercase">
                  No members found for this batch.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}