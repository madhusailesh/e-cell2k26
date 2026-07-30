"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

// Faculty & Leadership Data (Screenshot ke mutabiq)
const facultyMembers = [
  {
    name: "Dr. Rakesh Roshan Dash",
    role: "Dean Students' Welfare",
    department: "VSSUT Burla",
    image: "/logo.png",
  },
  {
    name: "Dr. Trupti Ranjan Mohapatra",
    role: "Vice President, Technical Society",
    department: "VSSUT Burla",
    image: "/logo.png",
  },
  {
    name: "Mr. Prasanta Kumar Parida",
    role: "Assistant Professor",
    department: "Electrical and Electronics Engineering (EEE)",
    image: "/logo.png",
  },
  {
    name: "Mr. Anil Kumar Murmu",
    role: "Assistant Professor",
    department: "Chemical Engineering Department",
    image: "/logo.png",
  },
];

// Student Team Data (Batch wise + Domain + Madhu Sailesh Demo)
const studentTeam = [
  {
    name: "Madhu Sailesh Sasamal",
    domain: "Full Stack Lead",
    batch: 2027,
    image: "/logo.png",
  },
  {
    name: "Madhu Sailesh Sasamal",
    domain: "AI / ML Engineer",
    batch: 2027,
    image: "/logo.png",
  },
  {
    name: "Madhu Sailesh Sasamal",
    domain: "UI/UX Designer",
    batch: 2028,
    image: "/logo.png",
  },
  {
    name: "Madhu Sailesh Sasamal",
    domain: "Cloud & DevOps",
    batch: 2028,
    image: "/logo.png",
  },
  {
    name: "Madhu Sailesh Sasamal",
    domain: "Competitive Programmer",
    batch: 2026, // Auto-Alumni check ke liye
    image: "/logo.png",
  },
  {
    name: "Madhu Sailesh Sasamal",
    domain: "App Developer",
    batch: 2026, // Auto-Alumni check ke liye
    image: "/logo.png",
  },
];

export default function TeamPage() {
  const [selectedTab, setSelectedTab] = useState("ALL");

  const currentYear = new Date().getFullYear(); // 2026

  // Filter logic based on tabs
  const filteredStudents = studentTeam.filter((student) => {
    const isAlumni = student.batch <= 2026; // 2026 aur usse pehle alumni

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

          {/* FACULTY SECTION */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-6 h-6 text-white" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase">Faculty Advisors & Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyMembers.map((faculty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-6 rounded-[24px] bg-neutral-900/70 border border-white/10 backdrop-blur-xl hover:border-white/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col items-center text-center"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative w-24 h-24 rounded-2xl bg-white/5 border border-white/10 p-2 mb-5 overflow-hidden group-hover:scale-105 transition-transform">
                    <Image src={faculty.image} alt={faculty.name} fill className="object-contain p-2" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{faculty.name}</h3>
                  <p className="text-xs text-gray-300 font-medium mb-2">{faculty.role}</p>
                  <span className="text-[11px] text-gray-400 font-light px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {faculty.department}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* STUDENT TEAM SECTION WITH FILTER TABS */}
          <div>
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase">Student Executive Board</h2>
              </div>
            </div>

            {/* Filter Buttons Bar */}
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

            {/* Student Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => {
                  const isAlumni = student.batch <= 2026;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group relative p-6 rounded-[24px] bg-neutral-900/70 border border-white/10 backdrop-blur-xl hover:border-white/40 transition-all duration-500 shadow-xl overflow-hidden flex flex-col items-center text-center"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative w-24 h-24 rounded-full bg-white/5 border border-white/10 p-2 mb-5 overflow-hidden group-hover:scale-105 transition-transform">
                        <Image src={student.image} alt={student.name} fill className="object-contain p-2" />
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">{student.name}</h3>
                      <p className="text-xs text-gray-300 font-medium mb-4">{student.domain}</p>
                      
                      {/* Batch / Alumni Badge */}
                      <div className="mt-auto">
                        <span className={`text-[11px] px-3 py-1 rounded-full border ${
                          isAlumni 
                            ? "bg-amber-500/10 text-amber-300 border-amber-500/20" 
                            : "bg-white/5 text-gray-300 border-white/10"
                        }`}>
                          {isAlumni ? "Alumni" : `Batch of ${student.batch}`}
                        </span>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-16 text-gray-500 text-sm tracking-wider uppercase">
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