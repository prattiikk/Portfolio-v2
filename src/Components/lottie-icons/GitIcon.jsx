import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/github-icon.json"; 

const GitIcon = () => {
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
  }, []);

  return (
    <a
      href="https://github.com/prattiikk/Portfolio-v2.git"
      target="_blank"
      rel="noopener noreferrer"
      id="lottie-container"
      className="row-start-2 col-span-1 rounded-3xl bg-slate-400 flex justify-center items-center"
    ></a>
  );
};

export default GitIcon;
