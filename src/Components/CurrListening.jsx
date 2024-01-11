import React from "react";

const CurrListening = () => {
  return (
    <div className="row-start-6 col-span-1 flex justify-center items-center overflow-hidden shadow-2xl bg-slate-500 rounded-3xl aspect-w-1 aspect-h-1">
      <iframe
        allow="autoplay *; encrypted-media *; clipboard-write"
        className="w-full h-full object-cover"
        sandbox="allow-forms  allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/in/album/junoon/1606975467?i=1606975597"
      ></iframe>
    </div>
  );
};


export default CurrListening;
