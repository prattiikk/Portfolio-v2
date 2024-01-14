import pixarCharacter from "../assets/images/dp.png";

const Bio = () => {
  return (
    // <div className="col-span-2 h-[260px] flex flex-col ">
    <div className="w-full h-full border border-white flex flex-col ">
      <div className="w-1/2 p-4 flex flex-col items-start justify-center">
        {/* <div className="h-[150px] w-[150px] border-4 border-black rounded-full overflow-hidden flex justify-center items-center">
          <img
            src={pixarCharacter}
            className=" object-contain w-full h-full motion-safe:animate-spin"
            alt=""
          />
        </div> */}
        <span className=" text-4xl text-black font-bold tracking-tight  mt-6">
          Pratik
        </span>
        <span className=" text-xl text-black font-normal tracking-tight text- w-full mt-2 opacity-50">
          I try to build websites.
        </span>
      </div>
    </div>
  );
};

export default Bio;
