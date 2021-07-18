module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'tablet':'640px',
      'cel': {'max': '400px'}

    },
    extend: {
      colors:{
        brand:{
          light: "#fff",
          DEFAULT: "#7ABEE8",
          dark: "#57ade2",
        },

        'new-blue': '#7ABEE8',
        //override color
        gray:{
          '900': '#ccc',
        }
      },
      spacing: {
        '50':'20rem'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
