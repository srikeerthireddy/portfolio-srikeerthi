import React from "react";
import Home from "./pages/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ResumeSection from "./components/ResumeSection";
import FullWidthTabs from "./components/FullWidthTabs";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const App = () => {
  return (
    <div
      id="main"
      className="scroll-smooth text-[var(--text-primary)] min-h-screen"
    >
      <ScrollProgress />
      <Navbar />

      {/* Home – darkest */}
      <motion.section
        id="home"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#0a0f1a]"
      >
        <Home />
      </motion.section>

      {/* About – subtle band */}
      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 bg-[#0d1321]"
      >
        <About />
      </motion.section>

      {/* Experience */}
      <motion.section
        id="experience"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 bg-[#0a0f1a]"
      >
        <Experience />
      </motion.section>

      {/* Resume – warm accent band, big typography */}
      <motion.section
        id="resume"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 bg-[#131c2b]"
      >
        <ResumeSection />
      </motion.section>

      {/* Showcase / Skills */}
      <motion.section
        id="showcase"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 bg-[#0f172a]"
      >
        <FullWidthTabs />
      </motion.section>

      {/* Projects */}
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 bg-[#0d1321]"
      >
        <Projects />
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 md:py-28 bg-[#0a0f1a]"
      >
        <Contact />
      </motion.section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
