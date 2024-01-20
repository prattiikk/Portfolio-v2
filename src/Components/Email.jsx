// eslint-disable-next-line no-unused-vars
import React from "react";
import profilePic from "../assets/images/profilepic.jpeg";

const Email = () => {
  return (
    <div className=" w-full h-full rounded-3xl bg-slate-100 md:px-8 flex flex-col items-center justify-center">
      <div className=" md:w-4/5">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={profilePic} />
            </div>
          </div>
          <div className="chat-header text-black opacity-40">
            <span className="mx-2">Pratik</span>
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble bg-stone-200 text-black">
            You were the Chosen One!
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end">
          {/* <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div> */}
          <div className="chat-header">
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble bg-blue-500 text-white">
            sounds good 🙏🏻
          </div>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs bg-white"
        />
      </div>
    </div>
  );
};

export default Email;
