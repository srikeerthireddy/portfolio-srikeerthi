import React from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";

const RESUME_LINK =
  "https://docs.google.com/document/d/1ecD2OV-bwnO1gkEA18e-CCdadk6dZqYz/view?usp=sharing";
const RESUME_PDF_LINK =
  "https://docs.google.com/document/d/1ecD2OV-bwnO1gkEA18e-CCdadk6dZqYz/export?format=pdf";

export default function ResumeSection() {
  return (
    <section id="resume" className="scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-amber-500/15 text-amber-400 shrink-0">
              <FileText className="w-12 h-12 md:w-14 md:h-14" />
            </div>
            <div>
              <p className="section-label mb-3 text-amber-400/90">Resume</p>
              <h2 className="section-title text-white mb-4 md:mb-5">
                Professional Resume
              </h2>
              <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                Experience, skills, education & projects — view or download in one place.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-amber-500 text-slate-900 font-semibold text-base md:text-lg hover:bg-amber-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View Online
            </a>
            <a
              href={RESUME_PDF_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border-2 border-amber-500/50 text-amber-400 font-semibold text-base md:text-lg hover:bg-amber-500/10 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
