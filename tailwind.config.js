/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "#e6edf3",
        hover: "#0D0D0D",
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.05)",
          "200": "rgba(217, 217, 217, 0.2)",
        },
        white: "#fff",
        darkslategray: {
          "100": "#333",
          "200": "rgba(64, 64, 64, 0.1)",
        },
        aliceblue: "rgba(230, 237, 243, 0.2)",
        gray: {
          "100": "rgba(255, 255, 255, 0.5)",
          "200": "rgba(255, 255, 255, 0.2)",
        },
      },
      spacing: {},
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "6xl": "25px",
        xl: "20px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      "14xl": "33px",
      lg: "18px",
      "29xl": "48px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
