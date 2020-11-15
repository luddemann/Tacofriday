const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [tailwindcss('./tailwind.full.js'), require('autoprefixer')],
}
