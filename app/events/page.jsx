"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

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

      <section className="relative w-full pt-32 pb-28 overflow-hidden">
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-widest uppercase">
                Milestones & Legacy
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-black tracking-wider uppercase"
            >
              Events
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base font-light tracking-wide"
            >
              The milestones achieved by our club over the years
            </motion.p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            
            {/* Central Glowing Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-white/80 to-white/20 -translate-x-1/2" />

            <div className="space-y-16">
              {eventsList.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    
                    {/* Timeline Center Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-black border-2 border-white flex items-center justify-center z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                    </div>

                    {/* Date Badge */}
                    <div className="w-full md:w-1/2 flex justify-start md:justify-center pl-14 md:pl-0 mb-3 md:mb-0">
                      <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white/10 text-gray-300 border border-white/15 backdrop-blur-md">
                        {event.date}
                      </span>
                    </div>

                    {/* Event Content Card */}
                    <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                      <div className="group relative p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-white/10 overflow-hidden">
                        
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-wide group-hover:text-gray-200 transition-colors">
                          {event.title}
                        </h3>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light mb-6">
                          {event.description}
                        </p>

                        <Link
                          href={event.link}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-200 transition-all duration-300 shadow-lg group-hover:gap-3"
                        >
                          Visit Site
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}