import React, { useEffect, useState } from "react";
import GitIcon from "./lottie-icons/GitIcon";

const GithubCard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/prattiikk");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <p className="cursor-pointer rounded-3xl bg-[#f4f2f2] shadow-2xl  aspect-w-1 aspect-h-1">
        Loading...
      </p>
    );
  }

  if (error) {
    return (
      <p className="cursor-pointer rounded-3xl bg-[#f4f2f2] shadow-2xl  aspect-w-1 aspect-h-1">
        Error: {error}
      </p>
    );
  }

  return (
    <div className="cursor-pointer rounded-3xl bg-[#f4f2f2] shadow-2xl  aspect-w-1 aspect-h-1">
      <div className="grid grid-rows-4 p-4">
        <div className="row-span-1 flex rounded-3xl">
          <div className="w-1/4 h-full rounded-full overflow-hidden object-cover">
            <img src={data.avatar_url} alt="profile pic" />
          </div>
          <div className="w-2/4 pl-2 h-[90%] flex flex-col justify-center">
            <div className="text-lg text-black">{data.name}</div>
            <div className="text-gray-500 text-sm">{data.login}</div>
          </div>
          <div className="w-1/4">
            <GitIcon />
          </div>
        </div>
        <div className="row-span-2 text-black text-lg p-2">
          <span>{data.bio}</span>
        </div>
        <div className="row-span-1 p-2">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full rounded-3xl font-semibold text-black flex justify-center items-center hover:bg-[#1DA1F2] hover:text-white border-2 border-gray-300 transition duration-300 ease-in-out"
          >
            Read mid tweets
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubCard;
