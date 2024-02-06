import { atom } from "recoil";

// Function to get the mode from local storage or set a default value
const getInitialMode = () => {
  const savedMode = localStorage.getItem("isDarkMode");
  return savedMode !== null ? JSON.parse(savedMode) : false; // Use true as default if no mode is saved
};

export const isDarkMode = atom({
  key: "isDarkMode",
  default: getInitialMode(), // Set the default value from local storage
});

// Function to set the mode in local storage
export const setModeInLocalStorage = (mode) => {
  localStorage.setItem("isDarkMode", JSON.stringify(mode));
};
