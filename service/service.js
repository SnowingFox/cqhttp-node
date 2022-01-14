const WebSocket = require('ws')
const config = require('../config')

const ws = new WebSocket(config.service.ws)

module.exports = {
  listen(events = []) {
    try {
      ws.on('message', (response) => {
        const data = JSON.parse(response)
        events.forEach((e) => e(data))
      })
    } catch (e) {
      console.log(e)
    }
  }
}