// // Loading.js
// import React from "react";

// const Loading = () => (
//   <div className="flex items-center justify-center h-screen">
//     <span className="loading loading-infinity loading-lg"></span>
//   </div>
// );

// export default Loading;

const Loading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 w-[320px] md:w-[600px] lg:w-[1200px] mx-auto py-24 text-white">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:grid-rows-[auto] col-span-4 row-start-1">
        <div className="col-span-1 lg:row-start-1 lg:col-start-1 lg:w-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 lg:row-start-1 aspect-square lg:w-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 aspect-square lg:w-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 aspect-square lg:w-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-[auto] col-span-4 row-start-2">
        <div className="col-span-1 md:row-start-1 lg:row-start-1 aspect-square">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-1 lg:row-start-1 aspect-square">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-2 lg:col-start-3 aspect-rectangle md:order-2 lg:order-2">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 aspect-square md:order-1 lg:order-1">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-3 lg:row-start-2 aspect-square md:order-6">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="md:col-span-2 md:row-start-4 lg:row-start-2 aspect-rectangle md:order-5 ">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-4 lg:grid-rows-[auto] col-span-4 row-start-3">
        <div className="col-span-1 md:col-span-2 md:row-start-1 aspect-square md:aspect-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 lg:col-start-3 aspect-square">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-2 lg:col-start-4 aspect-rectangle">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-3 lg:row-start-2 row-span-1 lg:col-start-1 aspect-square">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 row-span-1 md:col-span-2 md:row-start-4 lg:row-start-2 lg:col-start-2 aspect-square md:aspect-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 lg:grid-rows-[auto] col-span-4 row-start-4">
        <div className="col-span-1 md:col-span-2 md:row-start-1 row-span-1 lg:col-start-1 aspect-square md:aspect-auto">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-1 lg:col-start-3 aspect-square relative">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
        <div className="col-span-1 md:row-start-2 lg:row-start-1 row-span-1 lg:col-start-4 aspect-square">
          <div className="skeletoneff w-full h-full bg-slate-100"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
