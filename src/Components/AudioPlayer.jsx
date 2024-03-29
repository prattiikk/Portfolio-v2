import React, { useState, useEffect } from "react";

// import audioFile from "../assets/audios/JunoonMitraz.mp3";
import audioFile from "../assets/audios/JannatMitraz.mp3";

import mitraz from "../assets/images/junoonMitraz.webp";
import SpotifyIcon from "./lottie-icons/SpotifyIcon";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../store/Store";

const CustomAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isDark = useRecoilValue(isDarkMode);

  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  useEffect(() => {
    const audioElement = document.getElementById("audioPlayer");

    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div
      className={`w-full h-full flex justify-center items-center overflow-hidden shadow-xl rounded-3xl aspect-w-1 aspect-h-1 ${
        isDark == true ? "dark-primary" : "bg-stone-200 "
      }`}
    >
      <div className="flex flex-col items-center w-full h-full">
        <div className="h-1/2 w-full flex justify-between ">
          <img
            src={mitraz}
            className=" mask mask-squircle h-full w-1/2 mt-2 ml-2"
            alt="song image"
          />
          <div
            className="tooltip tooltip-left w-1/4 mr-4 mt-4"
            data-tip="go to the playlist"
          >
            <SpotifyIcon />
          </div>
        </div>
        <div
          className={`w-full h-1/2 flex flex-col items-center justify-center ${
            isDark == true ? " text-white" : " text-black"
          } `}
        >
          <div className="text-left  w-full py-1 pl-4 mb-2">
            <div className="text-lg font-semibold">
              Current fav &#10084;&#65039; - Jannat
            </div>
            <div className="text-sm opacity-40">Mitraz</div>
          </div>
          <button
            onClick={togglePlay}
            className=" text-xl font-semibold border-none cursor-pointer"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <audio id="audioPlayer" src={audioFile} />
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
