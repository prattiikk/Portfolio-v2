/* eslint-disable no-unused-vars */
import React from "react";

const NavButtons = () => {
  return (
    <div className="col-span-1  grid grid-cols-2 grid-rows-2 gap-2  aspect-w-1 aspect-h-1 text-2xl font-semibold">
      <button className=" col-span-1 bg-slate-400  rounded-xl hover:scale-105 ease-linear duration-300 ">
        All
      </button>
      <button className=" col-span-1 bg-slate-400  rounded-xl hover:scale-105 ease-linear duration-300">
        Projects
      </button>
      <button className=" col-span-1 bg-slate-400  rounded-xl hover:scale-105 ease-linear duration-300">
        About
      </button>
      <button className=" col-span-1 bg-slate-400  rounded-xl hover:scale-105 ease-linear duration-300">
        Contact
      </button>
    </div>
  );
};

export default NavButtons;
