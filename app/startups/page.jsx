"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";

// Aapke diye gaye startup images ko yaha imports ke taur par rakha gaya hai
import homvery from "@/public/logo.png"; // Placeholder/Actual image reference
import igdrones from "@/public/logo.png";
import wasper from "@/public/logo.png";
import walkingpal from "@/public/logo.png";
import NPF from "@/public/logo.png";
import furSphere from "@/public/logo.png";
import lancyfirm from "@/public/logo.png";
import sewfin from "@/public/logo.png";
import FXuav from "@/public/logo.png";
import tourev from "@/public/logo.png";
import droove from "@/public/logo.png";
import GoHiking from "@/public/logo.png";
import ser from "@/public/logo.png";
import grapixifin from "@/public/logo.png";
import cosmoinfinitas from "@/public/logo.png";

const startups = [
  {
    name: "Homevery",
    site: "https://www.homvery.com/",
    about: "Homvery provides with all the services that one needs in Day to Day life like Electrician, Plumber, Painter etc.",
    url: homvery,
  },
  {
    name: "IG Drones",
    site: "https://igdrones.com/",
    about: "IG Drones is setting new standards in delivering solution using AI, ML, Satellite Imagery, Big Data etc to domain specific Industries.",
    url: igdrones,
  },
  {
    name: "Wasper",
    site: "https://www.homvery.com/",
    about: "Were a team of tech-savvy marketing pros with a passion for helping local D2C brands expand into online ventures, scale their operations to serve Pan India.",
    url: wasper,
  },
  {
    name: "WalkingPal",
    site: "https://www.walkingpal.in/",
    about: 'WalkingPal is an innovative startup aiming to transform last-mile commuting into a more enjoyable, eco-friendly, and social experience via a "walking buddy" app.',
    url: walkingpal,
  },
  {
    name: "Navonmesh Prashar Foundation",
    site: "https://navprasar.org/",
    about: "Navonmesh Prashar Empowers students and youth helping them communicate and connect with the Rural Areas to bridge the gap between Innovation and Society.",
    url: NPF,
  },
  {
    name: "furSphere",
    site: "#",
    about: "The go-to companion platform for all pet needs and adoption.",
    url: furSphere,
  },
  {
    name: "Lancyfirm",
    site: "https://lancyfirm.in/",
    about: "We are a unit of enthusiasts gathered under a single banner to structure our perception of freelancing.",
    url: lancyfirm,
  },
  {
    name: "SEW",
    site: "https://www.sew4all.in/",
    about: "S.E.W is a box full of knowledge and ideas which has the potential to wave the mind of the child towards learning.",
    url: sewfin,
  },
  {
    name: "FxUAV",
    site: "#",
    about: "This is a startup which aims to solve the fire problem in the best possible way.",
    url: FXuav,
  },
  {
    name: "Tourev",
    site: "#",
    about: "Tourev is a startup that envisions and aims at providing services related to picnic, camping and other tourist activities.",
    url: tourev,
  },
  {
    name: "Droove",
    site: "https://www.homvery.com/",
    about: "An E-Vehicle Rental platform which allows you to Rent an E-vehicle at your fingertips in an very affordable price.",
    url: droove,
  },
  {
    name: "GoHiking",
    site: "#",
    about: "One stop solution for your all adventure needs.",
    url: GoHiking,
  },
  {
    name: "Servicescape",
    site: "#",
    about: "Servicescape creates a supply chain using the blockchain technology.",
    url: ser,
  },
  {
    name: "Graphixi",
    site: "https://grapixi.in/",
    about: "We are a unit of enthusiasts gathered under a single banner to structure our perception of freelancing and design.",
    url: grapixifin,
  },
  {
    name: "CosmoInfinitas",
    site: "https://cosmoinfinitas.tech/",
    about: "CosmoInfinitas is a Metaverse and an NFT Marketplace which is build on top of Ethereum Blockchain.",
    url: cosmoinfinitas,
  },
];

export default function StartupsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navbar Integration */}
      <Navbar />

      <section className="relative w-full pt-32 pb-28 overflow-hidden">
        
        {/* Ambient Background Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
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
                Invention & Incubation
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-black tracking-wider uppercase"
            >
              Our Startups
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base font-light tracking-wide max-w-2xl mx-auto"
            >
              Discover the breakthrough companies nurtured and incubated by the Entrepreneurship Cell, VSSUT.
            </motion.p>
          </div>

          {/* Startups Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative p-8 rounded-3xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-white/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Card Top: Logo & Globe Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 p-2 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={startup.url}
                        alt={startup.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    
                    <span className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
                      <Globe className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Startup Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-gray-200 transition-colors">
                    {startup.name}
                  </h3>

                  {/* Startup About Description */}
                  <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                    {startup.about}
                  </p>
                </div>

                {/* Visit Site Button */}
                <div>
                  <Link
                    href={startup.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-lg group-hover:gap-3"
                  >
                    <span>Visit Startup</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}