/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
      "main": ["Inter", "sans-serif"]
      },

      colors: {
        "primary": "#00e594",
        "elux": {
         '100': "#2C8DFF",
         '200': "#0361CF",
        },
        "mh": {
         '100': "#CEC2A2",
         '200': "#D3BB7B",
        },
        "bj": {
         '100': "#D50057",
         '200': "#F13984",
        },
        "ht": {
         '100': "#2C66FC",
         '200': "#0547F0",
        },
        "main": {
          '50': '#edfff8',
          '100': '#d5fff1',
          '200': '#aeffe3',
          '300': '#70ffce',
          '400': '#2bfdb2',
          '500': '#00e594',
          '600': '#00c077',
          '700': '#009661',
          '800': '#06754f',
          '900': '#076043',
          '950': '#003724',
      },
      'dark': {
        '50': '#f5f5f5',
        '100': '#e8e8e8',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#878787',
        '500': '#6e6e6e',
        '600': '#5c5c5c',
        '700': '#4f4f4f',
        '800': '#3d3d3d',
        '900': '#131313',
        '950': '#070707',
    },
    
      },
    },
  },
  plugins: [],
}

