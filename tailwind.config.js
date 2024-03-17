/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { height: {
      '96': '40rem',
    },width: {
      '96': '40rem',
    }},
  },
  plugins: [],
}

