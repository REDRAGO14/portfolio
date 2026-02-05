import { motion } from "framer-motion";
import { section } from "framer-motion/client";
import { useState } from "react";

export default function About() {
  const TimelineItem = ({ side, year, title, children, idx }) => {
    const [hovered, setHovered] = useState(false);

    const floatAnim = {
      x: hovered ? 0 : side === "left" ? [-5, 5, -5] : [5, -5, 5],
      transition: { duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
    };

    return (
      
      <motion.div
        
        className="relative flex items-center"
        initial={{ opacity: 0, x: side === "left" ? -200 : 200, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: idx * 0.2, type: "spring", stiffness: 120 }}
        animate={floatAnim}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Center Dot */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-teal-400 border-4 border-[#0b1220]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Card */}
        <div
          className={`w-full md:w-1/2 ${side === "left" ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"}`}
        >
          <motion.div
            className="bg-gray-900/75 border border-white/10 rounded-2xl p-8 shadow-[0_0_15px_rgba(46,255,220,0.2)] hover:shadow-[0_0_40px_rgba(46,255,220,0.5)] transition-transform duration-200"
            whileHover={{ scale: 1.05, rotateZ: hovered ? 2 : 0 }}
          >
            <p className="text-teal-400 font-bold">{year}</p>
            <h3 className="text-xl font-bold mt-2">{title}</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">{children}</p>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="min-h-screen py-24 px-6 md:px-16 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      {/* Header */}
      <motion.div
        className="header mb-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-teal-400 font-semibold">DEVELOPER JOURNEY</p>
        <h2 className="text-4xl md:text-5xl font-bold font-dancing-script mt-2">
          <span className="text-teal-400">Experience that</span> speaks volumes
        </h2>
        <p className="mt-6 text-gray-400">
          A timeline of my professional growth, from curious beginner to senior
          engineer leading teams and building products at scale
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-24">
        {/* Vertical line */}
        <motion.div
          className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-teal-400/40 shadow-[0_0_25px_rgba(46,255,220,0.5)]"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />

        <div className="space-y-32">
          <TimelineItem
            idx={0}
            side="left"
            year="2023"
            title="Started Web Development"
          >
            I began my journey by learning HTML, CSS, and JavaScript fundamentals.
            I built small static websites to understand how the web works, practiced
            layouts and responsiveness, and developed curiosity for creating
            interactive experiences users could explore and enjoy.
          </TimelineItem>

          <TimelineItem
            idx={1}
            side="right"
            year="2024"
            title="Learning React & Modern Frontend"
          >
            I discovered React and learned how to build dynamic interfaces using
            components, props, and state. I practiced reusable UI patterns,
            improved code structure, and started creating responsive applications
            styled with Tailwind CSS for modern design consistency.
          </TimelineItem>

          <TimelineItem
            idx={2}
            side="left"
            year="2025"
            title="Exploring Backend Development"
          >
            I expanded into backend development with Node.js, Express, and MongoDB.
            I learned how APIs work, implemented authentication using JWT and bcrypt,
            connected databases with Mongoose, and built full-stack projects combining
            frontend interfaces with real data.
          </TimelineItem>

          <TimelineItem
            idx={3}
            side="right"
            year="Now"
            title="Building Real Full-Stack Projects"
          >
            I focus on building complete applications from scratch, applying frontend
            and backend knowledge together. I continuously improve problem-solving,
            write cleaner code, use Git for version control, and prepare myself for
            professional junior developer opportunities.
          </TimelineItem>
        </div>
      </div>
    </section>
  );
}
