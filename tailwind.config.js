
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sunrise: {
          orange: '#FF8A00',
          yellow: '#FFD200',
          navy: '#0B2B5B',
          steel: '#1A53A1',
          white: '#F8F9FA',
          slate: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
