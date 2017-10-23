'use strict'
const path = require('path')
const vueLoaderConfig = require('./build/vue-loader.conf')

module.exports = function (dpackCfg) {
  dpackCfg.entry = {
    app: './src/main.js'
  };

  //https://github.com/vuejs-templates/webpack/issues/215
  // to avoid vue warning: You are using the runtime-only build of Vue where the template option is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
  dpackCfg.resolve = dpackCfg.resolve || {};
  dpackCfg.resolve.alias = dpackCfg.resolve.alias || {};
  dpackCfg.resolve.alias.vue$ = 'vue/dist/vue.esm.js';


  dpackCfg.resolveLoader.extensions.push('.vue');

  dpackCfg.module.rules = dpackCfg.module.rules || {};

  dpackCfg.module.rules.lint = {
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [path.resolve('src')],
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  };

  dpackCfg.module.rules.vue = {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
  };

  return dpackCfg;
}