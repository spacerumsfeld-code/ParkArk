const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'app/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   hero: "url('../public/denaliBackground1.jpeg')",
      // },
      // colors: {
      //   white: '#ffffff',
      //   grey1: '#707989',
      //   grey2: '#59606d',
      //   grey3: '#424751',
      //   green1: '#f0fff3',
      //   green2: '#bdffca',
      // },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
