'use strict'
const path = require('path')
const vueLoaderConfig = require('./build/vue-loader.conf')

module.exports = function (dpackCfg) {
  dpackCfg.entry = {
    app: './src/main.js'
  };

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