import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Stealth Technocrats Pvt. Ltd.",
    date: "2025 - Present",
    description: [
      "Leading full-stack development for the company's SaaS platforms using Next.js, TypeScript, and Node.js",
      "Improved application performance by optimizing APIs, implementing code splitting, and introducing lazy loading",
      "Designed scalable backend services and managed deployments on Linux-based servers",
      "Mentoring junior developers and enforcing structured code review and Git workflows",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Brain Mentors Pvt. Ltd.",
    date: "2023 - 2025",
    description: [
      "Developed and maintained responsive web applications for e-commerce and fintech clients",
      "Collaborated closely with UI/UX teams to build pixel-perfect interfaces using React and Tailwind CSS",
      "Built and integrated RESTful APIs and handled state management across applications",
      "Worked on performance optimization and cross-browser compatibility",
    ],
  },
  {
    id: 3,
    role: "M.Tech Computer Science (AI & ML)",
    company: "Dr. A.P.J. Abdul Kalam Technical University",
    date: "2025 - 2026",
    description: [
      "Pursuing postgraduate specialization in Artificial Intelligence and Machine Learning",
      "Focused on Large Language Models (LLMs), applied AI systems, and real-world deployment",
      "Worked on research-oriented projects involving model integration and data-driven applications",
    ],
  },
  {
    id: 4,
    role: "B.Tech Computer Science (AI & ML)",
    company: "Dr. A.P.J. Abdul Kalam Technical University",
    date: "2020 - 2024",
    description: [
      "Completed undergraduate studies with a focus on core computer science and machine learning",
      "Built multiple full-stack academic and personal projects",
      "Actively participated in technical events, coding activities, and collaborative development",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Content */}
              <div className="flex-1 md:text-right pl-8 md:pl-0 md:pr-12">
                <div
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-gray-500 font-medium mb-4">
                    {exp.company}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm leading-relaxed flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white bg-accent shadow-sm"></div>

              {/* Empty space for other side */}
              <div className="hidden md:block flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
