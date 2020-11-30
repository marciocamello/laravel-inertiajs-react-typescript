const mix = require('laravel-mix')
const path = require('path')

mix.ts('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')

mix.webpackConfig({
  resolve: {
    alias: {
      ziggy: path.resolve('vendor/tightenco/ziggy/dist/js/route.js')
    }
  }
})
