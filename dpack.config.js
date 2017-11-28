'use strict'
const path = require('path')
const vueLoaderConfig = require('./build/vue-loader.conf')

module.exports = function (dpack, args) {

  dpack.set({
    'entry': './src/main.js',
    //https://github.com/vuejs-templates/webpack/issues/215
    // to avoid vue warning: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    'resolve.alias': {
      'vue$': 'vue/dist/vue.esm.js'
    },
    'module.rules.vue': {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    'module.rules.lint': {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [path.resolve('src')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }
  })

  return dpackCfg;
}