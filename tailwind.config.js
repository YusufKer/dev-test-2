/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio:{
        'banner':'16/6'
      },
      fontSize: {
        h1: ["40px", "1.2"],
        h2: ["32px", "1.2"],
        h3: ["28px", "1.2"],
        h4: ["24px", "1.2"],
        nav: ["20px", "1"],
        banner: ["24px", "1.4"],
        p: ["16px", "1.4"]
      },
      colors:{
        "theme-red": "#881d1d"
      }
    },
    screens: {
      "mobile-large":"540px",
      "tablet": "640px",
      "tablet-large":"768px",
      "laptop": "1024px",
      "full-screen": "1280px"
    }
  },
  plugins: [],
}

