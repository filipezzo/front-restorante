/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-green": "#10b981",
      },
      backgroundColor: {
        "app-bg": "#141414",
      },
    },
  },
  plugins: [],
};
