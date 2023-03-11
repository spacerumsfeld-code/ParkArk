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
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
