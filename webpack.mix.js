const mix = require('laravel-mix')
const path = require('path')

mix.webpackConfig({
  resolve: {
    alias: {
      ziggy: path.resolve('vendor/tightenco/ziggy/dist')
    }
  }
})

mix.ts('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
