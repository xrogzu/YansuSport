'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  Base_URL:'"http://192.168.0.199:8080/newjspgou/"',
  FILE_URL:'"http://192.168.0.199:8080/newjspgou/"'
})
