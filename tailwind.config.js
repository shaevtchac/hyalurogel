/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '394px',
      sm: '530px',
      md: '700px',
      lg: '900px',
      xl: '1280px',
    },

    extend: {
      colors: {
        primary: '#0084d3',
        secondary: 'rgba(160, 213, 245, 0.639)',
        'white-tr': 'rgba(255, 255, 255, 0.839)',
        dark: '#023656',
        accent: '#f08667',
      },

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        bounce1: {
          '0%, 100%': {
            transform: 'translateY(-25%) scale(1,1)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'scale(1.1,.9)',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },

      animation: {
        wiggle: 'wiggle 250ms linear ',
        bounce1: 'bounce1 1s cubic-bezier(0.280, 0.840, 0.420, 1) infinite',
      },
    },
  },

  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
