/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'foodPlaceholder': "url('./Public/Images/Burger.avif')",
      },
    },
  },
  plugins: [],
};
