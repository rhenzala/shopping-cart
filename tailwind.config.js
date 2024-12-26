/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f8fafc',
      'black': '#020617',
      'red': '#dc2626',
    },
    extend: {},
  },
  plugins: [],
}

