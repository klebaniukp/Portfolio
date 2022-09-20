/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class', //dark mode on 'dark' class earlier in the tree
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './pages/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      md: { max: '768px' },
      xsm: { max: '609px' },
      xxsm: { max: '471px' },
      tsm: { max: '430px' }, //turbo small
      xtsm: { max: '400px' }, //next checkpoint 350px
      xxtsm: { max: '350px' }, //next checkpoint x
    },
    extend: {},
  },
  plugins: [],
};
