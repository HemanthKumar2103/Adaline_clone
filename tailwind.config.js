/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        meadow: {
          50: 'rgb(var(--meadow-50) / <alpha-value>)',
          500: 'rgb(var(--meadow-500) / <alpha-value>)',
          600: 'rgb(var(--meadow-600) / <alpha-value>)',
          700: 'rgb(var(--meadow-700) / <alpha-value>)',
          900: 'rgb(var(--meadow-900) / <alpha-value>)',
          950: 'rgb(var(--meadow-950) / <alpha-value>)',
        },
        pebble: {
          50: 'rgb(var(--pebble-50) / <alpha-value>)',
          100: 'rgb(var(--pebble-100) / <alpha-value>)',
          200: 'rgb(var(--pebble-200) / <alpha-value>)',
          300: 'rgb(var(--pebble-300) / <alpha-value>)',
          400: 'rgb(var(--pebble-400) / <alpha-value>)',
          500: 'rgb(var(--pebble-500) / <alpha-value>)',
        },
        desert: {
          700: 'rgb(var(--desert-700) / <alpha-value>)',
        },
      },
      spacing: {
        'grid-margin': 'var(--grid-margin)',
        'grid-gutter': 'var(--grid-gutter)',
        'nav-height': 'var(--nav-height)',
      },
      zIndex: {
        '899': '899',
      },
      screens: {
        'max-xs': { 'max': '475px' },
        'min-aspect-16-9': { 'raw': '(min-aspect-ratio: 16/9)' },
      },
    },
  },
  plugins: [],
}
