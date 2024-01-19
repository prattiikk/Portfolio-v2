import React from "react";
import puneLocationImg from "../assets/images/map-pune3.png";
import { CiLocationArrow1 } from "react-icons/ci";

const Location = () => {
  return (
    <div className="h-full w-full rounded-3xl relative group cursor-pointer overflow-hidden shadow-2xl">
      <a
        href="https://maps.app.goo.gl/XoozP3hCwNFE3CyP9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={puneLocationImg}
          className="object-cover w-full h-full"
          alt="location"
        />

        <span className="absolute  inset-0 flex flex-col items-start justify-end border  text-black">
          <span className="text-sm mb-4 ml-4 py-1 px-2 bg-white rounded-xl flex items-center text-opacity-70 hover:scale-105 duration-300 ease-in">
            <CiLocationArrow1 />
            <span className="pl-1">Pune, India.</span>
          </span>
        </span>
      </a>
    </div>
  );
};

export default Location;
