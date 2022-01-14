const axios = require('axios')
const config = require('../../config')

const instance = axios.create({
  baseURL: config.service.http,
})

module.exports = function(url, params) {
  return instance.get(url, {
    params,
  })
}