import express from 'express'
import service from './packages/config/service'
import init from './packages/init'
import { serverLog } from './packages/utils/utils'

const app = express()

app.listen(service.server.port, () => {
  init()
  serverLog(`服务器已在 http://localhost:${service.server.port} 启动`)
})
