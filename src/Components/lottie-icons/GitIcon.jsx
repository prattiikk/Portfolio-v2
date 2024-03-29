import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/github-icon.json";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "../../store/Store";

const GitIcon = () => {
  const isDark = useRecoilValue(isDarkMode);
  useEffect(() => {
    const animationContainer = document.getElementById("lottie-container");
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
    <a
      href="https://github.com/prattiikk/Portfolio-v2.git"
      target="_blank"
      rel="noopener noreferrer"
      id="lottie-container"
      className=" rounded-3xl shadow-xl bg-white flex justify-center items-center"
    ></a>
  );
};

export default GitIcon;
