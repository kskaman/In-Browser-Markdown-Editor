/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "raven-black": "#151619",
        "onyx-gray": "#1d1f22",
        "charcoal-gray": "#282d31",
        "slate-gray": "#35393f",

        "steel-gray": "#5a6069",
        "pewter-gray": "#7c8187",
        "mist-gray": "#c1c4cb",
        "silver-mist": "#e4e4e4",

        "cloud-white": "#f5f5f5",
        "pure-white": "#ffffff",
        "coral-orange": "#e46643",
        "peach-sunset": "#f39765",
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
