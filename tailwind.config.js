/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          noir: '#0B4F46',
          deep: '#0D6E60',
          dark: '#083B34',
          light: '#169986',
          glow: 'rgba(78, 204, 163, 0.25)'
        },
        mint: {
          glow: '#4ECCA3',
          fresh: '#6EE7B7',
          soft: '#D1F5EA',
          light: '#F0FAF7',
        },
        velvet: {
          copper: '#E07A5F',
          light: '#F4A261',
          soft: '#FDF0EC'
        },
        slate: {
          noir: '#0F172A',
          dark: '#1E293B',
          medium: '#334155',
          muted: '#64748B',
          light: '#94A3B8'
        },
        snow: {
          canvas: '#F8FAF9',
          card: '#FFFFFF',
          bg: '#F1F6F4'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'spine-wave': 'spineWave 3s ease-in-out infinite alternate',
        'orbit-slow': 'orbitSlow 20s linear infinite',
        'gradient-flow': 'gradientFlow 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1deg)' },
        },
        spineWave: {
          '0%': { transform: 'scaleY(0.97) opacity(0.8)' },
          '100%': { transform: 'scaleY(1.03) opacity(1)' },
        },
        orbitSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientFlow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      boxShadow: {
        'glass': '0 20px 45px -15px rgba(11, 79, 70, 0.14)',
        'glass-hover': '0 30px 60px -12px rgba(11, 79, 70, 0.24)',
        'copper-glow': '0 12px 30px -5px rgba(224, 122, 95, 0.45)',
        'emerald-glow': '0 14px 38px -5px rgba(13, 110, 96, 0.42)',
        '3d': '0 25px 50px -12px rgba(15, 23, 42, 0.18)',
      }
    },
  },
  plugins: [],
}
