import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200">
                {/* Replace with your image */}
                <img
                  src="/aman.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-200 rounded-full -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a passionate software developer who enjoys building
              practical, efficient, and scalable solutions. With a strong
              interest in backend development and system design, I focus on
              creating applications that are not only functional but also
              reliable and easy to maintain. I enjoy working close to the system
              level designing APIs, managing databases, optimizing performance,
              and ensuring smooth communication between services.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My work is driven by curiosity and a constant desire to learn. I
              like exploring new tools, improving development workflows, and
              solving real-world problems through clean and thoughtful code.
              Whether it’s setting up servers, working with LAN-based systems,
              managing deployments, or refining application logic, I aim to
              understand how everything works under the hood and make it better.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-gray-900">Problem Solving</h4>
                <p className="text-sm text-gray-500">
                  Analytical approach to complex challenges
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Clean Code</h4>
                <p className="text-sm text-gray-500">
                  Maintainable & scalable architecture
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">UI/UX Focus</h4>
                <p className="text-sm text-gray-500">
                  User-centered design thinking
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Continuous Learning</h4>
                <p className="text-sm text-gray-500">
                  Always exploring new technologies
                </p>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
