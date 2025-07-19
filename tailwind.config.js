/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.8125rem', { lineHeight: '1.25rem' }],    // ~13px (was 12px)
        'sm': ['0.9375rem', { lineHeight: '1.375rem' }],   // ~15px (was 14px)
        'base': ['1.075rem', { lineHeight: '1.625rem' }],  // ~17px (was 16px)
        'lg': ['1.2125rem', { lineHeight: '1.75rem' }],    // ~19px (was 18px)
        'xl': ['1.3375rem', { lineHeight: '1.875rem' }],   // ~21px (was 20px)
        '2xl': ['1.6125rem', { lineHeight: '2.125rem' }],  // ~26px (was 24px)
        '3xl': ['2.0125rem', { lineHeight: '2.5rem' }],    // ~32px (was 30px)
        '4xl': ['2.4125rem', { lineHeight: '2.75rem' }],   // ~39px (was 36px)
        '5xl': ['3.225rem', { lineHeight: '1' }],          // ~52px (was 48px)
        '6xl': ['4.0125rem', { lineHeight: '1' }],         // ~64px (was 60px)
        '7xl': ['4.8125rem', { lineHeight: '1' }],         // ~77px (was 72px)
        '8xl': ['6.4375rem', { lineHeight: '1' }],         // ~103px (was 96px)
        '9xl': ['8.0625rem', { lineHeight: '1' }],         // ~129px (was 120px)
      },
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
