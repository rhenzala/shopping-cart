/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f8fafc",
      black: "#020617",
      red: "#dc2626",
      blue: "#3b82f6",
    },
    extend: {
      screens: {
        "custom-md": { max: "768px" },
      },
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.2)",
        lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
        xl: "0 2px 15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    },
  ],
};
