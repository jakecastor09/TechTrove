/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightGray: '#F2F2F2',
        lightGray2: '#F5F5F7',
        green: '#27AB83',
        black: '#1E1E1E',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
