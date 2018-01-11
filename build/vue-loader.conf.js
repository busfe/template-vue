'use strict'
const utils = require('./utils')

module.exports = function getVueConfig(env) {
  return {
    loaders: utils.cssLoaders({
      extract: env === 'production',
      env: env
    }),
    transformToRequire: {
      video: 'src',
      source: 'src',
      img: 'src',
      image: 'xlink:href'
    }
  }
}
