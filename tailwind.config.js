/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-purple': '10px 15px 10px rgba(110, 0, 136, 0.3)', 
        'custom-orange': '10px 15px 10px rgba(216, 123, 0, 0.3)', 
      }
    },
  },
  plugins: [],
}