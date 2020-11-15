module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['"Montserrat Alternates"'],
        body: ['"Open Sans"'],
      },
      screens: {
        container: '1140px',
      },
      fontSize: {
        '8xl': '6rem',
      },
      inset: {
        '-24': '-6rem',
      },
      height: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      colors: {
        skyblue: '#5B81B1',
      },
    },
  },
  variants: {},
  plugins: [],
}
