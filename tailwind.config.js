const config = {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-green": "#10b981",
        "line-black": "#231f20",
        "line-white": "#d4d4d8",
      },
      backgroundImage: {
        login: "url('/src/view/assets/bg-create-account.jpg')",
      },
      backgroundColor: {
        "app-bg": "#141414",
      },
    },
  },
  plugins: [],
};
export default config;
