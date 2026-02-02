import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/About';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] bg-gray-900 text-white'>
     <Navbar />
     <Hero />
     <Projects />
     <About />
     <Skills />
     <Contact />
     <Footer />
    </div>
  );
}
