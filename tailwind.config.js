/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'rxl': '0 35px 60px -15px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
