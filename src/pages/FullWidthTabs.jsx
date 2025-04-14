import React, { useState } from "react";
import { Award, Boxes } from "lucide-react";
import Certificate from "../components/Certificate"; // Your existing Certificate component
import TechStackIcon from "../components/TechStackIcon"; // Your existing TechStackIcon component


//tech skills

import HTML from '../assets/tech/html.svg'
import CSS from '../assets/tech/javascript.svg'
import jsImage from '../assets/tech/javascript.svg'
import react from '../assets/tech/reactjs.svg'
import vite from '../assets/tech/vite.svg'
import Tailwind from '../assets/tech/tailwind.svg'
import Node from '../assets/tech/nodejs.svg'


//certificates

import lanC from '../assets/certifictes/one.jpg'
import Excel from '../assets/certifictes/two.jpg'

// Dummy data for demonstration
const dummyCertificates = [
  { name: "Certificate 1", img: lanC }, // Add actual certificate image paths here
  { name: "Certificate 2", img: Excel },
];

const dummyTechStack = [
  { icon: HTML, name: "HTML" },
  { icon: CSS, name: "CSS" },
  { icon: jsImage,  name: "Javascript" }, // Add actual tech stack icons and names
  { icon: "path_to_tech_stack_icon_3.png", name: "Node.js" },
];

const ToggleButton = ({ onClick, isShowingMore }) => (
  <button
    onClick={onClick}
    className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 ease-in-out flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10 hover:border-white/20 backdrop-blur-sm group relative overflow-hidden"
  >
    <span className="relative z-10 flex items-center gap-2">
      {isShowingMore ? "See Less" : "See More"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${
          isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"
        }`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
      </svg>
    </span>
  </button>
);

export default function FullWidthTabs() {
  const [tabIndex, setTabIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleTabChange = (index) => setTabIndex(index);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="w-full h-screen px-4 md:px-10">
        <h1>
        Showcase
        </h1>
      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleTabChange(0)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
            tabIndex === 0 ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Award size={18} /> Certificates
        </button>
        <button
          onClick={() => handleTabChange(1)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${
            tabIndex === 1 ? "bg-white/10 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Boxes size={18} /> Tech Stack
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {tabIndex === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyCertificates.map((cert, idx) => (
              <Certificate key={idx} ImgSertif={cert.img} />
            ))}
          </div>
        )}

        {tabIndex === 1 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
            {dummyTechStack.map((tech, idx) => (
              <TechStackIcon key={idx} TechStackIcon={tech.icon} Language={tech.name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
