const axios = require('axios')
const config = require('../../../config')

module.exports = (city) => {
  return axios.get(config.request.weather, {
    city
  })
}