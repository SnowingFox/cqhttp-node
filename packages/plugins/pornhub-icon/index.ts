import { transformCommands } from '../../utils/utils'
import { drawPh } from '../../helper/canvas'
import sendGroupMsg from '../../api/send-group-msg'
import Tips from '../../utils/Tips'

export default async function pornhubIcon(response: any) {
  const commands = transformCommands(response.message)

  if (commands.length === 0 || commands[0] !== 'ph') {
    return
  }
  const phMsg = commands.filter((msg, index) => index !== 0)
  if (phMsg.length !== 2) {
    sendGroupMsg(response, Tips('连某hub的网站logo有几个字都记不住啦？'))
    return
  }
  const msg = await drawPh(phMsg)
  sendGroupMsg(response, msg, 'img')
}
