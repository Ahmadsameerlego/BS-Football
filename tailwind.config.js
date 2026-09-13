/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pitch: {
          950: '#030708',
          900: '#070B0E',
          850: '#0B1015',
          800: '#11171E',
          700: '#1B242E',
          600: '#2A3644',
          500: '#475569',
        },
        bsgold: {
          300: '#FDE047',
          400: '#EAB308',
          500: '#CA8A04',
          600: '#A16207',
        },
        bsaccent: {
          green: '#10B981',
          lime: '#84CC16',
          cyan: '#06B6D4',
          red: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Cairo', 'Inter', 'sans-serif'],
        arabic: ['Cairo', 'IBM Plex Sans Arabic', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
