import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";
import weyraFC from '../assets/weyraFC.png';
import movie from '../assets/moviesite.png';
import portfolio from '../assets/portfolio.png';
import dental from '../assets/dental.png';

const projects = [
  { 
    title: "Dental Clinic Landing Page",
    description: "Modern responsive landing page with booking functionality built using React and Tailwind.",
    img: dental,
    skills: ["react", "tailwind css", "javascript"],
    link: "#",
  },
  {
    title: "My Portfolio Website v1",
    description: "Personal portfolio to showcase projects, skills, about, history and contact information.",
    img: portfolio,
    skills: ["react", "tailwind css", "javascript"],
    link: "https://dagimyosef.vercel.app/",
  },
  {
    title: "Wayra FC – Official Club Landing Page",
    description: "Modern responsive landing page with booking functionality built using React and Tailwind.",
    img: weyraFC,
    skills: ["CSS", "HTML", "javascript"],
    link: "https://weyra.vercel.app/",
  },
  {
    title: "Ethio-Movie – Telegram Streaming Web App",
    description: "Ethio-Movie is a Netflix-inspired web application that fetches and streams media content directly from Telegram channels.",
    img: movie,
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://ethiomovie-brown.vercel.app/",
  },
];

export default function Projects() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e, ref) => {
    const rect = ref.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-5xl font-bold font-dancing-script pb-2 text-center">
            <span className="text-teal-400">Projects that </span>make an impact
          </h2>
          <p className="mb-10 text-gray-400 text-center">
            A section of my recent work, from complex web applications to innovative tools that solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-gray-900/75 border border-white/10 rounded-2xl cursor-pointer overflow-hidden shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              
              animate={{
                y: [0, -5, 0, 5, 0], // subtle floating effect
              }}
              transition={{
                repeat: onscroll,
                duration: 2,
                ease: "easeInOut",
                delay: idx * 0.1,
              }}
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-2xl border border-teal-400 opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 animate-pulse" />

              {/* Project Image */}
              <motion.img
                src={project.img}
                alt={project.title}
                className="h-72 w-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Project Content */}
              <div className="px-6 py-4 flex flex-col gap-4 relative z-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-teal-400">{project.title}</h3>
                  <a href={project.link} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      className="text-2xl text-teal-400"
                    >
                      <MdArrowOutward />
                    </motion.div>
                  </a>
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="rounded-lg px-3 py-1 text-gray-300 bg-gray-400/30 backdrop-blur-xl text-xs font-medium hover:bg-teal-400 hover:text-black transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
