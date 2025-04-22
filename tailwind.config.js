/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'weather-primary': '#60A5FA',
        'weather-secondary': '#FBBF24',
        'weather-accent': '#F97316',
        'weather-success': '#10B981',
        'weather-warning': '#F59E0B',
        'weather-error': '#EF4444',
        'weather-light': '#F3F4F6',
        'weather-dark': '#1F2937',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'clear-sky': "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        'cloudy-sky': "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80')",
        'rainy-sky': "url('https://images.unsplash.com/photo-1501691223387-dd0500403074?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        'snowy-sky': "url('https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        'stormy-sky': "url('https://images.unsplash.com/photo-1562948832-20c82918e92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      }
    },
  },
  plugins: [],
}