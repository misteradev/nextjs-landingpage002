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
        gray1: '#F4F6FC',
        gray2: '#EEF4FA',
        gray3: '#BBBBCB',
        blue1: '#2405F2',
        blue2: '#1C1E53',
        blue3: '#282938',
        yellow1: '#FCD980'
      }
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      padding: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [],
}
