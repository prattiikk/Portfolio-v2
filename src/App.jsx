import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Home from './Pages/Home';

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

  return (
    <div className={`${isDarkMode ? ' bg-gray-800' : 'bg-white'}`}>
      <Home toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

App.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default App;
