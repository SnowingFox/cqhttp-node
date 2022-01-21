import WebSocket from 'ws'
import service from './config/service'
import registerMiddleware from './middleware'

const initWebSocket = () => {
  const ws = new WebSocket(service.server.ws)
  ws.on('message', (response) => {
    const res = JSON.parse(response.toString())
    registerMiddleware(res)
  })
}

export default function init(): void {
  initWebSocket()
}
