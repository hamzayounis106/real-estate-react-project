/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '680px', // Custom breakpoint for minimum width of 680px
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xs': '550px', // New custom breakpoint for minimum width of 480px
      },
    },
  },
  plugins: [],
};
