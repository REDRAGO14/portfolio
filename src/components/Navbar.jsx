import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-6 md:px-20 flex items-center justify-between 
      bg-slate-950/75 backdrop-blur-md border-b border-white/5 
      transition-all duration-300">

      {/* Logo */}
      <h1 className="font-bold text-white text-2xl">
        Dagim<span className="text-teal-400">.Dev</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex bg-white/15 rounded-full px-10 py-4 m-2 items-center shadow-[1px_-1px_100px_1px_rgba(46,255,220,0.5)]">
        <ul className="flex gap-6 text-gray-300 font-bold">
          {["home", "projects", "experience", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="scroll-mt-24 hover:text-gray-200 hover:scale-110 transition-transform capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <a href="#contact">
          <button className="px-6 py-3 bg-teal-400 text-white font-bold rounded-full 
            shadow-[0px_0px_69px_0px_rgba(46,255,220,0.5)] transition-all hover:bg-teal-500">
            Contact Me
          </button>
        </a>
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-3xl focus:outline-none">
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-md border-b border-white/10 md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8 text-gray-300 font-bold">
            {["home", "projects", "experience", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-white transition">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <button className="mt-4 px-6 py-3 bg-teal-400 text-white font-bold rounded-full">
                Contact Me
              </button>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
