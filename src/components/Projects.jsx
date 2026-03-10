import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projectsdata";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowUpRight } from "lucide-react";

function ProjectItem({
  title,
  description,
  tech,
  image,
  link,
  github,
  period,
  impact,
  learning,
  delay = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <a
        href={link || github || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-52 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/20 to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <h3 className="text-xl font-bold text-white drop-shadow-lg">{title}</h3>
              {period && (
                <p className="text-slate-400 text-sm mt-0.5">{period}</p>
              )}
            </div>
            <span className="p-2 rounded-full bg-white/10 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        </div>
      </a>
      <p className="text-slate-400 section-body line-clamp-2 mb-3">{description}</p>
      {impact && (
        <p className="text-slate-500 text-base mb-2 line-clamp-1">{impact}</p>
      )}
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500 mb-4">
        {tech.slice(0, 5).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="flex gap-5">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-base font-semibold"
          >
            Live Demo
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-white text-base font-medium"
          >
            <FaGithub className="w-5 h-5" />
            Code
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Projects
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-white mb-12"
      >
        Featured Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {projects.map((proj, i) => (
          <ProjectItem key={i} {...proj} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}
