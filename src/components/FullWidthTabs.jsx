import React, { useState } from "react";
import { Award, Boxes, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import Certificate from "./Certificate";
import TechStackIcon from "./TechStackIcon";
import data from "../data/data";

const achievements = [
  "Technology Intern at Wozku Solutions — Architected clean Laravel/PHP services, cut database query latency by 98% (38s → 0.62s), engineered AI/NL-to-SQL reporting & sub-account RBAC.",
  "Backend Developer Intern at ShotGun Fantasy — Scaled high-throughput NFL Fantasy Draft Room APIs using Node.js, Golang, PostgreSQL, and Redis.",
  "AI & Sarcasm Classification Microservices — Fine-tuned T5 models using PyTorch, Hugging Face Transformers, and Dockerized FastAPI endpoints.",
  "Enterprise Architecture & Security — Engineered double-entry immutable credit ledgers, maker-checker approval workflows, and multi-tenant workspace isolation.",
  "Cloud & CI/CD Deployment — Deployed 4+ production full-stack applications with GitHub Actions, Docker, Kubernetes worker scaling, and automated testing.",
];

const tabs = [
  { id: 0, label: "Certificates", icon: Award },
  { id: 1, label: "Tech Stack", icon: Boxes },
  { id: 2, label: "Achievements", icon: Trophy },
];

export default function FullWidthTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Skills & Showcase
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-white mb-10"
      >
        Certificates, Tech & Achievements
      </motion.h2>

      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTabIndex(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-base font-semibold transition-all ${
              tabIndex === tab.id
                ? "bg-amber-500 text-slate-900"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-[300px]">
        {tabIndex === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {data.certificates.map((cert, idx) => (
              <Certificate key={idx} img={cert.img} name={cert.name} />
            ))}
          </motion.div>
        )}

        {tabIndex === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {data.techStack.map((tech, idx) => (
              <TechStackIcon key={idx} icon={tech.icon} name={tech.name} />
            ))}
          </motion.div>
        )}

        {tabIndex === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl space-y-6"
          >
            {achievements.map((item, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-amber-400 shrink-0 mt-1.5 text-lg">●</span>
                <p className="text-slate-400 section-body">{item}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
