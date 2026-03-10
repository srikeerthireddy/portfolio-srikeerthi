import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Heart } from "lucide-react";

const links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sri-keerthi-y-519b312a3/", icon: FaLinkedin },
  { name: "GitHub", href: "https://github.com/srikeerthireddy", icon: FaGithub },
  { name: "LeetCode", href: "https://leetcode.com/u/srikeerthireddy/", icon: SiLeetcode },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#070b14] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-400 text-base">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-semibold text-white">Y.Sri Keerthi</span>
          <span className="flex items-center gap-1 text-amber-400/80">
            <Heart className="w-4 h-4 fill-current" /> Portfolio
          </span>
        </div>
        <div className="flex gap-6">
          {["home", "about", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-slate-500 hover:text-amber-400 text-base font-medium capitalize transition-colors"
            >
              {id}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          {links.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-amber-400 transition-colors p-2 rounded-lg hover:bg-white/5"
              aria-label={name}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
