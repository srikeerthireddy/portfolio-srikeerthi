import React from 'react';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import FullWidthTabs from './components/FullWidthTabs';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const App = () => {
  return (
    <div
      id="main"
      className="scroll-smooth bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900 text-white"
    >
      <Navbar />

      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <Home />
      </motion.section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <About />
      </motion.section>

      {/* Showcase Section with bottom padding */}
      <motion.section
        id="showcase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20"   // ✨ changed from mt-16 to padding-y (top and bottom space)
      >
        <FullWidthTabs />
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20"   // ✨ also added padding-y for clean separation
      >
        <Projects />
      </motion.section>

      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="py-20"   // ✨ optional, looks more neat
      >
        <Contact />
      </motion.section>
    </div>
  );
};

export default App;
