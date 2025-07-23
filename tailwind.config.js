module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lobster)", "cursive"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
