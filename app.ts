import express from 'express'
import service from './packages/config/service'
import init from './packages/init'

const app = express()

app.listen(service.server.port, () => {
  init()
  console.log(`Example app listening at http://localhost:${service.server.port}`)
})
