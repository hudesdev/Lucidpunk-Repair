/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './index.html',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        red: '#E42B2B',
        yellow: '#E5E1A8',
        graySec: '#292C31',
        grayBri: '#676A71',
        graySemi: '#131619'
      },
      fontSize: {
        title: '32px',
        semiTitle: '24px',
        content: '18px'
      }
    },

  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

