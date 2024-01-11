import React from "react";
import puneLocationImg from "../assets/images/map-pune.png";

const Location = () => {
  return (
    <div className="row-start-2 col-span-1 rounded-3xl relative group cursor-pointer overflow-hidden  aspect-w-1 aspect-h-1">
      <a
        href="https://maps.app.goo.gl/XoozP3hCwNFE3CyP9"
        target="_blank"
        rel="noopener noreferrer"
        className="row-start-2 col-span-1 relative group cursor-pointer overflow-hidden"
      >
        <img
          src={puneLocationImg}
          className="object-cover w-full h-full"
          alt="location"
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>

        {/* Centered text */}
        <span className="absolute  inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-2xl opacity-40">Based</span>
          <span className="text-3xl font-semibold"> Pune, India.</span>
        </span>
      </a>
    </div>
  );
};

export default Location;
