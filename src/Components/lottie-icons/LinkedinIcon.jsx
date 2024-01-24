import { useEffect } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/icons/linkedin-icon.json"; // Replace with the actual path

const LinkedinIcon = () => {
  useEffect(() => {
    // Set up the Lottie animation
    const animationContainer = document.getElementById("linkedin-container");

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
      id="linkedin-container"
      className=" rounded-3xl shadow-xl bg-slate-100 flex justify-center items-center"
    ></div>
  );
};

export default LinkedinIcon;
