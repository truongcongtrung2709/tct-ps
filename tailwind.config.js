/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0.2 },
          "50%": { opacity: 0.5 },
          "80%": { opacity: 0.8 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "20%": { opacity: 0.8 },
          "50%": { opacity: 0.5 },
          "80%": { opacity: 0.2 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 800ms ease-in-out",
        fadeOut: "fadeOut 800ms ease-in-out",
      },
    },
    colors: {
      "primary-color": "#222831",
      "secondary-color": "#393E46",
      "text-color": "#EEEEEE",
      "button-color": "#00ADB5",
    },
  },
  plugins: [],
};
