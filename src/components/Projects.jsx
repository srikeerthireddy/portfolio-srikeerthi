import React from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projectsdata';

const ProjectCard = ({ title, description, tech, image, link, delay = 0 }) => (
  <motion.div
    className="relative min-h-80 group overflow-hidden rounded-2xl shadow-xl"
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
  >
    {/* Background image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    {/* Overlay */}
    <div className="absolute  inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-pink-500 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="bg-gray-700 text-green-400 px-3 py-1 text-xs rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[50%] absolute bottom-5 right-5 text-xl font-bold text-center inline-block mt-auto bg-pink-600 text-white px-4 py-3 rounded-2xl  hover:bg-pink-700 transition"
        >
          View Project
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => (
  <div className="min-h-screen w-full  py-24 px-6">
    <div className="max-w-7xl border-3 p-10 mx-auto">
      <motion.h1
        className="text-white text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} delay={i * 0.2} />
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
