import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LAN-Based Terminal Chat Application",
    description:
      "A real-time terminal chat system designed for local network communication without external servers. Built with WebSockets and Node.js to enable secure, low-latency messaging across devices within the same LAN.",
    tags: ["Node.js", "WebSocket", "TypeScript", "Linux", "PM2"],
    github: "#",
    demo: "#",
    image: "bg-slate-100",
  },
  {
    title: "AI-Powered Document Assistant",
    description:
      "An LLM-integrated application that allows users to query documents using natural language. Implemented retrieval-augmented generation (RAG) with local model inference for privacy-focused AI workflows.",
    tags: [
      "Next.js",
      "TypeScript",
      "OpenLLaMA",
      "Vector Search",
      "AI Integration",
    ],
    github: "#",
    demo: "#",
    image: "bg-indigo-100",
  },
  {
    title: "Full Stack SaaS Platform",
    description:
      "Developed a scalable SaaS web application with authentication, dashboards, and REST APIs. Focused on performance optimization, modular architecture, and production deployment using Nginx and PM2.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Drizzle ORM", "Nginx"],
    github: "#",
    demo: "#",
    image: "bg-emerald-100",
  },
  {
    title: "Developer Deployment Toolkit",
    description:
      "A self-hosted deployment environment for managing frontend and backend services over LAN with reverse proxy configuration, CI/CD automation, and process monitoring.",
    tags: ["Docker", "Nginx", "GitHub Actions", "Linux", "DevOps"],
    github: "#",
    demo: "#",
    image: "bg-amber-100",
  },
  {
    title: "Netflix Clone",
    description:
      "A responsive movie streaming UI inspired by Netflix, featuring dynamic movie listings, trailers, and categories fetched from TMDB API with smooth animations and reusable React components.",
    tags: ["React", "TMDB API", "Tailwind CSS", "Axios", "Responsive UI"],
    github: "#",
    demo: "#",
    image: "bg-red-100",
  },
  {
    title: "Weather Forecast Application",
    description:
      "A real-time weather application that displays current conditions, forecasts, and location-based data using OpenWeather API with clean UI and asynchronous data handling.",
    tags: ["React", "OpenWeather API", "TypeScript", "REST API", "Geolocation"],
    github: "#",
    demo: "#",
    image: "bg-blue-100",
  },
  {
    title: "TomatoTrails",
    description:
      "A modern food discovery and restaurant exploration platform with categorized listings, search functionality, and intuitive UI focused on enhancing local dining experiences.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Search", "UI/UX"],
    github: "#",
    demo: "#",
    image: "bg-rose-100",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
