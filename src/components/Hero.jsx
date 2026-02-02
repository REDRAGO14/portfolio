import { motion } from "framer-motion";
import devPic from '../assets/image.png'
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { PiDotOutlineFill } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="min-h-screen px-15 top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <section className=" min-h-screen gap-25 px-15 w-full flex items-center text-white ">
      <div className="flex flex-col items-start justify-center">
        < h2 className="flex bg-black/70 rounded-full pr-4 text-teal-200 mb-5 font-bold shadow-[0px_0px_69px_0px_rgba(46,255,220,0.2)]"><PiDotOutlineFill className="font-bold text-4xl -translate-y-1"/>Software Engineer <PiDotOutlineFill className="translate-y-1 text-lg"/> React & Express Specialist</h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl max-w-2xl font-bold font-dancing-script "
        >
          Crafting <span className="text-teal-400">digital</span> experiences with  precision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-gray-400 max-w-100"
        >
          I design and build modern, responsive, and performant web applications using React, Tailwind CSS, Node.js and real-world best practices.
        </motion.p>
        <div className="flex gap-3">
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="group flex items-center justify-center cursor-pointer mt-10 px-6 py-3 bg-teal-500 text-white font-bold rounded-full shadow-[0px_0px_69px_0px_rgba(46,255,220,0.5)]"
        >
          Contact Me <FaArrowRight className="ml-1 transition-transform during-300 group-hover:translate-x-2"/>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="group flex items-center justify-center cursor-pointer mt-10 px-6 py-3 bg-black/20 border text-white font-bold rounded-full"
        >
          <FiDownload className="transition-transform during-300 group-hover:translate-y-1"/>Download CV 
        </motion.button>
        </div>
      </div>
      <div className="">
        <img className="h-130 w-100 rounded-xl shadow-[0px_0px_69px_0px_rgba(46,255,220,0.6)]" src={devPic} alt="" />
      </div>
    </section>
    </div>
  );
}
