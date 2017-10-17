'use strict'
const vueLoaderConfig = require('./build/vue-loader.conf')

module.exports = function (dpackCfg) {
  dpackCfg.entry = {
    app: './src/main.js'
  };

  dpackCfg.resolve.extensions.push('.vue');

  dpackCfg.module.rules = dpackCfg.module.rules || [];

  dpackCfg.module.rules.push(
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }
  )
  return dpackCfg;
}