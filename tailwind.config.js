/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      text: ["roboto"],
    },
    extend: {
      backgroundImage: {
        start: "url('../src/assets/startImage.jpg')",
      },
    },
  },
  plugins: [],
};
