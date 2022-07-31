module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist"],
      },
      colors: {
        primary: "#2caf75", //Salsify glass
        secondary: "#06222b", //Stellar explorer
        neutral: "#e9f0e4", //Sweet white
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
