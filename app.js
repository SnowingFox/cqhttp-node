const express = require('express')
const service = require('./service/service')
const config = require('./config')
const events = require('./events')
const app = express()

app.listen(config.service.port, () => {
  service.listen(events)
  console.log(`Example app listening at http://localhost:${config.service.port}`)
})