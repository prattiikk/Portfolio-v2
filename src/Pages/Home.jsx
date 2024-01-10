import Bio from "../Components/Bio";
import CV from "../Components/CV";
import Email from "../Components/Email";
import Location from "../Components/Location";
import ModeSwitchBtn from "../Components/ModeSwitchBtn";
import NavButtons from "../Components/NavBtns";
import TwitterIcon from "../Components/lottie-icons/TwitterIcon"
import GitIcon from "../Components/lottie-icons/GitIcon";
import LinkedinIcon from "../Components/lottie-icons/LinkedinIcon";
const Home = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-6 gap-6 w-[1200px] mx-auto my-16 text-white">
            {/* row 1 */}

            <Bio />
            <NavButtons />
            <ModeSwitchBtn />


            {/* row 2 */}

            {/* <LinkedInIcon /> */}
            <LinkedinIcon />
            <GitIcon />

            <CV />
            <Location />


            {/* row 3 */}
            <Email />
            <TwitterIcon />

            {/* row 4 
            <div className=" row-start-4 col-span-2  bg-red-400">10</div>
            <div className=" row-start-4 col-span-1  bg-red-400">11</div>
            <div className=" row-start-4 col-span-1 row-span-2 bg-red-400">12</div>

            {/* row 5 
            <div className=" row-start-5 col-span-1  bg-red-400">13</div>
            <div className=" row-start-5 col-span-2  bg-red-400">14</div>

            {/* row 6 
            <div className=" row-start-6 col-span-2  bg-red-400">15</div>
            <div className=" row-start-6 col-span-1  bg-red-400">16</div>
            <div className=" row-start-6 col-span-1  bg-red-400">17</div>
        */}

        </div>
    );
};

export default Home;
