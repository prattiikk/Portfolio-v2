import Bio from "../Components/Bio";
import ProjectMockup1 from "../Components/ProjectMockup1.jsx";
import AudioPlayer from "../Components/AudioPlayer.jsx";
import ContactForm from "../Components/ContactForm.jsx";
import Location from "../Components/Location";
import ModeSwitchBtn from "../Components/ModeSwitchBtn";
import NavButtons from "../Components/NavBtns";
import TwitterCard from "../Components/TwitterCard";
import GitIcon from "../Components/lottie-icons/GitIcon.jsx";
import LinkedinIcon from "../Components/lottie-icons/LinkedinIcon";
import ProjectMockup2 from "../Components/ProjectMockup2.jsx";
import ProjectMockup3 from "../Components/ProjectMockup3.jsx";
import WinkinFace from "../Components/lottie-icons/WinkingFace.jsx";
import PhotoGallery from "../Components/PhotoGallary.jsx";
import Upcoming from "../Components/Upcoming.jsx";

const Hero = ({ toggleDarkMode }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-[320px] md:w-[600px] lg:w-[1200px] mx-auto py-24 text-white">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-[auto] col-span-4 row-start-1">
        <div className="col-span-1 lg:row-start-1 lg:col-start-1 lg:w-auto">
          <Bio />
        </div>
        <div className="col-span-1 lg:row-start-1 aspect-square lg:w-auto">
          <WinkinFace />
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 aspect-square lg:w-auto">
          {/* <NavButtons /> */}
          <Upcoming />
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 aspect-square lg:w-auto">
          <ModeSwitchBtn toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      {/* row 2 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-[auto] col-span-4 row-start-2">
        <div className="col-span-1 md:row-start-1 lg:row-start-1 aspect-square">
          <LinkedinIcon />
        </div>
        <div className="col-span-1 md:row-start-1 lg:row-start-1 aspect-square">
          <GitIcon />
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-2 lg:col-start-3 aspect-rectangle md:order-2 lg:order-2">
          <ProjectMockup1 />
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 aspect-square md:order-1 lg:order-1">
          <Location />
        </div>
        <div className="col-span-1 md:row-start-3 lg:row-start-2 aspect-square md:order-6">
          <TwitterCard />
        </div>
        <div className="md:col-span-2 md:row-start-4 lg:row-start-2 aspect-rectangle md:order-5 ">
          <ProjectMockup2 />
        </div>
      </div>

      {/* row 3 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-[auto] col-span-4 row-start-3">
        <div className="col-span-1 md:col-span-2 md:row-start-1 aspect-square md:aspect-auto">
          <Upcoming />
        </div>

        <div className="col-span-1 md:row-start-2 lg:row-start-1 lg:col-start-3 aspect-square">
          <Upcoming />
        </div>

        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-2 lg:col-start-4 aspect-rectangle">
          <ProjectMockup3 />
        </div>

        <div className="col-span-1 md:row-start-3 lg:row-start-2 row-span-1 lg:col-start-1 aspect-square">
          <Upcoming />
        </div>

        <div className="col-span-1 row-span-1 md:col-span-2 md:row-start-4 lg:row-start-2 lg:col-start-2 aspect-square md:aspect-auto">
          <Upcoming />
        </div>
      </div>

      {/* row 4 */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 lg:grid-rows-[auto] col-span-4 row-start-4">
        <div className="col-span-1 md:col-span-2 md:row-start-1 row-span-1 lg:col-start-1 aspect-square md:aspect-auto">
          <ContactForm />
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-1 lg:col-start-3 aspect-square relative">
          <PhotoGallery />
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-1 lg:col-start-4 aspect-square">
          <AudioPlayer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
