import React from 'react';

const TechStackIcon = ({ icon, name }) => {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-indigo-500 rounded-full opacity-0 group-hover:opacity-10 blur transition duration-300"></div>
        <div className="relative h-16 w-16 flex justify-center items-center md:h-20 md:w-20 transform transition-transform duration-300">
          {icon}
        </div>
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default TechStackIcon;
