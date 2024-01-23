import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem'
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--base)',
        foreground: 'var(--text-base)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--background-highlight)',
          foreground: 'var(--foreground)'
        },
        destructive: {
          DEFAULT: 'var(--essential-negative)',
          foreground: 'var(--foreground)',
          base: 'var(--essential-negative-base)',
          border: 'var(--essential-negative-border)',
          press: 'var(--essential-negative-press)',
          hover: 'var(--essential-negative-hover)'
        },
        muted: {
          DEFAULT: 'var(--background-tinted-base)',
          foreground: '(var(--foreground)'
        },
        accent: {
          DEFAULT: 'var(--background-tinted-base)',
          foreground: 'var(--foreground)'
        },
        popover: {
          DEFAULT: 'var(--background-elevated-base)',
          foreground: 'var(--text-base)'
        },
        card: {
          DEFAULT: 'var(--background-base)',
          foreground: 'var(--text-base)'
        },
        highlight: {
          DEFAULT: 'var(--background-highlight)',
          foreground: 'var(--foreground)'
        },
        press: {
          DEFAULT: 'var(--background-press)',
          foreground: 'var(--foreground)'
        },
        'elevated-base': {
          DEFAULT: 'var(--background-elevated-base)',
          foreground: 'var(--foreground)'
        },
        'elevated-highlight': {
          DEFAULT: 'var(--background-elevated-highlight)',
          foreground: 'var(--foreground)'
        },
        'elevated-press': {
          DEFAULT: 'var(--background-elevated-press)',
          foreground: 'var(--foreground)'
        },
        'tinted-base': {
          DEFAULT: 'var(--background-tinted-base)',
          foreground: 'var(--foreground)'
        },
        'tinted-hover': {
          DEFAULT: 'var(--background-tinted-base)',
          foreground: 'var(--foreground)'
        },
        'tinted-higlight': {
          DEFAULT: 'var(--background-tinted-highlight)',
          foreground: 'var(--foreground)'
        },
        'tinted-higlight-2': {
          DEFAULT: 'var(--background-tinted-highlight-2)',
          foreground: 'var(--foreground)'
        },
        'tinted-higlight-3': {
          DEFAULT: 'var(--background-tinted-highlight-3)',
          foreground: 'var(--foreground)'
        },
        'tinted-press': {
          DEFAULT: 'var(--background-tinted-press)',
          foreground: 'var(--foreground)'
        },
        subdued: {
          DEFAULT: 'var(--essential-subdued)',
          foreground: 'var(--text-subdued)'
        },
        spotify: {
          DEFAULT: 'var(--spotify-bg-base)',
          highlight: 'var(--spotify-bg-highlight)',
          press: 'var(--spotify-bg-press)',
          'elevated-base': 'var(--spotify-bg-elevated-base)',
          'elevated-highlight': 'var(--spotify-bg-elevated-highlight)',
          'elevated-press': 'var(--spotify-bg-elevated-press)',
          'tinted-base': 'var(--spotify-bg-tinted-base)',
          'tinted-highlight': 'var(--spotify-bg-tinted-highlight)',
          'tinted-press': 'var(--spotify-bg-tinted-press)',
          foreground: 'var(--spotify-text-base)',
          inverted: 'var(--spotify-text-inverted)'
        },
        'bright-accent': 'var(--text-bright-accent)',
        invert: {
          DEFAULT: 'var(--inverted-bg-base)',
          highlight: 'var(--inverted-bg-highlight)',
          press: 'var(--inverted-bg-press)',
          'elevated-base': 'var(--inverted-bg-elevated-base)',
          'elevated-highlight': 'var(--inverted-bg-elevated-highlight)',
          'elevated-press': 'var(--inverted-bg-elevated-press)',
          'tinted-base': 'var(--inverted-bg-tinted-base)',
          'tinted-highlight': 'var(--inverted-bg-tinted-highlight)',
          'tinted-press': 'var(--inverted-bg-tinted-press)',
          foreground: 'var(--inverted-text-base)',
          subdued: 'var(--inverted-text-subdued)',
          'bright-accent': 'var(--inverted-text-bright-accent)'
        },
        announcement: {
          DEFAULT: 'var(--announcement-bg-base)',
          highlight: 'var(--announcement-bg-highlight)',
          press: 'var(--announcement-bg-press)',
          'elevated-base': 'var(--announcement-bg-elevated-base)',
          'elevated-highlight': 'var(--announcement-bg-elevated-highlight)',
          'elevated-press': 'var(--announcement-bg-elevated-press)',
          'tinted-base': 'var(--announcement-bg-tinted-base)',
          'tinted-highlight': 'var(--announcement-bg-tinted-highlight)',
          'tinted-press': 'var(--announcement-bg-tinted-press)',
          foreground: 'var(--announcement-text-base)'
        },
        slider: {
          DEFAULT: 'var(--slider-track)',
          range: 'var(--slider-range)',
          thumb: 'var(--slider-thumb)',
          'range-active': 'var(--slider-range-active)'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-down': {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-left': {
          from: { opacity: '0', transform: 'translateX(8px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-right': {
          from: { opacity: '0', transform: 'translateX(-8px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        'scale-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease 0.15s both',
        'accordion-up': 'accordion-up 0.3s ease 0.15s both',
        'fade-in': 'fade-in 0.3s ease 0.15s both',
        'fade-up': 'fade-up 0.3s ease 0.15s both',
        'fade-down': 'fade-down 0.3s ease 0.15s both',
        'fade-left': 'fade-left 0.3s ease 0.15s both',
        'fade-right': 'fade-right 0.3s ease 0.15s both',
        'fade-out': 'fade-out 0.3s ease 0.15s both',
        'scale-in': 'scale-in 0.3s ease 0.15s both',
        'scale-out': 'scale-out 0.3s ease 0.15s both'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
