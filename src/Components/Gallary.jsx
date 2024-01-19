import React, { useState, useEffect } from "react";
import img1 from "../assets/images/Gallery/img1.jpeg";
import img2 from "../assets/images/Gallery/img2.jpg";
import img3 from "../assets/images/Gallery/img3.jpg";
import img4 from "../assets/images/Gallery/img4.jpg";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the image every 5 seconds (adjust the duration as needed)
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[270px] rounded-2xl overflow-hidden border">
      {/* <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      > */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover rounded-md"
        />
      ))}
      {/* </div> */}
    </div>
  );
};

export default Gallery;
