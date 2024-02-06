import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Hero from "./Pages/Hero";
import Loading from "./Components/Loading";
import { useRecoilValue } from "recoil";
import { isDarkMode } from "./store/Store";

function App() {
  const isDark = useRecoilValue(isDarkMode);

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setAssetsLoaded(true);
    }, 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={`${isDark ? " bg-black" : "bg-white"}`}>
      {assetsLoaded ? <Hero /> : <Loading />}
    </div>
  );
}

App.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default App;
