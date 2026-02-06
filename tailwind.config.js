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

      /* ANIMATIONS ADDED BELOW */
      keyframes: {
        dash: {
          'from': { strokeDashoffset: '24' },
          'to': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        evaporate: {
          '0%': { opacity: '0.7', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.05)' },
        },
        pulseCustom: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      animation: {
        dash: 'dash 2s linear infinite',
        float: 'float 3s ease-in-out infinite',
        evaporate: 'evaporate 4s ease-in-out infinite alternate',
        'pulse-custom': 'pulseCustom 3s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};