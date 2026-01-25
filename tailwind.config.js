/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#6D3F2F',
        },
        secondary: {
          500: '#AA5F35',
        },
        neutral: {
          500: '#E6E4D8',
          600: '#D4D2C6',
        },
        dark: {
          500: '#051926',
        },
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', 'ui-sans-serif', 'system-ui'],
        charlotte: ['var(--font-charlotte)', 'serif'],
      },
    },
  },
  plugins: [],
}
