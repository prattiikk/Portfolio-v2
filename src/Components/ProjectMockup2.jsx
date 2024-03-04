// eslint-disable-next-line no-unused-vars
import React from "react";
import rizzApiMockup from "../assets/images/mockups/rizz-api.vercel.app_.png";
const ProjectMockup2 = () => {
  const handleLinkClick = () => {
    window.location.href = "https://example.com";
  };
  return (
    <div className="relative w-full h-[200px] md:h-[290px] overflow-hidden shadow-xl rounded-3xl bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400">
      <div className="w-full h-full object-contain overflow-y-scroll rounded-3xl -rotate-45 hover:rotate-0 translate-x-1/4 hover:translate-x-0 transition-transform duration-500 ease-in-out">
        <img src={rizzApiMockup} alt="project mockup" />
      </div>
      <div className="absolute bottom-0 left-0 mb-2 ml-2">
        <div className="tooltip bg-white p-2 rounded-full text-black">
          <span className="tooltiptext"><a href="https://rizz-api.vercel.app/">rizz-api.vercel.app/</a> </span>
          <a href="#" onClick={handleLinkClick}>
            🌐
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup2;
