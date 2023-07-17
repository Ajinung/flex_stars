/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to right, #8B5CF6, #EC4899)",
      },
    },
  },
  plugins: [],
};
