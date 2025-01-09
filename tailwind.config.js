/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_port: "#0c0a09",
      },
      fontFamily: {
        titleText: ["Poppins", "sans-serif"],
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "calc(100% + 0.9rem)",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "0%, 100%": {
            borderColor: "text-rose-500",
          },
        },
      },
    },
    animation: {
      typing:
        "typing 4s steps(100, end) infinite alternate 2.6s, blink  infinite",
      spin360: "spin360 .9s ease-in-out",
      "spin-slow": "spin 6s linear infinite",
      "spin-slower": "spin 10s linear infinite",
      spin: "spin 10s linear infinite",
    },
  },
  plugins: [],
};
