import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar, BadgeCheck } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Dec 2023",
    expiry: "Dec 2026",
    credentialId: "AWS-ASA-12345",
    skills: ["Cloud Architecture", "AWS Services", "Security"],
    link: "#",
    image: "bg-orange-100",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta (Facebook)",
    date: "Aug 2023",
    expiry: "No Expiry",
    credentialId: "META-FE-67890",
    skills: ["React", "JavaScript", "UI Design"],
    link: "#",
    image: "bg-blue-100",
  },
  {
    title: "Google UX Design Professional",
    issuer: "Google",
    date: "May 2023",
    expiry: "No Expiry",
    credentialId: "GOOGLE-UX-54321",
    skills: ["User Research", "Wireframing", "Prototyping"],
    link: "#",
    image: "bg-green-100",
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "Feb 2024",
    expiry: "Feb 2027",
    credentialId: "MDB-DEV-98765",
    skills: ["Database Design", "Aggregation", "Performance"],
    link: "#",
    image: "bg-emerald-100",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`h-32 ${cert.image} relative overflow-hidden flex items-center justify-center`}
              >
                <Award className="w-12 h-12 text-gray-700/30 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{cert.issuer}</p>

                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                  <span className="text-gray-300">|</span>
                  <BadgeCheck size={14} className="text-green-500" />
                  <span>Valid until {cert.expiry}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.link}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-accent transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
