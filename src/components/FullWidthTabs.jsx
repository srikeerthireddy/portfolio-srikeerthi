import React, { useState } from "react";
import { Award, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import Certificate from "./Certificate";
import TechStackIcon from "./TechStackIcon";
import data from "../data/data";

export default function FullWidthTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => setTabIndex(index);

  return (
    <div className="w-full  pt-20 min-h-200 md:h-screen px-4 md:px-10">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-center text-4xl py-5 font-bold mb-6"
      >
        My Creative Showcase
      </motion.h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleTabChange(0)}
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md transition ${
            tabIndex === 0
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Award size={18} /> Certificates
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md transition ${
            tabIndex === 1
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Boxes size={18} /> Tech Stack
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {tabIndex === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.certificates.map((cert, idx) => (
              <Certificate key={idx} img={cert.img} name={cert.name} />
            ))}
          </div>
        )}

        {tabIndex === 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
            {data.techStack.map((tech, idx) => (
              <TechStackIcon
                key={idx}
                icon={tech.icon}
                name={tech.name}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
