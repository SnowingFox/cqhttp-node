
import type { ITransformGroupMiddleware } from '../../utils/types'
import screenPornIcon from '../../helper/screen-porn-icon'
import sendGroupMsg from '../../api/send-group-msg'

export default async function pornhubIcon(response: ITransformGroupMiddleware) {
  if (!response.message.length || response.message[0] !== 'ph' || response.message.length !== 3) {
    return
  }
  screenPornIcon(response.message).then((base64Img) => {
    sendGroupMsg(response, base64Img!, 'base64-img')
  }).catch((err) => {
    sendGroupMsg(response, err.toString(), 'msg')
  })
}
