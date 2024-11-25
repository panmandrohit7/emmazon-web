/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackD: "#121212",
        yellowD: "#e8ad13",
        grayD: "#f2f2f2",
      },
    },
  },
  plugins: [],
}