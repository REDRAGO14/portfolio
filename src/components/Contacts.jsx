export default function Contact() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
    <div className="max-w-xl mx-auto text-center shadow-[0px_0px_69px_0px_rgba(46,255,220,0.1)] border-1 border-teal-500">
        <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

        <p className="text-gray-400 mb-12">
          Have a project in mind or want to work together? Feel free to reach out.
        </p>

        <form className="grid gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 bg-gray-900 border border-white/10 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 bg-gray-900 border border-white/10 rounded-md outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 bg-gray-900 border border-white/10 rounded-md outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-teal-500 text-black font-semibold py-3 rounded-md hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
    