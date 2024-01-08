/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:
      {'a7c7f2': '#a7c7f2',
      '1c1f1d': '#1c1f1d',},
      textColor: {
        '000000': '#000000',
        'ffffff': '#ffffff',
      },

      
    },
  },
  plugins: [],
}

