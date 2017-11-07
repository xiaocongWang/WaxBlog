const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  baseUrl: '"http://mock.eolinker.com/dArRZmKa6277f96ea00a15d4141d6f993e0f29d5947e12a?uri="'
})