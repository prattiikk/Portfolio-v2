import React from "react";
import GitIcon from "./lottie-icons/GitIcon.jsx";

const GithubCard = () => {
  return (
    <div className="w-full h-full bg-black rounded-3xl shadow-xl relative text-white cursor-pointer p-4 pl-8 md:pl-6 hover:text-black hover:bg-slate-100 transition-all ease-linear duration-300">
      <div className=" absolute w-[30%] h-[30%] rounded-3xl top-0 right-0 mt-6 md:mt-4 mr-6 md:mr-4">
        <GitIcon />
      </div>
      <div className="w-[70%] h-1/3  pt-6 pl-6">
        <div className=" text-xl md:text-xl">Pratik</div>
        <div className=" text-md md:text-sm  opacity-60">prattiikk -he/him</div>
      </div>
      <div className=" absolute w-full h-2/3 bottom-0 flex flex-col pt-6 md:pt-4 ">
        <p className=" text-4xl md:text-3xl pl-6 font-medium">
          Checkout my Github.
        </p>
        <button className="w-[66%] ml-6 h-12 text-lg font-medium mt-8 md:mt-4 bg-slate-100 border-2 border-black text-black rounded-lg">
          Follow
        </button>
      </div>
    </div>
  );
};

export default GithubCard;
