/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary": "#18C15C",
        "secondary": "#3A6D81",
        "accent": "#1FB2A6",
        "neutral": "#011736",
        "gray1": "#FFFFFFA6",
        "gray2": "#FFFFFFB2",
        "gray3": "#FFFFFFE5",
        "gray4": "#828282",
        "gray5": "#1B1B1C",
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#18C15C",
          secondary: "#3A6D81",
          accent: "#1FB2A6",
          neutral: "#011736",
          gray1: "#FFFFFFA6",
          gray2: "#FFFFFFB2",
          gray3: "#FFFFFFE5",
          gray4: "#828282",
          gray5: "#1B1B1C",
          "base-100": "#012C3B",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
