'use strict'
const path = require('path')
const getVueConfig = require('./build/vue-loader.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (dpack, args) {

  const vueLoaderConfig = getVueConfig(args.env);

  dpack.set({
    'entry': {
      app: './src/main.js'
    },
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

  if (args.env === 'production') {
    const filename = args.md5 ? 'static/[name]_[contenthash:7].css' : 'static/[name].css'

    dpack.set("plugins['extract-text-webpack-plugin']", new ExtractTextPlugin({
      filename: filename,
      disable: false,
      allChunks: true
    }))
  }
}