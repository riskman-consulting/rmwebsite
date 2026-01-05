/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",   // 20px → matches px-5
        sm: "2rem",           // 32px → matches px-8
        lg: "3rem",           // 48px → matches px-12
        xl: "3.5rem",         // 56px → matches px-14
        "2xl": "3.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",         // 🔒 hard stop
        "2xl": "1280px",      // 🔒 hard stop
      },
    },

    extend: {
      colors: {
        /* BRAND */
        brandDark: "#001F3F",
        brandNavy: "#003366",
        brandPrimary: "#004080",
        brandLight: "#F5F5F5",
        brandAccent: "#FFC000",
        brandGold: "#FFB800",

        /* THEME */
        bgLight: "#FAFAFA",
        bgDark: "#001122",
        surfaceLight: "#FFFFFF",
        surfaceDark: "#001A33",

        borderLight: "rgba(0, 31, 63, 0.1)",
        borderDark: "rgba(255, 192, 0, 0.15)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};