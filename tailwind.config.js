/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F4050',
          dark: '#152D3A',
          light: '#2A5568',
          50: '#E8EEF1',
          100: '#C5D5DC',
          200: '#9FB9C5',
          300: '#789DAE',
          400: '#5A8799',
          500: '#3D7184',
          600: '#2A5568',
          700: '#1F4050',
          800: '#152D3A',
          900: '#0B1C25',
        },
        gold: {
          DEFAULT: '#C6A05F',
          light: '#D4B578',
          dark: '#A8863E',
          50: '#FAF4E8',
          100: '#F0E3C5',
          200: '#E5D0A0',
          300: '#DABD7A',
          400: '#D4B578',
          500: '#C6A05F',
          600: '#A8863E',
          700: '#8B6C26',
          800: '#6D530F',
          900: '#4F3A00',
        },
        charcoal: '#1C2529',
        offwhite: '#F7F7F5',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C6A05F 0%, #D4B578 50%, #A8863E 100%)',
        'navy-gradient': 'linear-gradient(135deg, #1F4050 0%, #152D3A 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(198, 160, 95, 0.25)',
        'navy': '0 4px 24px rgba(31, 64, 80, 0.25)',
        'card': '0 2px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
}
