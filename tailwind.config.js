/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        green: {
          50: "#E9F5E9",
          100: "#D4EBD4",
          200: "#A9D7A9",
          300: "#7EC37E",
          400: "#4CAF50",
          500: "#3F9142",
          600: "#327334",
          700: "#265627",
          800: "#193819",
          900: "#0D1C0D",
        },
        purple: {
          50: "#F0EBFD",
          100: "#E1D7FB",
          200: "#C3B0F7",
          300: "#A588F3",
          400: "#7B68EE",
          500: "#5F43EB",
          600: "#4C36BC",
          700: "#39288D",
          800: "#261B5E",
          900: "#130D2F",
        },
      },
    },
  },
  plugins: [],
};
