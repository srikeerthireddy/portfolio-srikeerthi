import React from "react";

export default function TechStackIcon({ icon, name }) {
  return (
    <div className="group flex flex-col items-center gap-2 py-2 px-3 rounded-full hover:bg-white/5 transition-colors cursor-default">
      <div className="h-10 w-10 flex justify-center items-center text-slate-400 group-hover:text-amber-400 transition-colors">
        {icon}
      </div>
      <span className="text-slate-500 text-sm font-medium group-hover:text-slate-300 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}
