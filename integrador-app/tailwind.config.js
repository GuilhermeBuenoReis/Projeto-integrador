/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '100': '48rem',
        '94' : '22rem',
        '925': '57.813',
      },
      height: {
        '104' : '32.3rem',
        '416' : '32rem'
      }
    },
  },
  plugins: [],
}

