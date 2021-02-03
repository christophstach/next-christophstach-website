module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
            100: "#ccedf1",
            200: "#99dbe4",
            300: "#66c9d6",
            400: "#33b7c9",
            500: "#00a5bb",
            600: "#008496",
            700: "#006370",
            800: "#00424b",
            900: "#002125"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
