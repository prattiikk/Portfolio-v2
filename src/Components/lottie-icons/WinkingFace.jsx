import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/Cool Icon.json"; // Replace with the actual path

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

  return (
    <div
      id="wink-container"
      className=" rounded-3xl shadow-xl bg-slate-100 flex justify-center items-center"
    ></div>
  );
};

export default WinkinFace;
