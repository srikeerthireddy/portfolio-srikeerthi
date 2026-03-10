import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Resume", id: "resume" },
  { name: "Skills", id: "showcase" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean);
      const scrollY = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveId(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setNavOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center relative z-50">
        <button
          onClick={() => scrollTo("home")}
          className="text-xl md:text-2xl font-bold text-white tracking-tight"
        >
          Y.Sri<span className="text-amber-400">Keerthi</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeId === id
                    ? "text-amber-400 bg-amber-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden p-2 text-white rounded-lg hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {navOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: navOpen ? 1 : 0, pointerEvents: navOpen ? "auto" : "none" }}
        className="fixed inset-0 top-0 bg-[#0a0f1a]/98 backdrop-blur-xl md:hidden flex flex-col justify-center items-center gap-6 z-[45]"
      >
        {navItems.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`text-xl font-medium transition-colors ${
              activeId === id ? "text-amber-400" : "text-slate-300 hover:text-white"
            }`}
          >
            {name}
          </button>
        ))}
      </motion.div>
    </motion.nav>
  );
}
