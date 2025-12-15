/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#050505', // Very dark background
        // Overriding default palettes with specific brand colors
        blue: {
          400: '#3FA9FE',
          500: '#0D8DFD', // Brand Blue
          600: '#0270C5',
          900: '#002B4D',
          950: '#001526',
        },
        orange: {
          400: '#E64D42',
          500: '#CB342A', // Brand Orange
          600: '#A32219',
          900: '#4D0F0B',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        scroll: 'scroll 60s linear infinite', 
        'scroll-reverse': 'scroll-reverse 60s linear infinite',
        liquid: 'liquid 15s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        liquid: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
