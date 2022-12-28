/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "50%": { opacity: 0 },
        },
        type: {
          from: { width: 0 },
          to: { width: "100%" },
        },
      },
      animation: {
        blink: "blink 1.2s linear infinite",
        type: "type 0.5s steps(30, end)",
      },
    },
  },
  plugins: [],
};
