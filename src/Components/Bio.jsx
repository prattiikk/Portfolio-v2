import { useRecoilValue } from "recoil";
import { isDarkMode } from "../store/Store";

const Bio = () => {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <div
      className={`w-full h-full flex flex-col items-start  rounded-3xl shadow-xl pt-16 p-12 ${
        isDark == true ? " bg-dark-primary text-white" : " bg-light-primary text-black"
      }`}
    >
      <h1 className=" text-purple-500 rounded-full text-4xl font-bold text-start ">
        Pratik
      </h1>
      <p className=" text-lg graphik mt-4 text-gray-600 opacity-70">
        Student | Web Developer | India | Finds joy in music 🎶 and anime
      </p>
    </div>
  );
};

export default Bio;
