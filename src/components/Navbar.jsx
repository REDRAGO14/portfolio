export default function Navbar() {
  return (
    // Added 'sticky top-0' and changed 'z-[-2]' to 'z-50'
    <nav className="sticky top-0 z-50 w-full px-20  flex items-center justify-between 
  bg-slate-950/75 backdrop-blur-md border-b border-white/5 
  transition-all duration-300 ">
      <div className="">
        <h1 className="font-bold text-white text-2xl">Dagim<span className="text-teal-400">.Dev</span></h1>
      </div>
      <div className="bg-white/15 rounded-full px-10 py-4 m-2 flex items-center shadow-[1px_-1px_100px_1px_rgba(46,255,220,0.5)]">
        <ul className="flex gap-6 text-gray-300 font-bold ">
          <li><a href="" className="hover:text-gray-200 hover:scale-110 transition-transform">About</a></li>
          <li><a href="" className="hover:text-gray-200 hover:scale-110 transition-transform">Projects</a></li>
          <li><a href="" className="hover:text-gray-200 hover:scale-110 transition-transform">Experience</a></li>
          <li><a href="" className="hover:text-gray-200 hover:scale-110 transition-transform">Testimonials</a></li>
        </ul>
      </div>
      <div className="">
        <button className="items-center justify-center cursor-pointer px-6 py-3 bg-teal-400 text-white font-bold rounded-full shadow-[0px_0px_69px_0px_rgba(46,255,220,0.5)] transition-all hover:bg-teal-500">
          Contact Me
        </button>
      </div>
    </nav>
  );
}