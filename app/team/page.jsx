"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

// Faculty & Leadership Data
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
    image: "/faculty/trs.jpg",
  },
  {
    name: "Mr. Prasanta Kumar Parida",
    role: "Assistant Professor",
    department: "EEE Department",
    image: "/logo.png",
  },
  {
    name: "Mr. Anil Kumar Murmu",
    role: "Assistant Professor",
    department: "Chemical Engineering",
    image: "/logo.png",
  },
];

// Student Team Data
const studentTeam = [
  {
    name: "Madhu Sailesh Sasamal",
    domain: "TECH LEAD",
    branch: "Electrical & Electronics Engineering",
    batch: 2028,
    image: "/team/2028/mss.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Pratikshya Mohapatra",
    domain: "Full Stack Developer",
    branch: "Computer Science & Engineering",
    batch: 2027,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Seetal Priyadarshini Subudhi",
    domain: "UI/UX Designer",
    branch: "Information Technology",
    batch: 2027,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Akash Dansana",
    domain: "AI / ML Engineer",
    branch: "Electrical Engineering",
    batch: 2027,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Pratyush Pradhan",
    domain: "Cloud & DevOps",
    branch: "Mechanical Engineering",
    batch: 2028,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Swaraj Soubhagya Khandai",
    domain: "App Developer",
    branch: "Electronics & Telecommunication",
    batch: 2028,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Persis Rout",
    domain: "Content & Strategy",
    branch: "Civil Engineering",
    batch: 2027,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Aryan Rajguru",
    domain: "Competitive Programmer",
    branch: "Computer Science & Engineering",
    batch: 2028,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Kiranjyoti Nath",
    domain: "Public Relations",
    branch: "Electrical & Electronics",
    batch: 2027,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Ayushman Kar",
    domain: "Web Developer",
    branch: "Metallurgical & Materials",
    batch: 2028,
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Ayush Kishan",
    domain: "Blockchain Lead",
    branch: "Computer Science & Engineering",
    batch: 2025, // Alumni
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
  {
    name: "Tejasvi Nayak",
    domain: "Operations Lead",
    branch: "Production Engineering",
    batch: 2025, // Alumni
    image: "/logo.png",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", twitter: "https://twitter.com", facebook: "https://facebook.com" }
  },
];

export default function TeamPage() {
  const [selectedTab, setSelectedTab] = useState("ALL");

  // Filter logic based on tabs (2026 excluded from tabs)
  const filteredStudents = studentTeam.filter((student) => {
    const isAlumni = student.batch <= 2026;

    if (selectedTab === "ALL") return true;
    if (selectedTab === "ALUMNI") return isAlumni;
    return !isAlumni && student.batch.toString() === selectedTab;
  });

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black">
      <Navbar />

      <section className="relative w-full pt-40 pb-32 overflow-hidden">
        
        {/* Soft Organic Background Aura */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-20">
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-neutral-100">
             <span className="font-semibold text-white underline decoration-white/20 underline-offset-8">Team</span>
            </h1>
          </div>

          {/* FACULTY SECTION */}
          <div className="mb-28">
            <div className="flex items-center gap-2.5 mb-10 border-b border-white/10 pb-4">
              <ShieldCheck className="w-5 h-5 text-neutral-300" />
              <h2 className="text-xl font-medium tracking-wide text-neutral-200">Advisors & Leadership</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyMembers.map((faculty, index) => (
                <div key={index} className="group relative p-6 rounded-[24px] bg-[#0d0d0d] border border-white/10 hover:border-white/25 transition-all duration-500 flex flex-col items-center text-center">
                  <div className="relative w-36 h-36 rounded-full border border-white/30 p-1 mb-5 overflow-hidden bg-black shadow-inner">
                    <Image src={faculty.image} alt={faculty.name} fill className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{faculty.name}</h3>
                  <p className="text-xs text-neutral-400 font-medium mb-3">{faculty.role}</p>
                  <span className="text-[11px] text-neutral-400 tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                    {faculty.department}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* STUDENT TEAM SECTION */}
          <div>
            <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-4 flex-wrap gap-4">
              <h2 className="text-xl font-medium tracking-wide text-neutral-200">Student Executive Board</h2>
              
              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2">
                {["ALL", "2027", "2028", "ALUMNI"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-300 border ${
                      selectedTab === tab
                        ? "bg-white text-black border-white shadow-sm"
                        : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Student Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => {
                  const isAlumni = student.batch <= 2026;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      className="group relative h-[420px] rounded-[24px] bg-[#0d0d0d] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 flex flex-col items-center justify-center p-6 text-center shadow-xl"
                    >
                      {/* FRONT VIEW: Big Profile Image & Name */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                        <div className="relative w-40 h-40 rounded-full border-2 border-white/40 p-1 mb-5 overflow-hidden bg-black shadow-lg">
                          <Image src={student.image} alt={student.name} fill className="object-cover rounded-full" />
                        </div>
                        <h3 className="text-lg font-bold text-white tracking-wide">{student.name}</h3>
                        <span className={`text-[11px] px-3.5 py-1 rounded-full border mt-3 font-medium ${
                          isAlumni ? "bg-amber-500/10 text-amber-200 border-amber-500/30" : "bg-white/[0.05] text-neutral-300 border-white/15"
                        }`}>
                          {isAlumni ? "Alumni" : `Batch ${student.batch}`}
                        </span>
                      </div>

                      {/* HOVER VIEW: Highlighted Domain & Larger Readable Text */}
                      <div className="absolute inset-0 bg-[#0b0b0b] p-6 flex flex-col items-center justify-center text-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 z-10">
                        <h3 className="text-lg font-bold text-white mb-2 leading-tight">{student.name}</h3>
                        
                        {/* Highlighted Domain Badge */}
                        <div className="mb-3 px-4 py-1.5 rounded-full bg-white text-black font-extrabold text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                          {student.domain}
                        </div>

                        <p className="text-xs text-neutral-400 font-medium mb-6 px-2">{student.branch}</p>

                        {/* Social Media SVG Logos Bar */}
                        <div className="flex items-center justify-center gap-3">
                          
                          {/* LinkedIn Logo */}
                          <Link 
                            href={student.socials.linkedin} 
                            target="_blank"
                            className="p-3 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15 shadow-md"
                            title="LinkedIn"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </Link>

                          {/* Instagram Logo */}
                          <Link 
                            href={student.socials.instagram} 
                            target="_blank"
                            className="p-3 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15 shadow-md"
                            title="Instagram"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </Link>

                          {/* X (Twitter) Logo */}
                          <Link 
                            href={student.socials.twitter} 
                            target="_blank"
                            className="p-3 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15 shadow-md"
                            title="X (Twitter)"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </Link>

                          {/* Facebook Logo */}
                          <Link 
                            href={student.socials.facebook} 
                            target="_blank"
                            className="p-3 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15 shadow-md"
                            title="Facebook"
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.37 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.588 9 4.7V8z"/>
                            </svg>
                          </Link>

                        </div>

                      </div>

                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-16 text-neutral-500 text-xs tracking-wider uppercase">
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