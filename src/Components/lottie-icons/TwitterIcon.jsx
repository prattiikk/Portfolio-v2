import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/twitter-icon.json"; // Replace with the actual path
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../../store/Store";

const TwitterIcon = () => {
  const isDark = useRecoilValue(isDarkMode);
  useEffect(() => {
    // Set up the Lottie animation
    const animationContainer = document.getElementById("twitter-container");

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
      id="twitter-container"
      className=" shadow-md flex justify-center items-center"
    ></div>
  );
};

export default TwitterIcon;
