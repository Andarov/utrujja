/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'livvic': ['Livvic', 'Arial', 'sans-serif'],
      },
      colors: {
        ut: {
          green: {
            'body': "#014e56",
            'main': "#004047",
            'item': "#012f34",
          },
          blue: {
            'light': "#79c8c7",
          },
        }
      },
      height: {
        '110': '440px'
      }
    },
  },
  plugins: [],
}
