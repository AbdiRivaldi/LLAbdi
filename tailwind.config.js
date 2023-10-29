/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      biru: "#4CADE9",
      white: "#FFFFFF",
      red: "#913831",
      black: "#000000",
      shadow: "#505050",
      fcolor: "#3C4B64",
      bcolor: "#AEB3BC",
      grey: "#7B7B7B",
    },
    // fontSize: {
    //   largest: "20px",
    // },
    // lineHeight: {
    //   largesr: "0", // Tentukan line height jika diperlukan
    // },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      Bahnschrift: ["Bahnschrift", "sans-serif"],
    },
  },
  plugins: [],
};
