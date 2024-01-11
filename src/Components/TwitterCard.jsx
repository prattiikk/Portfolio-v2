import React from "react";
import TwitterIcon from "./lottie-icons/TwitterIcon";
import profilePic from "../assets/images/profilepic.jpeg";

const TwitterCard = () => {
  return (
    <div className="row-start-3 col-span-1 cursor-pointer rounded-3xl bg-[#f4f2f2] transition duration-500 ease-in-out shadow-2xl hover:bg-[#1DA1F2] aspect-w-1 aspect-h-1">
      <div className="grid grid-rows-4 p-4">
        <div className="row-span-1 flex rounded-3xl">
          <div className="w-1/4 h-full rounded-full overflow-hidden object-cover">
            <img src={profilePic} alt="profile pic" />
          </div>
          <div className="w-2/4 pl-2 h-[90%] flex flex-col justify-center">
            <div className="text-lg text-black">Pratik</div>
            <div className="text-gray-500 text-sm">@_prattiikk</div>
          </div>
          <div className="w-1/4 rounded-xl overflow-hidden">
            <TwitterIcon />
          </div>
        </div>
        <div className="row-span-2 text-black text-xl p-2">
          <span>
            My best ideas always hit me when I'm on the toilet seat, man!
          </span>
        </div>
        <div className="row-span-1 p-2">
          <a
            href="https://twitter.com/_prattiikk"
            target="_blank"
            className="h-full rounded-3xl font-semibold text-black flex justify-center items-center hover:bg-[#1DA1F2] hover:text-white border-2 border-gray-300 transition duration-300 ease-in-out"
          >
            Read mid tweets
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
