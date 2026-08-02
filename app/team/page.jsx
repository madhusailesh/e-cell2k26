"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Faculty & Leadership Data
const facultyMembers = [
  {
    name: "Dr. Rakesh Roshan Dash",
    role: "Dean Students' Welfare",
    department: "VSSUT Burla",
    image: "/faculty/rrd.png",
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
    image: "/faculty/pkp.png",
  },
  {
    name: "Mr. Anil Kumar Murmu",
    role: "Assistant Professor",
    department: "Chemical Engineering",
    image: "/faculty/akm.png",
  },
];

// Student Team Data
const studentTeam = [
  {
    name: "Madhu Sailesh Sasamal",
    domain: "TECH",
    branch: "Electrical & Electronics Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/mss.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/madhu-sailesh-sasamal-6918912a4/",
      instagram: "https://instagram.com/madhusailesh",
      twitter: "https://twitter.com/madhusailesh",
      github: "https://github.com/madhusailesh",
    },
  },
{
    name: "Ayush Bardhan Tripathy",
    domain: "TECH",
    branch: "Computer Science & Engineering",
    batch: 2027,
    role: "",
    image: "/team/2027/AYUSH BARDHAN TRIPATHY.png",
    socials: {
      linkedin: "https://linkedin.com/in/ayush-bardhan-tripathy",
      instagram: "https://www.instagram.com/ayush_bardhan?igsh=a3BiZmc1ZWJ5YzBt",
      twitter: "",
      github: "https://github.com/iddev5",
    },
  },
{
    name: "Saran Rath",
    domain: "TECH",
    branch: "Electrical & Electronics Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/saran rath.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/saran-rath-0a268a350/",
      instagram: "",
      twitter: "",
      github: "",
    },
  },

  {
    name: "Hara Prasad Rout",
    domain: "PR",
    branch: "CIVIL ENGINEERING",
    batch: 2027,
    role: "Coordinator",
    image: "/team/2027/Hara Prasad Rout.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/hara-prasad-rout-8a7194293/",
      instagram: "https://www.instagram.com/__.its_haraa.__",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Lipika Ray",
    domain: "PR",
    branch: "Electronics and Communications Engineering",
    batch: 2027,
    role: "Coordinator",
    image: "/team/2027/Lipika-Ray.png",
    socials: { 
      linkedin: "https://www.linkedin.com/in/lipika-ray-324995221/",
      instagram: "",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Pratyush Pradhan",
    domain: "PR",
    branch: "Production Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Pratyush.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/pratyush-pradhan-5409b0301?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/rishupratyush",
      twitter: "https://x.com/PratyushPratyu5",
      github: "",
    },
  },
  
  {
    name: "Swaraj Soubhagya Khandai",
    domain: "EM",
    branch: "Computer Science & Engineering",
    batch: 2028,
    role: "Assistant Coordinator",
    image: "/team/2028/swaraj.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/swaraj-soubhagya-khandai-b273b2384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "",
      twitter: "",
      github: "",
    },
  },

{
    name: "Arpan Agrawal",
    domain: "EM",
    branch: "Computer Science & Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/arpan aggrawal.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/arpanagrwl/",
      instagram: "",
      twitter: "",
      github: "",
    },
  },

  {
    name: "Riya Mishra",
    domain: "EM",
    branch: "Electrical and Electronics Engineering",
    batch: 2028,
    role: "Assistant Coordinator",
    image: "/team/2028/riya.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/riya-mishra-21b244332/",
      instagram: "",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Tejasvi Nayak",
    domain: "PR",
    branch: "Computer Science & Engineering (AI & ML)",
    batch: 2028,
    role: "",
    image: "/team/2028/Tejasvi Nayak .png",
    socials: {
      linkedin: "https://www.linkedin.com/in/tejasvi-nayak-a6b86a351",
      instagram: "https://instagram.com/tejassviii_iii",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Persis Rout",
    domain: "EM",
    branch: "Electronics & Telecommunication Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Persis Rout.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/persis-rout-7806b6331",
      instagram: "https://www.instagram.com/persis_rout555",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Akash Dansana",
    domain: "SOCIAL MEDIA",
    branch: "Mechanical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Akash Dansana.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/akash-dansana-4272953a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/uio_jype8?igsh=Mnp5Yml0enF6NW1k",
      twitter: "https://x.com/AkashDansana",
      github: "https://github.com/Akash-decoded",
    },
  },
  {
    name: "Seetal Priyadarshini Subudhi",
    domain: "EM",
    branch: "Electrical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Seetal Priyadarshini Subudhi .png",
    socials: {
      linkedin: "https://www.linkedin.com/in/seetal-priyadarshini-subudhi-a8a20132a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/Seetal015priya",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Ayush Kishan",
    domain: "PR",
    branch: "Computer Science & Engineering",
    batch: 2027,
    role: "",
    image: "/team/2027/Ayush Kishan.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ayush-kishan",
      instagram: "",
      twitter: "",
      github: "https://github.com/ayuhzkishan",
    },
  },
  {
    name: "Aryan Rajguru",
    domain: "TECH",
    branch: "Computer Science & Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Aryan Rajguru.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/aryan-rajguru-a1333230a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Ayushman Kar",
    domain: "M & S",
    branch: "Mechanical Engineering",
    batch: 2027,
    role: "",
    image: "/team/2027/Ayushman Kar.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ayushmankar334",
      instagram: "https://www.instagram.com/_ayushman_kar",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Pratikshya Mohapatra",
    domain: "M & S",
    branch: "Mechanical Engineering",
    batch: 2027,
    role: "",
    image: "/team/2027/Pratikshya Mohapatra.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/moprati04?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/prati_kshya04?igsh=OWw5OWRzNnZqNDc5",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Kiranjyoti Nath",
    domain: "GD",
    branch: "Chemical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Kiranjyoti Nath.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/kiranjyoti-nath-213aa9348",
      instagram: "https://instagram.com/nath_kiran10",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Abhisek Tripathy",
    domain: "EM",
    branch: "Mechanical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/Abhisek Tripathy.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/abhisek-tripathy-07b6ba411?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "",
      twitter: "",
      github: "",
    },
  },

  {
    name: "ROHITANSHU PASAYAT",
    domain: "GD",
    branch: "Civil Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/rohitanshu_pasayat.png",
    socials: {
      linkedin: "www.linkedin.com/in/rohitanshu-pasayat-115b14338",
      instagram: "https://instagram.com/rohitanshu_rp_",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Payal Jena",
    domain: "M & S",
    branch: "Electronics & Telecommunication Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/payal_jena.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/payal-jena-b11489361?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "",
      twitter: "https://x.com/Payallium",
      github: "",
    },
  },
  {
    name: "Biswas Jain",
    domain: "EM",
    branch: "Chemical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/biswas_jain.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/biswas-jain-0722b0375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/jain_biswas",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Shritika Sahoo",
    domain: "EM",
    branch: "Production Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/shritika_sahoo.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shritika-sahoo-85a667332",
      instagram: "",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Somya Tridarsini Dash",
    domain: "M & S, TECH",
    branch: "Electrical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/somya_tridarsini_dash.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/somyatridarsinidash?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/_somyatridarsini_",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Satyajit Nayak",
    domain: "M & S",
    branch: "Metallurgical & Materials Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/satyajit_nayak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/satyajit-nayak-4b0966316?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/im_satyajitnayak?igsh=NW1mNmE1NGd3amMx",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Hari Shah",
    domain: "EM",
    branch: "Electronics & Telecommunication Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/hari_shah.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/hari-shah-2b8797343?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/lv__hari__vl",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Kunaal Sahoo",
    domain: "EM",
    branch: "Electrical & Electronics Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/kunaal_sahoo.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/kunaalsahoo",
      instagram: "https://www.instagram.com/kunaal.__.sahoo?igsh=MXgwbzk4NWF4ZW11Mg==",
      twitter: "",
      github: "https://github.com/Naalysis",
    },
  },
  {
    name: "Omm Shree Chandan",
    domain: "PR",
    branch: "Electrical Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/omm_shree_chandan.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/omm-shree-chandan-670b2636b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/machine__ak_47?igsh=MWVtNmc2eTczbWE3MA==",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Archit Kumar Panigrahi",
    domain: "SOCIAL MEDIA",
    branch: "Information Technology",
    batch: 2027,
    role: "",
    image: "/team/2027/archit_kumar_panigrahi.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/archit-kumar-panigrahi?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/archit_panigrahi_",
      twitter: "https://x.com/kumar_arch89867",
      github: "https://github.com/op-architkumar",
    },
  },
  {
    name: "Ankita Nayak",
    domain: "EM",
    branch: "Electronics & Telecommunication Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/ankita_nayak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/ankita-nayak-89a15034a",
      instagram: "https://instagram.com/_ankz._",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Bidyashree Nikita Nath",
    domain: "SOCIAL MEDIA",
    branch: "Production Engineering",
    batch: 2027,
    role: "",
    image: "/team/2027/bidyashree_nikita_nath.png",
    socials: {
      linkedin: "https://tinyurl.com/bdzd3ujv",
      instagram: "https://tinyurl.com/yzh8ctav",
      twitter: "",
      github: "",
    },
  },

  {
    name: "Ritik Kumar Jena",
    domain: "M & S, VIDEO EDITING",
    branch: "Electronics & Telecommunication Engineering",
    batch: 2027,
    role: "",
    image: "/team/2027/ritik_kumar_jena.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/rkjena",
      instagram: "https://www.instagram.com/arey.ritik?igsh=MXdzdTA3eTIxcXF6Mw%3D%3D&utm_source=qr",
      twitter: "https://x.com/ritikjena27",
      github: "",
    },
  },
  {
    name: "Prachee Pradhan",
    domain: "GD",
    branch: "Civil Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/prachee_pradhan.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/prachee-pradhan-811173344",
      instagram: "",
      twitter: "",
      github: "",
    },
  },
  {
    name: "Bhagyashree Dhal",
    domain: "M & S",
    branch: "Electronics & Telecommunication Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/bhagyashree_dhal.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/bhagyashree-dhal-a9a9b534a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "",
      twitter: "",
      github: "",
    },
  },
{
    name: "Satyanarayan Patra",
    domain: "M & S",
    branch: "Electrical & Electronics Engineering",
    batch: 2028,
    role: "",
    image: "/team/2028/satyanarayan_patra.png",
    socials: {
      linkedin: "",
      instagram: "https://www.instagram.com/satya_narayan.07?utm_source=qr&igsh=MWFyeDIwdnVybXoybg==",
      twitter: "",
      github: "",
    },
  }

];

export default function TeamPage() {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [isLoading, setIsLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [flippedIndex, setFlippedIndex] = useState(null); // Mobile flip state tracker
  const fullText = "OUR-TEAM";

  // Page Refresh / Load Typing Effect & Skeleton Simulation
  useEffect(() => {
    setIsLoading(true);
    setDisplayedText("");

    const timer = setTimeout(() => {
      setIsLoading(false);
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 130);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Filter & Precise Sorting Logic
  const filteredStudents = studentTeam
    .filter((student) => {
      const isAlumni = student.batch <= 2025;

      if (selectedTab === "ALL") return true;
      if (selectedTab === "ALUMNI") return isAlumni;
      return student.batch.toString() === selectedTab;
    })
    .sort((a, b) => {
      const getPriority = (role) => {
        if (role === "Coordinator") return 1;
        if (role === "Assistant Coordinator") return 2;
        return 3;
      };

      return getPriority(a.role) - getPriority(b.role);
    });

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      <Navbar />

      {/* Blueprint Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center overflow-hidden opacity-20">
        <div className="absolute w-[90vmin] h-[90vmin] border border-white/5 rounded-full" />
        <div className="absolute w-full h-[1px] bg-white/5" />
        <div className="absolute w-[1px] h-full bg-white/5" />
      </div>

      <section className="relative w-full pt-32 sm:pt-44 pb-24 sm:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Massive Header */}
          <div className="text-center space-y-4 mb-14 sm:mb-20">
            <div className="h-20 sm:h-36 flex items-center justify-center font-['Syncopate']">
              {isLoading ? (
                <div className="w-64 sm:w-[500px] h-14 sm:h-20 bg-neutral-900 animate-pulse rounded-2xl border border-white/10" />
              ) : (
                <h1 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white px-2">
                  {displayedText.split("").map((char, idx) => (
                    <span key={idx} className="inline-block text-white">
                      {char}
                    </span>
                  ))}
                  <span className="animate-pulse text-white ml-1">|</span>
                </h1>
              )}
            </div>

             
          </div>

          {/* FACULTY SECTION */}
          <div className="mb-20 sm:mb-28">
            <div className="flex items-center gap-2.5 mb-8 sm:mb-10 border-b border-white/10 pb-4">
              <h2 className="text-lg sm:text-xl font-medium tracking-wide text-neutral-200">
                Advisors & Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyMembers.map((faculty, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-[20px] bg-[#0d0d0d] border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col items-center text-center shadow-lg"
                >
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-white/20 p-1 mb-5 overflow-hidden bg-black">
                    <Image
                      src={faculty.image}
                      alt={faculty.name}
                      fill
                      sizes="(max-width: 768px) 144px, 144px"
                      className="object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {faculty.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mb-3">
                    {faculty.role}
                  </p>
                  <span className="text-[11px] text-neutral-300 tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                    {faculty.department}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FILTER TABS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-20 font-['Syncopate']">
            {["ALL", "2027", "2028", "ALUMNI"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  selectedTab === tab
                    ? "bg-white text-black border-white font-bold"
                    : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* STUDENT TEAM SECTION WITH FULL RESPONSIVE FLIP CARDS */}
          <div>
            <div className="flex items-center justify-between mb-8 sm:mb-10 border-b border-white/10 pb-4">
              <h2 className="text-lg sm:text-xl font-medium tracking-wide text-neutral-200">
                CORE MEMBERS
              </h2>
            </div>

            {/* Student Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1200px]">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => {
                  const isAlumni = student.batch <= 2025;
                  const isFlipped = flippedIndex === index;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.04 }}
                      onClick={() => setFlippedIndex(isFlipped ? null : index)} // Click/Tap to flip on mobile/tablet
                      className="group relative h-[420px] w-full [perspective:1200px] cursor-pointer"
                    >
                      <div 
                        className={`relative h-full w-full rounded-[20px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                          isFlipped ? "[transform:rotateY(180deg)]" : ""
                        }`}
                      >
                        
                        {/* FRONT FACE */}
                        <div className="absolute inset-0 h-full w-full rounded-[20px] bg-[#0d0d0d] border border-white/10 p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-lg">
                          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-white/30 p-1 mb-4 overflow-hidden bg-black">
                            <Image
                              src={student.image}
                              alt={student.name}
                              fill
                              sizes="(max-width: 768px) 144px, 144px"
                              className="object-cover rounded-full"
                            />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide font-['Syncopate']">
                            {student.name}
                          </h3>

                          {/* Conditional Role Badge on Front */}
                          {student.role && (
                            <div className="mt-2 px-3.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase">
                              {student.role}
                            </div>
                          )}

                          <span
                            className={`text-[10px] px-3 py-0.5 rounded-full border mt-2 font-medium ${
                              isAlumni
                                ? "bg-white/10 text-white border-white/30"
                                : "bg-white/[0.05] text-neutral-300 border-white/15"
                            }`}
                          >
                            {isAlumni ? "Alumni" : `Batch ${student.batch}`}
                          </span>

                          <span className="text-[10px] text-neutral-500 mt-4 tracking-widest uppercase block lg:hidden">
                            (Tap to flip)
                          </span>
                        </div>

                        {/* BACK FACE */}
                        <div className="absolute inset-0 h-full w-full rounded-[20px] bg-[#0b0b0b] border border-white/20 p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-lg">
                          <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-tight">
                            {student.name}
                          </h3>

                          {/* Conditional Role Badge on Back */}
                          {student.role && (
                            <div className="mb-2 px-3 py-0.5 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 text-[10px] font-semibold tracking-widest uppercase">
                              {student.role}
                            </div>
                          )}
                          
                          {/* Domain Highlight Badge */}
                          <div className="mb-2 px-3.5 py-1 rounded-full bg-white text-black font-extrabold text-[11px] tracking-widest uppercase">
                            {student.domain}
                          </div>

                          <p className="text-xs text-neutral-400 font-medium mb-6 px-2">
                            {student.branch}
                          </p>

                          {/* Conditional Social Media SVG Logos Bar */}
                          <div className="flex items-center justify-center gap-2.5 flex-wrap">
                            
                            {/* LinkedIn */}
                            {student.socials.linkedin && (
                              <Link
                                href={student.socials.linkedin}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()} // Prevent card flip toggle when clicking link
                                className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15"
                                title="LinkedIn"
                              >
                                <svg
                                  className="w-4 h-4 fill-current"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              </Link>
                            )}

                            {/* Instagram */}
                            {student.socials.instagram && (
                              <Link
                                href={student.socials.instagram}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15"
                                title="Instagram"
                              >
                                <svg
                                  className="w-4 h-4 fill-current"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                              </Link>
                            )}

                            {/* X (Twitter) */}
                            {student.socials.twitter && (
                              <Link
                                href={student.socials.twitter}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15"
                                title="X (Twitter)"
                              >
                                <svg
                                  className="w-4 h-4 fill-current"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                              </Link>
                            )}

                            {/* GitHub */}
                            {student.socials.github && (
                              <Link
                                href={student.socials.github}
                                target="_blank"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2.5 rounded-xl bg-white/[0.08] hover:bg-white hover:text-black text-neutral-200 transition-all border border-white/15"
                                title="GitHub"
                              >
                                <svg
                                  className="w-4 h-4 fill-current"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013 .405c2.291-1.552 3.297-1.23 3.297-1.23 .653 1 .242 2 .118 2 .77 .84 1 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91 .77 .91" />
                                </svg>
                              </Link>
                            )}

                          </div>
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