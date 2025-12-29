/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B1F3B", // Deep Navy
          steel: "#64748B", // Steel Gray (leans slate)
          mist: "#F6F8FC" // Soft off-white background
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)"
      }
    }
  },
  plugins: []
};