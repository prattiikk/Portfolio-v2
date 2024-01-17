// eslint-disable-next-line no-unused-vars
import React from "react";
import spelltreeMockup from "../assets/images/mockups/spell-tree.vercel.app_(iPhone 12 Pro).png";

const ProjectMockup1 = () => {
  const handleLinkClick = () => {
    // Add the URL you want to navigate to
    window.location.href = "https://example.com";
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden shadow-lg rounded-3xl bg-gradient-to-bl from-pink-300 via-purple-300 to-indigo-400">
      <div className="w-full h-full object-contain overflow-y-scroll  rounded-3xl -rotate-45 hover:rotate-0 translate-x-3/4 hover:translate-x-0 transition-transform duration-500 ease-in-out">
        <img src={spelltreeMockup} alt="project mockup" />
      </div>
      <div className="absolute bottom-0 left-0 mb-2 ml-2 ">
        <div className="tooltip bg-white p-2 rounded-full text-black">
          <span className="tooltiptext">shell-tree.vercell.app </span>
          <a href="#" onClick={handleLinkClick}>
            🌐
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectMockup1;
