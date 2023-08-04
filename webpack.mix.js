// webpack.mix.js

let mix = require('laravel-mix');

mix.disableSuccessNotifications();

// Compile
mix
.js('src/js/bootstrap.js', 'js')
.js('src/js/main.js', 'js')
.js('src/js/drag-gallery.js', 'js')
.js('src/js/multi-carousel.js', 'js')
.js('src/js/video-cols.js', 'js')
.sass('src/scss/main.scss', 'css')
.sass('src/scss/home.scss', 'css')
.sass('src/scss/empreendimento.scss', 'css')
.sass('src/scss/empreendimentos.scss', 'css')
.sass('src/scss/a-nova.scss', 'css')
.sass('src/scss/contato.scss', 'css')
.sass('src/scss/acesso.scss', 'css')
.sass('src/scss/signature.scss', 'css')
.sass('src/scss/bootstrap.scss', 'css')
.setPublicPath('assets');

// Copy bootstrap-icons module
mix.copy('node_modules/bootstrap-icons/font/', 'assets/fonts/bootstrap-icons');

// mix.webpackConfig({
//   stats: {
//       children: true,
//   },
// });