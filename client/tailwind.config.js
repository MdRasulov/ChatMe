/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
    },
    container: {
      center: true,
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#3949AB',
      primaryLight: '#4287ff',
      primaryDark: '#00227B',
      gray: '#b2b8c2',
      grayLight: '#e8e8e8',
      grayDark: '#525b6e',
      red: '#ed1c49',
      redDark: '#cc0c36',
      bgLight: '#f2f5f7',
      black: '#252525',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
