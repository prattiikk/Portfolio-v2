import Bio from "../Components/Bio";
import ProjectMockup1 from "../Components/ProjectMockup1.jsx";
import AudioPlayer from "../Components/AudioPlayer.jsx";
import Email from "../Components/Email";
import Location from "../Components/Location";
import ModeSwitchBtn from "../Components/ModeSwitchBtn";
import NavButtons from "../Components/NavBtns";
import TwitterCard from "../Components/TwitterCard";
import GitIcon from "../Components/lottie-icons/GitIcon.jsx";
import LinkedinIcon from "../Components/lottie-icons/LinkedinIcon";
import Card from "../Components/Card.jsx";
import ProjectMockup2 from "../Components/ProjectMockup2.jsx";
import ProjectMockup3 from "../Components/ProjectMockup3.jsx";
import WinkinFace from "../Components/lottie-icons/WinkingFace.jsx";
import ContactMe from "../Components/ContactMe.jsx";
import Gallery from "../Components/Gallary.jsx";
// const Home = ({ toggleDarkMode }) => {
//   return (
//     // const { rowStart, rowSpan, colStart, colSpan } = gridSpec;

//     <div
//       className={`grid grid-cols-4 grid-rows-6 gap-6 w-[1200px] mx-auto py-24  text-white `}
//     >
//       {/* row 1 */}

//       {/* <Bio/> */}
//       {/* <NavButtons /> */}
//       {/* <ModeSwitchBtn toggleDarkMode={toggleDarkMode} /> */}

//       <Card gridSpec={{ rowStart: 1, colStart: 1, colSpan: 1 }}>
//         <Bio />
//       </Card>
//       <Card gridSpec={{ rowStart: 1, colSpan: 1 }}>
//         <WinkinFace />
//       </Card>
//       <Card gridSpec={{ rowStart: 1, colSpan: 1 }}>{/* <NavButtons /> */}</Card>
//       <Card gridSpec={{ rowStart: 1, colSpan: 1 }}>
//         {/* <ModeSwitchBtn toggleDarkMode={toggleDarkMode} /> */}
//       </Card>

//       {/* row 2 */}

//       {/* <LinkedInIcon /> */}
//       <Card gridSpec={{ rowStart: 2, colSpan: 1 }}>
//         {/* <LinkedinIcon /> */}
//       </Card>
//       <Card gridSpec={{ rowStart: 2, colSpan: 1 }}>
//         <GitIcon />
//       </Card>

//       <Card gridSpec={{ rowStart: 2, rowSpan: 2, colStart: 3, colSpan: 1 }}>
//         <CV />
//       </Card>
//       <Card gridSpec={{ rowStart: 2, colSpan: 1 }}>
//         <Location />
//       </Card>

//       {/* row 3 */}

//       <Card gridSpec={{ rowStart: 3, colSpan: 2 }}>
//         <ProjectMockup2 />
//       </Card>

//       <Card gridSpec={{ rowStart: 3, colSpan: 1 }}>
//         <TwitterCard />
//       </Card>

//       {/* row 4  */}
//       {/* <div className=" row-start-4 col-span-2  bg-slate-500 rounded-3xl p-4"></div> */}

//       {/* <div className=" row-start-4 col-span-1 row-span-2 bg-slate-500 rounded-3xl p-4">
//         12
//       </div> */}

//       <Card gridSpec={{ rowStart: 4, colSpan: 2 }}>{/* <Email /> */}</Card>
//       <div className=" row-start-4 col-span-1  bg-slate-500 rounded-3xl p-4">
//         11
//       </div>
//       <Card gridSpec={{ rowStart: 4, colSpan: 1, rowSpan: 2 }}>
//         <ProjectMockup3 />
//       </Card>

//       {/* row 5  */}
//       <div className=" row-start-5 col-span-1  bg-slate-500 rounded-3xl p-4">
//         13
//       </div>
//       <div className=" row-start-5 col-span-2  bg-slate-500 rounded-3xl p-4">
//         14
//       </div>

//       {/* row 6  */}

//       <Card gridSpec={{ rowStart: 6, colSpan: 2 }}>
//         <ContactMe />
//       </Card>

//       <Card gridSpec={{ rowStart: 6, colSpan: 1 }}>
//         {/* <Gallery /> */}
//       </Card>
//       <AudioPlayer />
//     </div>
//   );
// };

// export default Home;

const Home = ({ toggleDarkMode }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6 sm:w-[400px] md:w-[600px] lg:w-[1200px] mx-auto py-24 text-white">
      {/* row 1 */}
      <div className="lg:row-start-1 lg:col-start-1 lg:col-span-1">
        <Bio />
      </div>
      <div className="lg:row-start-1 lg:col-span-1">
        <WinkinFace />
      </div>
      <div className=" md:row-start-2 lg:row-start-1 col-span-1">
        {/* <NavButtons /> */}
      </div>
      <div className=" md:row-start-2 lg:row-start-1 col-span-1">
        {/* <ModeSwitchBtn toggleDarkMode={toggleDarkMode} /> */}
      </div>

      {/* row 2 */}
      <div className=" md:row-start-3 lg:row-start-2 col-span-1">
        {/* <LinkedinIcon /> */}
      </div>
      <div className=" md:row-start-3 lg:row-start-2 col-span-1">
        <GitIcon />
      </div>
      <div className=" md:row-start-4 lg:row-start-2 row-span-2 lg:col-start-3 col-span-1">
        <ProjectMockup1 />
      </div>
      <div className=" md:row-start-4 lg:row-start-2 row-span-1 col-span-1">
        <Location />
      </div>

      {/* row 3 */}
      <div className=" md:row-start-6 lg:row-start-3 col-span-2">
        <ProjectMockup2 />
      </div>
      <div className=" md:row-start-7 lg:row-start-3 col-span-1">
        <TwitterCard />
      </div>
    </div>
  );
};

export default Home;

// {/* row 4  */}
// <div className="row-start-4 col-span-2">{/* <Email /> */}</div>
// <div className="row-start-4 col-span-1 bg-slate-500 rounded-3xl p-4">
//   11
// </div>
// <div className="row-start-4 col-span-1 row-span-2">
//   <ProjectMockup3 />
// </div>

// {/* row 5  */}
// <div className="row-start-5 col-span-1 bg-slate-500 rounded-3xl p-4">
//   13
// </div>
// <div className="row-start-5 col-span-2 bg-slate-500 rounded-3xl p-4">
//   14
// </div>

// {/* row 6  */}
// <div className="row-start-6 col-span-2">
//   <ContactMe />
// </div>
// <div className="row-start-6 col-span-1">{/* <Gallery /> */}</div>
// <AudioPlayer />
