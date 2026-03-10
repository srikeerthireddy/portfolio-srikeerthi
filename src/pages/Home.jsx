import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import gsap from "gsap";
import profileImg from "../assets/photos/profile2.jpg";

const stats = [
  { value: "4+", label: "Projects" },
  { value: "1", label: "Internship" },
  { value: "6", label: "Certificates" },
];

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const iconsRef = useRef(null);
  const btnRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power3.out" } });
    tl.fromTo(textRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0 })
      .fromTo(imageRef.current, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1 }, "-=0.4")
      .fromTo(iconsRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, "-=0.2")
      .fromTo(btnRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, "-=0.2")
      .fromTo(statsRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, "-=0.3");
    return () => tl.kill();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-16">
        <motion.div
          ref={textRef}
          className="md:max-w-xl space-y-6 text-center md:text-left"
        >
          <p className="section-label mb-3">Full-Stack Engineer</p>
          <h1 className="section-title text-white mb-4 md:mb-5" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.25rem)' }}>
            Hi, I'm <span className="text-amber-400">Y.Sri Keerthi</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
            I build reliable, scalable web applications with a focus on backend architecture, APIs, and cloud infrastructure.
          </p>

          <motion.div
            ref={iconsRef}
            className="flex justify-center md:justify-start gap-4"
          >
            <a
              href="https://www.linkedin.com/in/sri-keerthi-y-519b312a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/srikeerthireddy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/srikeerthireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            ref={btnRef}
            className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="px-6 py-3 rounded-xl bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollTo("resume")}
              className="px-6 py-3 rounded-xl border border-amber-500/50 text-amber-400 font-semibold hover:bg-amber-500/10 transition-colors"
            >
              View Resume
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          ref={imageRef}
          className="flex justify-center md:justify-end shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/30 to-transparent rounded-2xl blur-xl" />
            <img
              src={profileImg}
              alt="Y.Sri Keerthi"
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover border border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={statsRef}
        className="max-w-6xl mx-auto px-4 md:px-8 mt-20 md:mt-24 flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12"
      >
        {stats.map(({ value, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && (
              <span className="hidden md:inline w-px h-12 bg-white/10 rounded-full" aria-hidden />
            )}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-400 tracking-tight">
                {value}
              </p>
              <p className="text-lg md:text-xl text-slate-400 mt-1.5 font-medium">
                {label}
              </p>
            </div>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
