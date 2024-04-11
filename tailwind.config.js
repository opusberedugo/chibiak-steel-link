/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      red: "#D90404",
      skyblue: "#05DBF2",
      darkblue: "#033E8C",
      black:"#0D0D0D"
    }
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
}

