import WebSocket from 'ws'
import service from './config/service'
import plugins from './plugins'
import Covid19Manager from './utils/Covid19Manager'
import getCOVID19 from './api/request/COVID-19'

const initWebSocket = () => {
  const ws = new WebSocket(service.server.ws)
  ws.on('message', (response) => {
    const res = JSON.parse(response.toString())
    initCOVID19Data(res)
    if (res.post_type === 'message') {
      plugins.message.forEach(msg => msg(res))
    }
  })
}

const initCOVID19Data = (response: any) => {
  if (Covid19Manager.shouldUpdateData()) {
    getCOVID19().then((res) => {
      Covid19Manager.updateData(res)
    })
  }
}

export default function init(): void {
  initWebSocket()
}
