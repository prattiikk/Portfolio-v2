import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Hero from "./Pages/Hero";
import Loading from "./Components/Loading";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    // localStorage.getItem('isDarkMode') === 'true' || true
    false
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newState = !prev;
      // localStorage.setItem('isDarkMode', newState);
      console.log(isDarkMode);
      return newState;
    });
  };

  useEffect(() => {
    // localStorage.setIktem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setAssetsLoaded(true);
    }, 5000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  // if (!assetsLoaded) {
  //   return <Loading />;
  // }

  return (
    <div className={`${isDarkMode ? " bg-black" : "bg-white"}`}>
      {assetsLoaded ? <Hero toggleDarkMode={toggleDarkMode} /> : <Loading />}
    </div>
  );
}

App.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default App;
