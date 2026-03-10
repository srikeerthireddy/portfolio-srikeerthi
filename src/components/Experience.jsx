import React from "react";
import { motion } from "framer-motion";
import { Zap, Award, BookOpen } from "lucide-react";

const experience = {
  company: "ShotGun Fantasy",
  role: "Backend Developer Intern",
  period: "July 2025 – Jan 2026",
  summary:
    "Built and optimized backend services for an NFL Fantasy application, focusing on API reliability, scalability, and clean system design.",
  tech: ["Node.js", "Golang", "Express.js", "PostgreSQL", "Redis", "Docker", "REST APIs"],
  points: [
    { label: "Impact", text: "Improved API response times and system stability, supporting high-traffic fantasy draft workflows during peak usage.", icon: Zap },
    { label: "Highlights", text: "Appreciated for meaningful contributions to the Draft Room module used in live fantasy drafts.", icon: Award },
    { label: "Learnings", text: "Production-grade backend code, performance tuning, and collaborating within an agile engineering team.", icon: BookOpen },
  ],
};

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Experience
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-white mb-12"
      >
        Work Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative pl-8 md:pl-10 border-l-2 border-amber-500/30"
      >
        <span className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-amber-400 shadow-[0_0_24px_rgba(251,191,36,0.4)]" />

        <div className="pb-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-white">{experience.role}</h3>
            <span className="text-slate-500 text-base tabular-nums">{experience.period}</span>
          </div>
          <p className="text-amber-400 font-semibold text-lg mb-4">{experience.company}</p>
          <p className="text-slate-400 section-body mb-6">{experience.summary}</p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-slate-400 text-base">
            {experience.tech.map((t) => (
              <span key={t} className="font-medium">
                {t}
                <span className="text-white/20 ml-2">·</span>
              </span>
            ))}
          </div>

          <ul className="space-y-4">
            {experience.points.map(({ label, text, icon: Icon }) => (
              <li key={label} className="flex gap-4">
                <span className="text-amber-400/80 mt-1 shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <p className="text-slate-400 section-body">
                  <span className="text-slate-300 font-semibold">{label}: </span>
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
