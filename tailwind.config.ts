import type { Config } from 'tailwindcss'
import typographyPlugin from '@tailwindcss/typography'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        main: '3px 5px rgba(0,0,0,0.2)',
      },
      fontSize: {
        xs2: '0.6rem',
      },
    },
  },
  plugins: [typographyPlugin],
} satisfies Config
