import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 98 },
      { name: "Responsive Design", level: 92 },
      { name: "State Management (Zustand/Context)", level: 88 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "REST API Development", level: 85 },
      { name: "Authentication & Authorization", level: 82 },
      { name: "Server Architecture", level: 78 },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "SQL", level: 80 },
      { name: "Drizzle ORM", level: 78 },
      { name: "Database Design", level: 76 },
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      { name: "LLM Integration", level: 80 },
      { name: "OpenLLaMA", level: 75 },
      { name: "Prompt Engineering", level: 82 },
      { name: "RAG (Retrieval Augmented Generation)", level: 72 },
      { name: "Embeddings & Vector Search", level: 70 },
      { name: "AI API Integration", level: 78 },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "PM2", level: 85 },
      { name: "Docker (Basic)", level: 70 },
      { name: "Nginx", level: 75 },
      { name: "Linux Server Management", level: 80 },
      { name: "CI/CD Basics", level: 72 },
    ],
  },
  {
    title: "Testing & Design",
    skills: [
      { name: "Jest", level: 75 },
      { name: "Unit Testing", level: 74 },
      { name: "Figma", level: 85 },
      { name: "UI/UX Understanding", level: 82 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div
                        className="bg-accent h-2 rounded-full bg-black/50"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
