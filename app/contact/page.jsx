"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "GET IN TOUCH";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Organic typing effect simulation
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
      }, 100);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Yeh 'access_key' hona zaroori hai
          subject: "New Message from E-Cell VSSUT Website",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.mobile,
          message: formData.message,
        }),
      });

      const result = await response.json();
      console.log("Web3Forms Result:", result);

      if (result.success) {
        setSuccessMsg("Transmission received. We'll connect soon.");
        setFormData({ firstName: "", lastName: "", email: "", mobile: "", message: "" });
      } else {
        setSuccessMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setSuccessMsg("Error connecting to server.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMsg(""), 4000);
    }
  };
   
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative">
      <Navbar />

      {/* Hand-crafted subtle background noise / grid lines */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-15">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <section className="relative w-full pt-40 pb-28 overflow-hidden z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-20">
            <div className="h-16 flex items-center">
              {isLoading ? (
                <div className="w-64 h-10 bg-neutral-900 animate-pulse rounded-lg border border-white/10" />
              ) : (
                <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white font-['Syncopate']">
                  {displayedText}
                  <span className="animate-pulse text-neutral-500 ml-1">_</span>
                </h1>
              )}
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-light mt-2">
              Drop a line or visit our space
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Section */}
            <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-8 sm:p-12 rounded-[24px]">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-300 mb-8">
                // Send a Message
              </h2>

              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/20 text-xs text-neutral-200 tracking-wide">
                  {successMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Alex" 
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-all font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Mercer" 
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-all font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="youremail@gmail.com" 
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-all font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Mobile</label>
                    <input 
                      type="tel" 
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX" 
                      className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what's on your mind..." 
                    className="w-full bg-black border border-white/10 rounded-xl p-4 text-sm text-white placeholder:text-neutral-700 focus:outline-none focus:border-white transition-all font-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info & Map Section */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-[24px] space-y-6">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-300">
                  // Contact Details
                </h2>

                <div className="space-y-4 text-sm font-light text-neutral-300">
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">Location</span>
                    <p className="text-white mt-0.5">VSSUT Burla, Sambalpur, Odisha - 768018</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">Direct Mail</span>
                    <p className="text-white mt-0.5">ecellvssut@gmail.com</p>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">Phone Line</span>
                    <p className="text-white mt-0.5">+91 9556136949</p>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <Link href="https://www.instagram.com/ecellvssut/" target="_blank" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white hover:text-black text-xs font-mono text-neutral-300 transition-all border border-white/10">
                    Instagram
                  </Link>
                  <Link href="https://www.linkedin.com/company/ecellvssut/mycompany/" target="_blank" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white hover:text-black text-xs font-mono text-neutral-300 transition-all border border-white/10">
                    LinkedIn
                  </Link>
                  <Link href="https://x.com/ecellvssut?lang=en" target="_blank" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white hover:text-black text-xs font-mono text-neutral-300 transition-all border border-white/10">
                    Twitter / X
                  </Link>
                </div>
              </div>

              {/* Colorful Map embed */}
              <div className="bg-[#0a0a0a] border border-white/10 rounded-[24px] overflow-hidden h-[240px]">
                <iframe
                  title="VSSUT Burla Map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1315.5911838876602!2d83.90298366933364!3d21.49585356260758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1785534252262!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

            </div>

          </div>

        </div>
      </section>
    
    </main>
  );
}