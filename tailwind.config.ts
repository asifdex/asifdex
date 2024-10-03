import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        orange: "#ff7849",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        grayDark: " #0E1823",
        darkbg: "#090F15",
        grayborder: "#DCDCDC",
        darktext: "#667D94",
        loadbg: "#9d9d9d",
        darkbox: "#0C1621",
        black: "#000000",
        darkGraytext: "#667D94",
        lightGray: "#A5BBD0",
      },
      screens: {
        smPro: { min: "430px" },
        phone: { max: "500px" },
        minphone: { min: "500px" },
        middlePro: { max: "350px" },
        middllarge: { max: "380px" },
        doublesm: { max: "340px" },
        sm: { min: "640px", max: "767px" },
        mdPro: { min: "640px" },
        esm: { max: "767px" },
        gridBox: { min: "1110px" },
        bigPhone: { max: "770px" },
        md: "768px",
        lg: "1024px",
        sxl: { max: "1020px" },
        xl: "1280px",
        "2xl": "1300px",
        bigPc: { min: "1700px" },
      },

      animation: {
        'gradient-slide': 'gradient-slide 1s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%', // Makes the gradient wide enough to animate
      },
      keyframes: {
        'gradient-slide': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },

      backgroundImage: {
        
        "welcome-l":
        "radial-gradient(at 0% 0%, rgb(255, 255, 255) 0, transparent 50%), radial-gradient(at 50% 0%, rgb(255, 255, 255) 0, transparent 50%), radial-gradient(at 100% 0%, rgb(255, 255, 255) 0, transparent 50%)",
        welcome:
        " radial-gradient(at 0% 0%,hsla(253, 16%, 7%, 1) 0,transparent 50% ),radial-gradient(at 50% 100%, hsla(225, 39%, 25%, 1) 0, transparent 50%)",
        contact:
          " radial-gradient(circle, rgba(36,37,40,1) 0%, rgba(0,0,0,1) 87%, rgba(0,0,0,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
