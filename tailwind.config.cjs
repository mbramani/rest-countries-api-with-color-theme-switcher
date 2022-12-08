/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'dm-primary': 'var(--dark-blue)',
      'dm-secondary': 'var(--color-white)',
      'dm-base': 'var(--dm-very-dark-blue)',
      'lm-primary': 'var(--color-white)',
      'lm-secondary': 'var(--lm-very-dark-blue)',
      'lm-base': 'var(--very-light-gray)',
      'lm-dark-gray': 'hsl(0, 0%, 52%)',
    },
    extend: {
      boxShadow: {
        normal: '0 0px 10px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
