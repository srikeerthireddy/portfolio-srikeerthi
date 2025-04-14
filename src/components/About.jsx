import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-black p-4 sm:p-8 md:p-12 pt-24"
    >
      <div className="max-w-4xl w-full">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="text-lg md:text-xl text-gray-300 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>
            I'm passionate about creating intuitive and engaging user experiences through clean code and 
            innovative design. My expertise lies in web development, with a focus on React, GSAP, and 
            modern CSS techniques.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing my knowledge through technical articles and tutorials.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
