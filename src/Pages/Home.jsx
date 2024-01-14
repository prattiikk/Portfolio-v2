import Bio from "../Components/Bio";
import CV from "../Components/CV";
import AudioPlayer from "../Components/AudioPlayer.jsx";
import Email from "../Components/Email";
import Location from "../Components/Location";
import ModeSwitchBtn from "../Components/ModeSwitchBtn";
import NavButtons from "../Components/NavBtns";
import TwitterCard from "../Components/TwitterCard";
import GitIcon from "../Components/lottie-icons/gitIcon.jsx";
import LinkedinIcon from "../Components/lottie-icons/LinkedinIcon";
import Card from "../Components/Card.jsx";
const Home = ({ toggleDarkMode }) => {
  return (
    // const { rowStart, rowSpan, colStart, colSpan } = gridSpec;

    <div
      className={`grid grid-cols-4 grid-rows-6 gap-6 w-[1200px] mx-auto py-16  text-white `}
    >
      {/* row 1 */}

      {/* <Bio/> */}
      {/* <NavButtons /> */}
      {/* <ModeSwitchBtn toggleDarkMode={toggleDarkMode} /> */}

      <Card gridSpec={{ rowStart: 1, colStart: 1, colSpan: 2 }}>
        <Bio />
      </Card>
      <Card gridSpec={{ rowStart: 1, colSpan: 1 }}>
        <NavButtons />
      </Card>
      <Card gridSpec={{ rowStart: 1, colSpan: 1 }}>
        <ModeSwitchBtn toggleDarkMode={toggleDarkMode} />
      </Card>

      {/* row 2 */}

      {/* <LinkedInIcon /> */}
      <LinkedinIcon />
      <GitIcon />

      <CV />
      <Location />

      {/* row 3 */}
      <Email />
      <TwitterCard />

      {/* row 4  */}
      <div className=" row-start-4 col-span-2  bg-slate-500 rounded-3xl p-4">
        10
      </div>
      <div className=" row-start-4 col-span-1  bg-slate-500 rounded-3xl p-4">
        11
      </div>
      <div className=" row-start-4 col-span-1 row-span-2 bg-slate-500 rounded-3xl p-4">
        12
      </div>

      {/* row 5  */}
      <div className=" row-start-5 col-span-1  bg-slate-500 rounded-3xl p-4">
        13
      </div>
      <div className=" row-start-5 col-span-2  bg-slate-500 rounded-3xl p-4">
        14
      </div>

      {/* row 6  */}
      <div className=" row-start-6 col-span-2  bg-slate-500 rounded-3xl p-4">
        15
      </div>
      <div className=" row-start-6 col-span-1  bg-slate-500 rounded-3xl p-4">
        16
      </div>
      <AudioPlayer />
    </div>
  );
};

export default Home;
