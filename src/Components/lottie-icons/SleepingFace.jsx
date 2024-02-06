import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/sleepingFace.json";

const SleepingFace = () => {
  useEffect(() => {
    // Set up the Lottie animation
    const animationContainer = document.getElementById("sleep-container");

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
      id="sleep-container"
      className={`rounded-3xl shadow-xl flex justify-center items-center dark-primary`}
    ></div>
  );
};

export default SleepingFace;
