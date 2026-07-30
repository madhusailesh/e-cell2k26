"use client";
import { motion } from "framer-motion";
import { Lightbulb, Users, Target, Network } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function About() {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Workshops & Bootcamps",
      description: "Interactive sessions on startup ideation, product management, and modern tech stacks."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Speaker Sessions",
      description: "Learn directly from successful founders, industry experts, and venture capitalists."
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Mentorship & Guidance",
      description: "Get personalized roadmap support and expert advice to scale your startup ideas."
    },
    {
      icon: <Network className="w-6 h-6 text-white" />,
      title: "Vast Networking",
      description: "Connect with like-minded innovators, investors, and a powerful entrepreneurial community."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative w-full py-32 overflow-hidden">
        
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium tracking-widest uppercase">
                Who We Are
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-5xl font-black tracking-wider uppercase"
            >
              About Us
            </motion.h1>
          </div>

          {/* Main Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Modern Glass Card with Description */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl group hover:border-white/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Fostering Innovation at VSSUT Burla
              </h3>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light mb-6">
                Entrepreneurship Cell (E-Cell) is a non-profit organization run by students of VSSUT, Odisha. We create awareness among students about entrepreneurship through our various programs like workshops, speaker sessions, and flagship events.
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                We actively support upcoming entrepreneurs by providing them with essential resources such as mentors, consultancy, seed funding opportunities, and strong networking channels.
              </p>

              {/* Quick Stats Grid inside card */}
              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-3xl font-black text-white">50+</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Events & Workshops</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">10K+</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Community Reach</p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Modern Bento Grid Features */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 backdrop-blur-md hover:bg-neutral-800/50 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}