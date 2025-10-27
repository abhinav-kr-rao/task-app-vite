/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        textLarge: {
          from: {
            "background-color": "blueviolet",
          },
          to: {
            "background-color": "aqua",
            padding: "50px",
          },
        },
      },
      animation: {
        "text-large": "textLarge 3s ease 0s normal",
      },
      fontFamily: {
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        // Custom colors from Figma design
        "widget-bg": "#363c43",
        "nav-bg": "#171717",
        "active-tab": "#28292f",
        "inactive-text": "#a3adb2",
        "content-text": "#969696",
        "gradient-start": "#373e44",
        "gradient-end": "#191b1f",
      },
      borderRadius: {
        18.89: "18.89px",
        23: "23px",
      },
      boxShadow: {
        widget: "5.67px 5.67px 3.78px 0px rgba(0,0,0,0.4)",
        "nav-inset": "inset 0px 4.96px 12.4px 2.48px rgba(0,0,0,0.25)",
        "tab-active":
          "-8.433px -16.867px 50.6px -16.867px #485b71, 13.493px 16.867px 67.467px 8.433px #0a0a0a",
        macbook: "10px 10px 40px 10px rgba(0,0,0,0.5)",
        "add-btn":
          "-0.5px -0.5px 6.9px 0px rgba(255,255,255,0.25), 9px 10px 7.1px 0px rgba(0,0,0,0.4)",
        "add-btn-inset":
          "inset 0px 0px 48.906px 0px rgba(255,255,255,0.05), inset 0px 3.26px 3.26px 0px rgba(255,255,255,0.15)",
      },
    },
  },
  plugins: [],
};
