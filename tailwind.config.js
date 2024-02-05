/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#e9e0ff", // Light theme primary color
          secondary: "#2ecc71", // Light theme secondary color
          tertiary: "#e74c3c", // Light theme tertiary color
        },
        dark: {
          primary: "#1a0e36", // Dark theme primary color
          secondary: "#1f282c", // Dark theme secondary color
          tertiary: "#243135", // Dark theme tertiary color
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
