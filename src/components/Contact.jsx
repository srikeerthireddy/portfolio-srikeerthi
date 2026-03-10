import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

function ContactItem({ icon, title, value, custom }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={custom}
      className="flex items-center gap-5"
    >
      <div className="text-amber-400 text-2xl">{icon}</div>
      <div>
        <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">{title}</p>
        <p className="text-white font-semibold text-lg">{value}</p>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);
    formData.append("access_key", "8e0e171d-4e4c-41ea-863a-0b15f2fbb909");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      setResult("Message sent successfully.");
      e.target.reset();
    } else {
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto px-4 md:px-8 scroll-mt-20">
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        className="section-label mb-3"
      >
        Contact
      </motion.p>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="section-title text-white mb-12"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div className="space-y-8">
          <ContactItem
            icon={<FaEnvelope />}
            title="Email"
            value="srikeerthireddy24@gmail.com"
            custom={2}
          />
          <ContactItem
            icon={<FaMapMarkerAlt />}
            title="Location"
            value="Kadapa, Andhra Pradesh"
            custom={3}
          />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
          >
            <p className="text-white font-semibold text-lg mb-4">Follow me</p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sri-keerthi-y-519b312a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/srikeerthireddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://leetcode.com/u/srikeerthireddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode size={28} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={5}
          onSubmit={onSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-slate-400 text-base font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-slate-400 text-base font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-slate-400 text-base font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder-slate-500 focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 resize-none"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 text-slate-900 font-semibold text-base hover:bg-amber-400 transition-colors"
          >
            Send Message
          </button>
          {result && <p className="text-slate-500 text-base">{result}</p>}
        </motion.form>
      </div>
    </div>
  );
}
