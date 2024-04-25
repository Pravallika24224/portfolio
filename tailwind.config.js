/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/**/*{js,ts,jsx,tsx}",
    "./src/pages/**/*{js,ts,jsx,tsx}",
    "./src/reuseableComponents/**/*{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      robo: ["Roboto Slab", "serif"]
    },
    extend: {},
  },
  plugins: [],
}

