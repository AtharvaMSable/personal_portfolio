/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',      // Clean blue
        secondary: '#64748B',    // Slate gray
        accent: '#059669',       // Emerald green
        dark: '#0F172A',         // Dark text
        light: '#FFFFFF',        // Pure white
        'gray-light': '#F8FAFC', // Very light gray
        'gray-medium': '#E2E8F0', // Medium gray
        'shadow-light': 'rgba(0, 0, 0, 0.05)', // Light shadow
      },
      fontFamily: {
        'primary': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 25px -2px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 15px -3px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 35px -5px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-hover': 'scaleHover 0.3s ease-in-out',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
