import React from "react";
import CloudImage from "../assets/images/airplaneScene/cloud.png";
import PlaneImage from "../assets/images/airplaneScene/plane.png";
import PlaneShadowImage from "../assets/images/airplaneScene/planeshadow.png";

const AirplaneScene = () => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit] z-10">
      <img
        src={CloudImage}
        alt="cloud"
        className="absolute w-full opacity-[0.1] brightness-[0.01] animate-moveClouds"
      />
      <div className=" absolute inset-0">
        <img
          src={PlaneImage}
          alt="plane"
          className="w-[30px]  animate-movePlane"
        />
      </div>
      <img
        src={PlaneShadowImage}
        alt="plane shadow"
        className="w-[30px] animate-movePlaneShadow"
      />
      <img
        src={CloudImage}
        alt="cloud"
        className="w-full opacity-80 animate-moveClouds"
      />
    </div>
  );
};

export default AirplaneScene;
