/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="teal-dark"]'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        'teal-light': {
          primary: '#0d9488',
          'primary-content': '#ffffff',
          secondary: '#5eead4',
          accent: '#ccfbf1',
          neutral: '#134e4a',
          'base-100': '#f0fdfa',
          'base-200': '#ccfbf1',
          'base-300': '#99f6e4',
          'base-content': '#134e4a',
        },
      },
      {
        'teal-dark': {
          primary: '#0d9488',
          'primary-content': '#ffffff',
          secondary: '#0f766e',
          accent: '#134e4a',
          neutral: '#042f2e',
          'base-100': '#042f2e',
          'base-200': '#0d3330',
          'base-300': '#134e4a',
          'base-content': '#ccfbf1',
        },
      },
    ],
  },
}
