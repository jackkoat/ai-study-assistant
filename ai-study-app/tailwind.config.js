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
        // Design System Colors
        primary: {
          100: '#E5F2FF',
          500: '#007AFF',
          700: '#0059B2',
        },
        neutral: {
          900: '#1A1D21',
          600: '#5C626C',
          200: '#EAEBEE',
          100: '#F8F9FA',
        },
        'bg-page': '#F3F4F6',
        'bg-surface': '#FFFFFF',
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'section': ['32px', { lineHeight: '1.3', fontWeight: '700' }],
        'card': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-bold': ['16px', { lineHeight: '1.6', fontWeight: '600' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '500' }],
        'button': ['16px', { lineHeight: '1.0', fontWeight: '600' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '64px',
      },
      borderRadius: {
        'md': '12px',
        'lg': '16px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 122, 255, 0.05)',
        'md': '0 4px 12px rgba(0, 122, 255, 0.1)',
        'lg': '0 8px 24px rgba(0, 122, 255, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.25s cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
}