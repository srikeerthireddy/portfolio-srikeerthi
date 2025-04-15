import React from "react";
import { motion } from "framer-motion";
import Aboutme from "../assets/Aboutme.mp4";

const About = () => {
  return (
    <div className="flex min-h-screen items-center justify-center py-10 px-4 sm:px-8">
      <div className="max-w-6xl w-full flex items-center flex-col md:flex-row bg-gray-800 rounded-3xl p-6 sm:p-10 md:p-12">
        
        {/* Video Section - Hidden on small screens */}
        <div className="hidden md:block w-full md:w-1/2 pr-0 md:pr-8">
          <video
            src={Aboutme}
            autoPlay
            muted
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#F0F4F8] text-center md:text-left mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            I am a passionate{" "}
            <span className="font-semibold text-teal-400">software developer</span>{" "}
            specializing in creating impactful and efficient web applications. I am
            currently pursuing a{" "}
            <span className="font-semibold text-teal-400">
              B.Tech in Software Engineering
            </span>{" "}
            at Apollo University as part of the Kalvium UG program (2023–2027), honing my
            skills in full-stack development and crafting user-friendly experiences.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            My projects include{" "}
            <span className="font-semibold text-teal-400">Calm Corner</span>, a mental
            wellness platform;{" "}
            <span className="font-semibold text-teal-400">Brick Breaker</span>, an arcade
            game; and{" "}
            <span className="font-semibold text-teal-400">Dish Discovery</span>, a recipe
            generator with API integration. I aim to blend{" "}
            <span className="font-semibold text-teal-400">creativity</span> and{" "}
            <span className="font-semibold text-teal-400">innovation</span> to develop
            solutions that enrich lives.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Proficient in{" "}
            <span className="font-semibold text-teal-400">React.js</span>,{" "}
            <span className="font-semibold text-teal-400">Node.js</span>,{" "}
            <span className="font-semibold text-teal-400">MongoDB</span>, and foundational
            languages like{" "}
            <span className="font-semibold text-teal-400">C++</span>,{" "}
            <span className="font-semibold text-teal-400">Java</span>, and{" "}
            <span className="font-semibold text-teal-400">Python</span>, I strive to
            collaborate on projects that create lasting impact.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
