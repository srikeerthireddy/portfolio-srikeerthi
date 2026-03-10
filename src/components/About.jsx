import React from "react";
import { motion } from "framer-motion";
import { Server, Code2, Cloud, Shield, Zap, Layers } from "lucide-react";

const personalStatement =
  "Detail-oriented full-stack engineer focused on developing reliable, scalable, and secure web applications. Strong interest in backend architecture, API development, and cloud infrastructure, with a commitment to continuous learning and delivering meaningful real-world solutions.";

const education = {
  program: "Kalvium's UG program in CS (Software Product Engineering)",
  years: "2023–2027",
  campus: "Apollo University, Chittoor",
  degree: "B.Tech in Software Engineering",
};

const focusAreas = [
  { icon: Server, label: "Backend Architecture", color: "text-amber-400" },
  { icon: Code2, label: "API Development", color: "text-cyan-400" },
  { icon: Cloud, label: "Cloud & DevOps", color: "text-amber-300" },
  { icon: Shield, label: "Secure Systems", color: "text-violet-400" },
  { icon: Zap, label: "Scalable Solutions", color: "text-rose-400" },
  { icon: Layers, label: "Full-Stack Apps", color: "text-sky-400" },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-white mb-12"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <p className="section-label">What I focus on</p>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 py-2.5 px-4 rounded-full text-slate-400 text-base font-medium hover:text-amber-400 hover:bg-white/5 transition-colors"
              >
                <item.icon className={`w-5 h-5 shrink-0 ${item.color}`} />
                {item.label}
              </span>
            ))}
          </div>
          <p className="text-slate-500 section-body italic">
            "Building reliable, scalable, and secure web applications with a focus on backend and APIs."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-6"
        >
          <p className="section-label">Personal Statement</p>
          <p className="text-slate-400 section-body">{personalStatement}</p>
          <div className="pt-8 border-t border-white/10">
            <p className="section-label mb-4">Education</p>
            <p className="text-slate-300 font-semibold text-lg">{education.program}</p>
            <p className="text-slate-500 text-base mt-1">{education.years}</p>
            <p className="text-slate-300 text-lg mt-2">{education.campus}</p>
            <p className="text-slate-500 text-base">{education.degree}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
