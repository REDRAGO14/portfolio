import { motion } from "framer-motion";
import devPic from '../assets/image.png';
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { PiDotOutlineFill } from "react-icons/pi";

export default function Hero() {

  return (
    <div className="min-h-screen top-0 z-0 h-screen w-full 
                    bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] relative overflow-hidden">

      <section id="home" className="min-h-screen justify-center w-full flex items-center text-white relative z-10">

        {/* Left Column */}
        <div className="flex flex-col items-start justify-center max-w-2xl">
          {/* Status Badge with gentle float */}
          <motion.h2
            className="flex bg-black/70 rounded-full pr-4 text-teal-200 mb-5 font-bold 
                       shadow-[0px_0px_69px_0px_rgba(46,255,220,0.2)]"
            animate={{ y: [0, -4, 0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <PiDotOutlineFill className="font-bold text-4xl -translate-y-1"/> 
            Junior Full-Stack Developer • React, Express, Node & MongoDB
          </motion.h2>

          {/* Hero Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-dancing-script relative overflow-hidden"
          >
            Crafting <span className="text-teal-400">Modern</span> digital experiences with precision
          </motion.h2>

          {/* Hero Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="mt-6 text-gray-400 relative"
          >
            I build responsive, user-friendly web applications using React and Tailwind CSS, and I’m currently expanding my skills into backend development with Node.js, Express, MongoDB, and JWT authentication. I love turning ideas into complete, working products while continuously learning and improving.
          </motion.p>

          {/* Buttons */}
          <div className="flex gap-3 mt-10">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="group flex items-center justify-center cursor-pointer px-6 py-3 
                         bg-teal-500 text-white font-bold rounded-full shadow-[0px_0px_69px_0px_rgba(46,255,220,0.5)]
                         transition-transform duration-300 hover:scale-105 hover:shadow-[0px_0px_90px_0px_rgba(46,255,220,0.8)]"
            >
              Contact Me <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2"/>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="group flex items-center justify-center cursor-pointer px-6 py-3 
                         bg-black/20 border border-teal-400 text-white font-bold rounded-full
                         transition-transform duration-300 hover:scale-105 hover:bg-black/40"
            >
              <FiDownload className="mr-2 transition-transform duration-300 group-hover:-translate-y-1"/>Download CV
            </motion.button>
          </div>
        </div>

        {/* Right Column: Dev Image */}
        <div className="ml-10 relative">
          {/* Dev image static normally, float only on hover */}
          <motion.img
            src={devPic}
            alt="Developer"
            className="h-130 w-100 rounded-xl shadow-[0px_0px_69px_0px_rgba(46,255,220,0.6)]"
            whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.5 } }}
          />
          {/* Subtle neon glow border */}
          <motion.div
            className="absolute -inset-2 rounded-xl border border-teal-400 opacity-20 pointer-events-none blur-xl"
          />
        </div>
      </section>
    </div>
  );
}
