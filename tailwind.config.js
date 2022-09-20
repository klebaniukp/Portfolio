/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class', //dark mode on 'dark' class earlier in the tree
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xsm: '320px',
    },
    extend: {},
  },
  plugins: [],
};
