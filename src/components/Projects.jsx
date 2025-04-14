import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, delay = 0 }) => {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      <h3 className="text-2xl font-bold text-pink-500 mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-gray-700 text-green-400 px-3 py-1 text-sm rounded-full">{t}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    { title: "Portfolio Website", description: "Smooth scroll portfolio with React.", tech: ["React", "Tailwind", "GSAP"] },
    { title: "E-commerce Platform", description: "Full-stack shopping app.", tech: ["Node", "MongoDB", "Express", "React"] },
    { title: "Task Manager", description: "Collaborative task management app.", tech: ["React", "Firebase", "Redux"] },
    { title: "Weather App", description: "Weather data with Chart.js & Geolocation.", tech: ["JS", "Chart.js", "API"] }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-white text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
