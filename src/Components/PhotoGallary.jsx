import img1 from "../assets/images/Gallery/img1.jpeg";
import img2 from "../assets/images/Gallery/img2.jpg";
import img3 from "../assets/images/Gallery/img3.jpg";
import img4 from "../assets/images/Gallery/img4.jpg";
import photosIcon from "../assets/icons/apple-photos.svg";

const PhotoGallery = () => {
  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src={img1}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img2}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img3}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img4}
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
      <img
        src={photosIcon}
        className="absolute top-0 right-0 mt-1 mr-1 w-1/4 h-1/4"
        alt=""
      />
    </div>
  );
};

export default PhotoGallery;
