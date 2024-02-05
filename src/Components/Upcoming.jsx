import React from "react";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../store/Store";

const Upcoming = () => {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <div
      className={` w-full h-full  rounded-3xl  text-2xl flex justify-center items-center ${
        isDark == true
          ? "  text-white text-opacity-30 bg-dark-primary"
          : "text-gray-400 bg-slate-100 border-dashed border-2  border-slate-300"
      }`}
    >
      working on this .....
    </div>
  );
};

export default Upcoming;
