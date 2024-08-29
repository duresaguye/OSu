/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       blur: {
        'custom': '8px', // Customize blur level here
      }
    },
    
  },
  plugins: [],
}