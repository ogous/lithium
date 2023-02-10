/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-lexend)', ...fontFamily.sans]
      },
      colors: {
        layer: '#0b0b0d',
        text: '#d3d7e4',
        primary: '#3d68ff',
        secondary: "#cc40e1"
      }
    },
  },
  plugins: [],
}
