import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Database,
  Sparkles,
  Layers,
  CheckCircle2,
  Code2,
} from "lucide-react";

const wozkuDetails = {
  company: "Wozku Solutions Private Limited",
  role: "Intern — Technology",
  type: "Hybrid · Bangalore",
  period: "June 2026 – Present",
  duration: "12 Months (01.06.2026 – 31.05.2027)",
  stipend: "INR 15,000 / month",
  status: "Ongoing",
  ecosystem: "Martech SaaS Ecosystem",
  summary:
    "Engineering core backend architecture, multi-tenant RBAC, query performance optimization, AI NL-to-SQL reporting pipelines, and containerized microservices for an enterprise Martech SaaS platform.",
  metrics: [
    { label: "Report Page Latency", value: "38s → 0.62s", sub: "98% Performance Improvement", icon: Zap },
    { label: "DataTables Query", value: "9s → 57ms", sub: "Server-side lazy loading & caching", icon: TrendingUp },
    { label: "Architecture", value: "58 Routes", sub: "Monolith refactored to 5 controllers & 4 services", icon: Layers },
    { label: "Security & FinTech", value: "Double-Entry", sub: "Immutable credit ledger & RBAC isolation", icon: ShieldCheck },
  ],
  tech: [
    "Laravel",
    "PHP",
    "MySQL",
    "FastAPI",
    "Python",
    "PyTorch",
    "Hugging Face",
    "Redis",
    "Docker",
    "Kubernetes",
    "Pusher WebSockets",
    "Slack API",
    "Meta Graph API",
  ],
  domains: [
    {
      id: "performance",
      title: "Database & Performance Optimization",
      icon: Database,
      badge: "98% Faster",
      points: [
        "Reports Dashboard Optimization: Identified severe bottlenecks caused by table-wide scans, unoptimized page-view matching, and real-time aggregations. Implemented in-memory ID mapping and scoped split queries, reducing initial page load from 38+ seconds to 0.62 seconds (~98% speedup).",
        "DataTables Server-Side Lazy Loading: Engineered database-level pagination (25 records/batch), server-side sorting, and search filtering for Campaign and Form Reports. Separated heavy summary aggregations into cached endpoints, slashing response time from ~9 seconds to 57 ms.",
        "High-Throughput Metrics: Integrated tracking metrics for Visitor Tracking, Unique Community Members, Unique Advocates, Total Clicks, and Views. Built multi-client dropdown filtering and campaign selection for SuperAdmin reports.",
      ],
    },
    {
      id: "architecture",
      title: "Backend Architecture & Clean Code",
      icon: Code2,
      badge: "58 Routes Refactored",
      points: [
        "Standardized Backend Execution Flow: Architected a clean 9-stage pipeline: Request → Authorization → Validation → Input Prep → Controller → Service/Action → DB/Integration → Error Handling → Response.",
        "Monolithic Controller Refactoring: Deconstructed the monolithic AdminCommunityController into 5 focused single-responsibility controllers and 4 dedicated domain services, standardizing and verifying 58 routes.",
        "Grouped Metadata Architecture: Developed the HasGroupedMetas trait to group scattered meta records into unified JSON structures with full backward compatibility and automated migration via php artisan metas:group.",
        "Dynamic Post Embedding: Implemented EmbedPostController and embed routing for public post URLs, along with an interactive Links Modal supporting direct post links, pinned posts, embed code, and live iframe preview.",
      ],
    },
    {
      id: "rbac",
      title: "Multi-Tenant RBAC & Credit System",
      icon: ShieldCheck,
      badge: "Enterprise Security",
      points: [
        "Sub-Account Workspace Architecture: Designed Admin → Sub-Account hierarchy with secure 7-day expiring tokens and activation/revocation tracking.",
        "Dynamic Context Switching: Implemented SetParentFromSession middleware with wozku_parent_user_id and wozku_acting_user_id, enforcing complete data and permission isolation across client workspaces.",
        "Granular Role Permissions: Defined strict permission matrices across campaigns, forms, and community (Viewer, Admin, Manager), fixing unauthorized delete actions and form visibility synchronization.",
        "Double-Entry SuperAdmin Credit Ledger: Designed a 9-stage clean architecture pipeline featuring an immutable credit ledger, reservation/hold mechanics for async jobs, maker-checker approval workflows, and overdraft protection.",
        "Sub-Account Credit Caps: Implemented Lifetime, Monthly, Quarterly, and Yearly credit limits with 90% threshold alerts and automatic action blocking.",
      ],
    },
    {
      id: "ai",
      title: "AI Reporting & Sarcasm Classification",
      icon: Sparkles,
      badge: "RAG & NL-to-SQL",
      points: [
        "AI Analyst / NL-to-SQL Agent: Engineered the end-to-end reporting flow: User Query → Query Template / RAG → AI Agent → SQL Generation → Self-Correction → Final Answer with query execution guards.",
        "Context & Glossary Engineering: Authored database glossary definitions, relationship mapping, vector embeddings, and multi-turn query rewriting to drastically improve SQL accuracy and eliminate hallucinated columns.",
        "Containerized Sarcasm Detection Microservice: Built and evaluated an inference service using Python, FastAPI, PyTorch, Hugging Face Transformers (mrm8488/t5-base), and Docker, optimizing latency and memory consumption.",
      ],
    },
    {
      id: "integrations",
      title: "Integrations, Contest Integrity & Infra",
      icon: Cpu,
      badge: "WebSockets & Scale",
      points: [
        "Real-Time Check-In Dashboard: Integrated Pusher WebSockets for real-time synchronization of attendee registrations, booth check-ins, and reward statuses with privacy-first search behavior.",
        "Automated Social Queues: Built Slack sharing workflows for contests, campaigns, and forms with instant posting, hourly queues, and Hold & Fire scheduling with unique-member reach deduplication.",
        "Facebook / Meta Graph API: Researched and documented automated Page publishing, Page Access Tokens, webhook synchronization, and App Review compliance.",
        "5-Part Contest Integrity Engine: Designed penalty architecture where point deductions survive leaderboard recalculations, soft-reverts protect community point balances, and permanent audit logs are written to contest_integrity_audit_log.",
        "Kubernetes & Worker Scaling: Researched container orchestration and horizontal worker scaling using Kubernetes pods to resolve Laravel Horizon memory and job queue bottlenecks.",
      ],
    },
  ],
};

const shotgunExperience = {
  company: "ShotGun Fantasy",
  role: "Backend Developer Intern",
  type: "Remote",
  period: "July 2025 – Jan 2026",
  status: "Completed",
  summary:
    "Built and optimized backend services for an NFL Fantasy application, focusing on API reliability, high-concurrency draft workflows, and clean system design.",
  tech: ["Node.js", "Golang", "Express.js", "PostgreSQL", "Redis", "Docker", "REST APIs"],
  points: [
    {
      label: "Performance & Impact",
      text: "Improved API response times and system stability, supporting high-traffic fantasy draft workflows during peak NFL season usage.",
      icon: Zap,
    },
    {
      label: "Key Module Highlights",
      text: "Appreciated for meaningful contributions to the Draft Room module used in live fantasy drafts with real-time state synchronization.",
      icon: Award,
    },
    {
      label: "Engineering Learnings",
      text: "Production-grade backend code, database query optimization, Redis caching strategies, and collaborating within an agile engineering team.",
      icon: BookOpen,
    },
  ],
};

export default function Experience() {
  const [activeDomain, setActiveDomain] = useState("performance");

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      {/* Section Header */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-3"
      >
        Experience
      </motion.p>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-white"
        >
          Work Experience
        </motion.h2>
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          2 Professional Internships · 1 Ongoing
        </motion.span>
      </div>

      <div className="space-y-12">
        {/* ======================================================== */}
        {/* INTERNSHIP 1: Wozku Solutions (Ongoing / Current) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="relative rounded-2xl bg-gradient-to-b from-[#131d2e] to-[#0d1522] border border-amber-500/30 p-6 md:p-9 shadow-[0_0_50px_rgba(245,158,11,0.06)]"
        >
          {/* Top highlight bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {wozkuDetails.status} · 12 Months
              </span>
              <span className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                {wozkuDetails.type}
              </span>
            </div>
          </div>

          {/* Role & Company Header */}
          <div className="mt-6 flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {wozkuDetails.role}
              </h3>
              <p className="text-amber-400 font-semibold text-lg md:text-xl mt-1">
                {wozkuDetails.company}
              </p>
              <p className="text-slate-400 text-sm mt-0.5 font-medium">
                {wozkuDetails.ecosystem}
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm md:text-base font-medium tabular-nums bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
              <Calendar className="w-4 h-4 text-amber-400" />
              {wozkuDetails.period}
            </div>
          </div>

          <p className="text-slate-300 section-body mt-4 max-w-4xl leading-relaxed">
            {wozkuDetails.summary}
          </p>

          {/* Key Metrics Grid */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {wozkuDetails.metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-500/20 transition-colors"
                >
                  <div className="flex items-center gap-2 text-amber-400 mb-1.5">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      {m.label}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-white tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {m.sub}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Technical Domain Deep-Dives Tabs */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Core Contributions & Engineering Domains
              </p>
              <span className="text-xs text-slate-500 hidden sm:inline">
                Click a category to inspect deep-dive technical achievements
              </span>
            </div>

            {/* Tab navigation pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {wozkuDetails.domains.map((dom) => {
                const Icon = dom.icon;
                const isActive = activeDomain === dom.id;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setActiveDomain(dom.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-amber-500 text-slate-900 shadow-md shadow-amber-500/20"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{dom.title}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-slate-900/20 text-slate-900 font-bold"
                          : "bg-amber-400/10 text-amber-300 font-medium"
                      }`}
                    >
                      {dom.badge}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active domain details content */}
            <AnimatePresence mode="wait">
              {wozkuDetails.domains
                .filter((d) => d.id === activeDomain)
                .map((domain) => (
                  <motion.div
                    key={domain.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 md:p-6 rounded-xl bg-black/30 border border-white/10"
                  >
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <domain.icon className="w-5 h-5 text-amber-400" />
                        <h4 className="text-white font-bold text-base md:text-lg">
                          {domain.title}
                        </h4>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
                        {domain.badge}
                      </span>
                    </div>

                    <ul className="space-y-3.5">
                      {domain.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                          <span className="text-amber-400 shrink-0 mt-1.5 font-bold">●</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Tools Mastered at Wozku
            </p>
            <div className="flex flex-wrap gap-2">
              {wozkuDetails.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-white/5 text-slate-300 border border-white/5 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* INTERNSHIP 2: ShotGun Fantasy (Completed) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="relative rounded-2xl bg-[#0d1422] border border-white/10 p-6 md:p-9"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" />
                {shotgunExperience.status}
              </span>
              <span className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400" />
                {shotgunExperience.type}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {shotgunExperience.role}
              </h3>
              <p className="text-amber-400 font-semibold text-lg md:text-xl mt-1">
                {shotgunExperience.company}
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm md:text-base font-medium tabular-nums bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-fit">
              <Calendar className="w-4 h-4 text-amber-400" />
              {shotgunExperience.period}
            </div>
          </div>

          <p className="text-slate-300 section-body mt-4 max-w-4xl leading-relaxed">
            {shotgunExperience.summary}
          </p>

          <div className="mt-8 space-y-4">
            {shotgunExperience.points.map(({ label, text, icon: Icon }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <span className="text-amber-400 mt-0.5 shrink-0 p-2 rounded-lg bg-amber-400/10">
                  <Icon className="w-4 h-4" />
                </span>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  <span className="text-white font-semibold">{label}: </span>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Technologies Used
            </p>
            <div className="flex flex-wrap gap-2">
              {shotgunExperience.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-white/5 text-slate-300 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
