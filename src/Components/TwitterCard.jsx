import React from "react";
import TwitterIcon from "./lottie-icons/TwitterIcon";
import profilePic from "../assets/images/profilepic.jpeg";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../store/Store";

const TwitterCard = () => {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <div
      className={`cursor-pointer rounded-3xl  transition duration-500 ease-in-out shadow-xl hover:bg-[#1DA1F2] aspect-w-1 aspect-h-1 ${
        isDark == true ? " bg-slate-900" : "bg-[#f4f2f2]"
      }`}
    >
      <div className="grid grid-rows-4 p-4">
        <div className="row-span-1 flex rounded-3xl">
          <div className="w-1/4 scale-75  h-full rounded-full overflow-hidden object-cover">
            <img src={profilePic} alt="profile pic" />
          </div>
          <div className="w-2/4 pl-2 h-[90%] flex flex-col justify-center">
            <div
              className={`text-lg  ${
                isDark == true ? "text-white" : "text-black"
              }`}
            >
              Pratik
            </div>
            <div className="text-gray-500 text-sm">@_prattiikk</div>
          </div>
          <div className="w-1/4 rounded-xl overflow-hidden">
            <TwitterIcon />
          </div>
        </div>
        <div className={`row-span-2 text-xl p-2`}>
          <span
            className={`${isDark == true ? " text-white" : " text-black"} `}
          >
            {/* Chaos: my favorite coding language. */}
            My best ideas always hit me when I'm on the toilet seat, man!
          </span>
        </div>
        <div className="row-span-1 p-2">
          <a
            href="https://twitter.com/_prattiikk"
            target="_blank"
            className={`h-full rounded-3xl font-semibold  flex justify-center items-center hover:bg-[#1DA1F2] hover:text-white border-2 border-gray-300 transition duration-300 ease-in-out ${
              isDark == true ? " text-white" : "text-black"
            }`}
          >
            Read mid tweets
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
