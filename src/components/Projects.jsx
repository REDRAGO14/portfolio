import { MdArrowOutward } from "react-icons/md";
import weyraFC from '../assets/weyraFC.png'
import movie from '../assets/moviesite.png'
import portfolio from '../assets/portfolio.png'
import dental from '../assets/dental.png'

export default function Projects() {
  return (
    <section className="min-h-screen px-15 top-0 z-[-2] min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div>
          <h2 className="text-xl md:text-5xl  font-bold font-dancing-script pb-2 text-center ">
            <span className="text-teal-400">Projects that </span>make an impact
          </h2>
          <p className="mb-6 text-gray-400 text-center">
            A section of my recent work, from complex web applications to
            innovative tools that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project Card */}
          <div className="bg-black border border-white/10 rounded-xl  hover:scale-105 transition delay-100 duration-500 hover:shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]">
            <img src={dental} className="h-70 w-full bg-gray-800 rounded-lg " />
            <div className="px-6 py-4 flex-col gap-4 flex">
              <div className="flex justify-between ">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  Dental Clinic Landing Page
                </h3>
                <MdArrowOutward className="text-2xl cursor-pointer hover:scale-115" />
              </div>

              <p className="text-gray-400 text-sm">
                Modern responsive landing page with booking functionality built
                using React and Tailwind.
              </p>

              <ul className="flex gap-2 ">
                <li className=" rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  react
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  tailwind css
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  javascript
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl  hover:scale-105 transition delay-100 duration-500 hover:shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]">
            <img src={portfolio} className="h-70 w-full bg-gray-800 rounded-lg " />
            <div className="px-6 py-4 flex-col gap-4 flex">
              <div className="flex justify-between ">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  my Portfolio Website v1
                </h3>
                <MdArrowOutward className="text-2xl cursor-pointer hover:scale-115" />
              </div>

              <p className="text-gray-400 text-sm">
                Personal portfolio to showcase projects, skills, about, history and contact
              information.
              </p>

              <ul className="flex gap-2 ">
                <li className=" rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  react
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  tailwind css
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  javascript
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl  hover:scale-105 transition delay-100 duration-500 hover:shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]">
            <img src={weyraFC} className="h-70 w-full bg-gray-800 rounded-lg " />
            <div className="px-6 py-4 flex-col gap-4 flex">
              <div className="flex justify-between ">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  Wayra FC – Official Club Landing Page
                </h3>
                <a href="https://weyra.vercel.app/" target="_blank"><MdArrowOutward className="text-2xl cursor-pointer hover:scale-115" /></a>
              </div>

              <p className="text-gray-400 text-sm">
                Modern responsive landing page with booking functionality built
                using React and Tailwind.
              </p>

              <ul className="flex gap-4 ">
                <li className=" rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  CSS
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  HTML
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  javascript
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-black border border-white/10 rounded-xl  hover:scale-105 transition delay-100 duration-500 hover:shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]">
            <img src={movie} className="h-70 w-full bg-gray-800 rounded-lg " />
            <div className="px-6 py-4 flex-col gap-4 flex">
              <div className="flex justify-between ">
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  Ethio-Movie – Telegram Streaming Web App
                </h3>
                <MdArrowOutward className="text-2xl cursor-pointer hover:scale-115" />
              </div>

              <p className="text-gray-400 text-sm">
               Ethio-Movie is a Netflix-inspired web application that fetches and streams media content directly from Telegram channels.              </p>

              <ul className="flex gap-2 ">
                <li className=" rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  HTML
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  CSS
                </li>
                <li className="rounded-lg px-3 text-gray-300 bg-gray-400/30 backdrop-blur-xl">
                  JavaScript
                </li>
              </ul>
            </div>
          </div>




        </div>
      </div>
    </section>
  );
}
