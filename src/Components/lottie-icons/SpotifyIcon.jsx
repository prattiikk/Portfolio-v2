import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/spotify-icon.json";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../../store/Store";

const spotifyIcon = () => {
  const isDark = useRecoilValue(isDarkMode);
  useEffect(() => {
    const animationContainer = document.getElementById("spotify-container");

    lottie.loadAnimation({
      container: animationContainer,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      lottie.destroy();
    };
  }, [isDark]);

  return (
    <div
      id="spotify-container"
      className=" shadow-md rounded-xl flex justify-center items-center"
    ></div>
  );
};

export default spotifyIcon;
