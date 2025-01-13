module.exports = {
  content: require("fast-glob").sync(
    [
      "source/**/*.{blade.php,blade.md,md,html,vue}",
      "!source/**/_tmp/*", // exclude temporary files
    ],
    { dot: true },
  ),
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        notosans: ["noto-sans", "sans-serif"],
      },
      colors: {
        amber: {
          400: "#ffc107",
          200: "#ffdd78",
        },
        green: { 300: "#8fbc8f" },
        red: { 300: "#ff7f50" },
        white: { 200: "#f5f5dc" },
        blue: {
          200: "#b0e0e6",
          400: "#4682b4",
        },
        black: { 200: "#343434" },
        backgroundImage: {
          hero: "url('/assets/images/hero.jpg')",
        },
      },
    },
  },
  plugins: [],
};
