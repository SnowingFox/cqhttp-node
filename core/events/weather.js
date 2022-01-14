const { transformMessage } = require('../utils/utils')
const sendGroupMessage = require('../api/send_group_message')
const getWeather = require('../api/request/getWeather')
const axios = require('axios')

module.exports = async (response) => {
  const commands = transformMessage(response.message)

  if (!commands) return

  if (commands.length === 2) {
    const weather = await getWeather(commands[1])
    // sendGroupMessage(response, weather || '1')
    // console.log(response.group_id)
    axios.get(`http://127.0.0.1:5700/send_group_msg`, {
      params: {
        group_id: response.group_id,
        message: commands[1]
      }
    })
  } else if (commands && commands?.length[0] === '天气') {
    sendGroupMessage(response, '请输入城市，如：天气 北京')
  }
}