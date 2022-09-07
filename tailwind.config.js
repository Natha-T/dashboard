/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.js",
   "./src/main.js",
   "./src/component/Navbar.js",
   "./src/component/Wallet.js",
   "./src/component/Performer.js",
   "./src/component/Nftss.js",
   "./src/component/Value.js",
   "./src/component/Balancee.js",  
   "./src/component/Donuut.js",  
   "./src/component/Charts.js",  
   "./src/component/Transaction.js",  
    "./src/component/Navmobile.js",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#152e4d',
        'darker': '#12263f',
        'fontA': '#0e7490',
        'fontB': '#155e75',
      },
    },
  },
  plugins: [],
}
