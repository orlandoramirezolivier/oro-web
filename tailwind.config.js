/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'],
      },
      colors: {
        oro: {
          DEFAULT: '#FDBF00',
          wash:    '#FFFBEC',
          soft:    '#FFF4CC',
          bright:  '#FFC91A',
          deep:    '#E5AC00',
        },
        ink: {
          DEFAULT: '#000000',
          900:     '#1F1F1F',
          700:     '#4A4A4A',
          600:     '#686868',
          400:     '#9A9A9A',
          300:     '#C8C8C8',
          200:     '#E5E5E5',
          100:     '#F2F2F2',
          50:      '#FBFBF8',
        },
        paper:   '#FFFFFF',
        success: '#1F8A4C',
        warning: '#C77400',
        danger:  '#C8341A',
      },
      borderRadius: {
        'oro-sm': '4px',
        'oro':    '8px',
        'oro-lg': '12px',
      },
    },
  },
  plugins: [],
}
