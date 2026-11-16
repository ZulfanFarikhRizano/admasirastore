/** @type {import('tailwindcss').Config} */
const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;

module.exports = {
  future: { hoverOnlyWhenSupported: true },
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        surface: c("surface"),
        line: c("line"),
        fg: c("fg"),
        body: c("body"),
        muted: c("muted"),
        accent: { DEFAULT: c("accent"), hover: c("accent-hover"), on: c("accent-on") },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
