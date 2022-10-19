let mix = require('laravel-mix')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/asset.js', 'js')
    .vue({version: 3})
    .sass('resources/sass/asset.scss', 'css')
    .nova('yaroslawww/nova-response-dynamic-modal')
