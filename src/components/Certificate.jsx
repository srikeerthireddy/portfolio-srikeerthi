import React, { useState } from "react";
import { X, Maximize2 } from "lucide-react";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <div className="w-full">
      {/* Thumbnail */}
      <div
        className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer group"
        onClick={handleOpen}
      >
        <img
          src={ImgSertif}
          alt="Certificate"
          className="w-full h-auto object-cover transition duration-300 filter group-hover:brightness-100 group-hover:contrast-105 group-hover:saturate-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <div className="text-white text-center space-y-2 transform group-hover:-translate-y-1 transition">
            <Maximize2 className="mx-auto w-8 h-8 drop-shadow" />
            <p className="text-lg font-semibold drop-shadow">View Certificate</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-transform hover:scale-110"
              onClick={handleClose}
            >
              <X size={20} />
            </button>
            <img
              src={ImgSertif}
              alt="Full Certificate"
              className="max-w-full max-h-[90vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
