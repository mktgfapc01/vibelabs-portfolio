"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Neo-minimalist animation physics
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

export default function VibeLabsHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="relative min-h-[200vh] bg-[#050505] text-[#ededed] font-sans selection:bg-white selection:text-black" ref={containerRef}>
      
      {/* Minimalist Header */}
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1.5}} className="text-xl font-extrabold tracking-tighter">
          VIBELABS<span className="text-gray-500">.</span>
        </motion.div>
        <motion.button initial={{opacity: 0}} animate={{opacity: 1}} className="text-xs uppercase tracking-[0.3em] hover:text-gray-400 transition-colors">
          Menu / +
        </motion.button>
      </nav>

      {/* Hero Section with Parallax */}
      <motion.section style={{ y: yParallax }} className="h-screen flex flex-col justify-center px-8 md:px-24 pt-20">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            Digital Architecture
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85]">
            MOTION<br/>
            <span className="italic font-serif text-gray-400 font-light">TECHNOLOGY.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-12 text-lg md:text-xl max-w-md text-gray-400 font-light leading-relaxed">
            Crafting award-winning digital experiences. We blend neo-minimalism with fluid physics to build the web of tomorrow.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Content Reveal Section */}
      <section className="relative z-10 bg-[#050505] py-32 px-8 md:px-24">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">OUR WORK.</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Content managed directly via your custom backend. Simply navigate to <a href="/studio" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">/studio</a> to securely add new projects, update text, and control the motion narrative of your site.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
