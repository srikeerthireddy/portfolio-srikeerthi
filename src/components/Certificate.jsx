import React, { useState } from "react";
import { X, Maximize2 } from "lucide-react";

const Certificate = ({ img, name }) => {
  const [open, setOpen] = useState(false);

  const handleClose = (e) => {
    e?.stopPropagation?.();
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative w-full rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-[#0a0f1a] group"
      >
        <img
          src={img}
          alt={name}
          className="w-full h-auto object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Maximize2 className="w-8 h-8 text-amber-400" />
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={img}
              alt={name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificate;
