import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/winkingFace.json"; // Replace with the actual path
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../../store/Store";

const WinkinFace = () => {
  useEffect(() => {
    // Set up the Lottie animation
    const animationContainer = document.getElementById("wink-container");

    lottie.loadAnimation({
      container: animationContainer,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  const isDark = useRecoilValue(isDarkMode);

  return (
    <div
      id="wink-container"
      className={`rounded-3xl shadow-xl flex justify-center items-center ${
        isDark == true ? "bg-dark-primary text-white" : " bg-light-primary"
      }`}
    ></div>
  );
};

export default WinkinFace;
