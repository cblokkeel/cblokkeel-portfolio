/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'custom-purple': {
            300: '#B79CED',
            500: '#957FEF',
            700: '#7161EF'
          },
          'cream': '#FFFFED',
          'custom-pink': '#FF85AD'
        }
      },
    },
    plugins: [],
  }