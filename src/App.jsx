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
    // Simulate loading time
    const loadingTimeout = setTimeout(() => {
      // Set assetsLoaded to true after loading
      setAssetsLoaded(true);
    }, 2000); // Adjust the timeout based on your actual loading time

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  // Render loading screen while assets are loading
  if (!assetsLoaded) {
    return <Loading />;
  }

  return (
    <div className={`${isDarkMode ? " bg-black" : "bg-white"}`}>
      <Hero toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

App.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default App;
