module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      width: {
        '65ch': '65ch',
        '100vw': '100vw'
      },
      margin: {
        '-65ch-10': 'calc(-65ch - 2.5rem)',
        '-65ch-12': 'calc(-65ch - 3rem)',
        '-65ch-14': 'calc(-65ch - 3.5rem)',
        '-1px': '-1px',
        '-2px': '-2px',
        '-4px': '-4px',
        '-8px': '-8px',
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '8px': '8px',
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        primary: { // #00bcd4 
          100: "#ccf2f6",
          200: "#99e4ee",
          300: "#66d7e5",
          400: "#33c9dd",
          500: "#00bcd4",
          600: "#0096aa",
          700: "#00717f",
          800: "#004b55",
          900: "#00262a"
        },
        blue: {
          100: "#cedcf6",
          200: "#9dbaee",
          300: "#6d97e5",
          400: "#3c75dd",
          500: "#0b52d4",
          600: "#0942aa",
          700: "#07317f",
          800: "#042155",
          900: "#02102a"
        },
        red: {
          100: "#f6d6d0",
          200: "#eeaca1",
          300: "#e58373",
          400: "#dd5944",
          500: "#d43015",
          600: "#aa2611",
          700: "#7f1d0d",
          800: "#551308",
          900: "#2a0a04"
        },
        orange: {
          100: "#f6ead0",
          200: "#eed5a1",
          300: "#e5c173",
          400: "#ddac44",
          500: "#d49715",
          600: "#aa7911",
          700: "#7f5b0d",
          800: "#553c08",
          900: "#2a1e04"
        },
        green: {
          100: "#cef6e5",
          200: "#9deeca",
          300: "#6de5b0",
          400: "#3cdd95",
          500: "#0bd47b",
          600: "#09aa62",
          700: "#077f4a",
          800: "#045531",
          900: "#022a19"
        },
      },
      linearBorderGradients: {
        directions: { // defaults to these values
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: { // defaults to {}
          'primary': ['#66d7e5', '#004b55'],
        },
      },
      repeatingLinearBorderGradients: theme => ({
        directions: theme('linearBorderGradients.directions'), // defaults to the same values as linearBorderGradients’ directions
        colors: theme('linearBorderGradients.colors'), // defaults to {}
        lengths: { // defaults to {}
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-border-gradients')(),
  ],
}
