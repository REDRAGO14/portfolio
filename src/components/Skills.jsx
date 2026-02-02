export default function Skills() {
  const skills = [
    "React JS",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML & CSS",
    "Node.js",
    "Express",
    "Prisma",
    "MongoDB / SQL",
    "Git & GitHub",
    "Framer Motion",
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">Skills & Tools</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-black border border-white/10 rounded-lg hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    