/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: "0 0 25px #5ddcff, 0 0 50px #4e00c2",
      keyframes: {
        pulsate: {
          "0%": { shadow: "0 0 25px #5ddcff, 0 0 50px #4e00c2" },
        },
      },
    },
  },
  plugins: [],
};
