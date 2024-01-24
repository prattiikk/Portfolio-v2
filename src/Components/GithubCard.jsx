import React from "react";
import GitIcon from "./lottie-icons/GitIcon.jsx";

const GithubCard = () => {
  return (
    <div className="w-full h-full bg-black rounded-3xl shadow-xl relative text-white cursor-pointer hover:text-black hover:bg-white transition-all ease-linear duration-300">
      <div className=" absolute w-[30%] h-[30%] rounded-3xl top-0 right-0 mt-1 mr-1">
        <GitIcon />
      </div>
      <div className="w-[70%] h-1/3  pt-6 pl-6">
        <div className=" text-xl">Pratik</div>
        <div className=" text-sm opacity-60">prattiikk -he/him</div>
      </div>
      <div className=" absolute w-full h-2/3 bottom-0 flex flex-col pt-4 ">
        <p className=" text-3xl pl-6 font-medium"> Checkout my Github.</p>
        <button className=" w-2/3 ml-6 h-8 mt-8 bg-white border-2 border-black text-black rounded-lg">
          Follow
        </button>
      </div>
    </div>
  );
};

export default GithubCard;
