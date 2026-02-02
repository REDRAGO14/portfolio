export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Left */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Dagim.dev</h3>
          <p className="text-sm leading-6">
            Building modern, responsive and user-friendly web experiences using
            React, Tailwind CSS and modern tools.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-400 cursor-pointer">Home</li>
            <li className="hover:text-teal-400 cursor-pointer">Projects</li>
            <li className="hover:text-teal-400 cursor-pointer">About</li>
            <li className="hover:text-teal-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <p className="text-sm">Email: your@email.com</p>
          <p className="text-sm">Phone: +251...</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Dagim Yosef. All rights reserved.
      </div>
    </footer>
  );
}
