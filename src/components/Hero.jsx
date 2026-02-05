import { motion } from "framer-motion";
import devPic from "../assets/image.png";
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { PiDotOutlineFill } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="min-h-screen w-full 
      bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] 
      relative overflow-hidden px-6 md:px-20">

      <section
        id="home"
        className="min-h-screen flex flex-col-reverse lg:flex-row 
        items-center justify-center gap-12 text-white relative z-10"
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start justify-center max-w-2xl w-full">

          {/* Badge */}
          <motion.h2
            className="flex items-center bg-black/70 rounded-full px-4 py-1 
            text-teal-200 mb-5 font-bold text-sm md:text-base
            shadow-[0px_0px_69px_0px_rgba(46,255,220,0.2)]"
            animate={{ y: [0, -4, 0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <PiDotOutlineFill className="text-2xl mr-1" />
            Junior Full-Stack Developer • React, Node, MongoDB
          </motion.h2>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-bold font-dancing-script leading-tight"
          >
            Crafting <span className="text-teal-400">Modern</span> digital
            experiences with precision
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-gray-400 text-sm md:text-base"
          >
            I build responsive, user-friendly web applications using React and
            Tailwind CSS, and I’m expanding into backend development with
            Node.js, Express, MongoDB, and JWT authentication.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 w-full">
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="group flex items-center justify-center px-6 py-3 
              bg-teal-500 text-white font-bold rounded-full
              shadow-[0px_0px_69px_0px_rgba(46,255,220,0.5)]
              transition-transform duration-300 hover:scale-105
              hover:shadow-[0px_0px_90px_0px_rgba(46,255,220,0.8)]"
            >
              Contact Me
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
            </motion.a>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="group flex items-center justify-center px-6 py-3 
              bg-black/20 border border-teal-400 text-white font-bold rounded-full
              transition-transform duration-300 hover:scale-105 hover:bg-black/40"
            >
              <FiDownload className="mr-2 transition-transform group-hover:-translate-y-1" />
              Download CV
            </motion.button>
          </div>
        </div>

        {/* RIGHT COLUMN (IMAGE) */}
        <div className="relative flex justify-center w-full lg:w-auto">
          <motion.img
            src={devPic}
            alt="Developer"
            className="w-64 sm:w-80 md:w-96 lg:w-[420px] 
            rounded-xl shadow-[0px_0px_69px_0px_rgba(46,255,220,0.6)]"
            whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.5 } }}
          />
          <div className="absolute -inset-2 rounded-xl border border-teal-400 opacity-20 blur-xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
