import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  // Auto remove notification after 4 seconds
  useEffect(() => {
    if (!notification.message) return;
    const timer = setTimeout(() => setNotification({ message: "", type: "" }), 4000);
    return () => clearTimeout(timer);
  }, [notification]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (!name || !email || !message) {
      setNotification({ message: "Please fill in all fields! ❌", type: "error" });
      return;
    }

    // Email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setNotification({ message: "Please enter a valid email! ❌", type: "error" });
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_9yw261a",
        "template_ftikp0b",
        formRef.current,
        "BXqZ3FYe2B761hcrc"
      )
      .then(
        () => {
          setLoading(false);
          setNotification({ message: "Message sent successfully! ✅", type: "success" });
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setNotification({ message: "Oops! Something went wrong. ❌", type: "error" });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen text-white py-24 px-6 relative">
      {/* Header */}
      <motion.div
        className="header flex flex-col items-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <span className="text-teal-400 font-semibold">GET IN TOUCH</span>
        </motion.p>
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-5xl md:text-5xl font-bold font-dancing-script mt-2 text-center"
        >
          <span className="text-teal-400">Let's build</span> Something great
        </motion.h2>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="mt-6 text-gray-400 max-w-180 text-center mb-6"
        >
          Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
        </motion.p>
      </motion.div>

      {/* Premium Glass Notification */}
<AnimatePresence>
  {notification.message && (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -40, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-[999]"
    >
      <div
        className={`
          px-8 py-4 rounded-2xl backdrop-blur-xl border shadow-2xl
          flex items-center gap-3 text-sm md:text-base font-semibold
          ${
            notification.type === "success"
              ? "bg-teal-500/10 border-teal-400/40 text-teal-300 shadow-[0_0_40px_rgba(46,255,220,0.4)]"
              : "bg-red-500/10 border-red-400/40 text-red-300 shadow-[0_0_40px_rgba(255,80,80,0.4)]"
          }
        `}
      >
        <span className="text-xl">
          {notification.type === "success" ? "✓" : "!"}
        </span>
        {notification.message}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Body */}
      <div className="body flex flex-col md:flex-row justify-center gap-10 mb-15">
        {/* Left: Contact Form */}
        <motion.div
          className="leftContact w-full md:w-120 bg-gray-900/70 border border-white/10 rounded-2xl p-8 shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]"
          whileHover={{ y: -3, boxShadow: "0px 10px 30px 0px rgba(46,255,220,0.15)" }}
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 text-left">
            {["name", "email", "message"].map((field) => (
              <div key={field} className="relative">
                <label className="text-gray-400 font-semibold mb-1 block capitalize">{field}</label>
                {field !== "message" ? (
                  <input
                    type={field}
                    name={field}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                    className="p-4 w-full bg-gray-900 text-white border border-white/10 rounded-md outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 autofill:bg-gray-900 autofill:text-white"
                    autoComplete="off"
                    required
                  />
                ) : (
                  <textarea
                    name={field}
                    rows="5"
                    placeholder="Your Message"
                    className="p-4 w-full bg-gray-900 text-white border border-white/10 rounded-md outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/50 autofill:bg-gray-900 autofill:text-white"
                    required
                  />
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              className="group flex items-center justify-center mt-6 px-6 py-3 bg-teal-500 text-white font-bold rounded-full shadow-[0px_0px_69px_0px_rgba(46,255,220,0.2)]"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 80px 0px rgba(46,255,220,0.4)" }}
              transition={{ duration: 0.3 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <div className="rightContact flex flex-col gap-6 md:w-96">
          <motion.div
            className="bg-gray-900/75 border border-white/10 rounded-2xl py-10 px-8 flex flex-col gap-6"
            whileHover={{ y: -2, boxShadow: "0px 10px 30px 0px rgba(46,255,220,0.15)" }}
          >
            <h1 className="text-xl font-bold">Contact Information</h1>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <h2 className="font-bold">dagimyosef82@gmail.com</h2>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Phone</p>
                <h2 className="font-bold">+251957005519</h2>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <h2 className="font-bold">Addis-Ababa, Ethiopia</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900/70 border border-white/10 rounded-2xl p-6 shadow-[1px_-1px_30px_1px_rgba(46,255,220,0.1)]"
            whileHover={{ y: -2, boxShadow: "0px 10px 30px 0px rgba(46,255,220,0.15)" }}
          >
            <h1 className="text-xl font-bold">Currently Available</h1>
            <p className="text-gray-400 text-sm mt-3">
              I'm currently open for new opportunities and exciting projects. Whether you need a full-time engineer or a freelance contractor, let's talk 😊
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
