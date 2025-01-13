/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ravenBlack: "#151619",
        onyxGray: "#1d1f22",
        charcoalGray: "282d31",
        slateGray: "#35393f",

        steelGray: "#5a6069",
        pewterGray: "#7c8187",
        mistGray: "c1c4cb",
        silverMist: "#e4e4e4",

        cloudWhite: "#f5f5f5",
        pureWhite: "#ffffff",
        coralOrange: "#e46643",
        peachSunset: "#f39765",
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
