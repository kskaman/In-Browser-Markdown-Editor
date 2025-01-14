/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "palette-1000": "#151619",
        "palette-900": "#1d1f22",
        "palette-800": "#2b2d31",
        "palette-700": "#35393f",

        "palette-600": "#5a6069",
        "palette-500": "#7c8187",
        "palette-400": "#c1c4cb",
        "palette-300": "#e4e4e4",

        "palette-200": "#f5f5f5",
        "palette-100": "#ffffff",
        orange: "#e46643",
        "orange-hover": "#f39765",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        slab: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
