import { handleBase64Image } from '../utils/utils'
import request from './index'

export default function sendGroupMsg(response: any, message: string, type: 'msg' | 'base64-img' | 'file-img' = 'msg') {
  const url = '/send_group_msg'
  const groupId = response.groupId

  if (type === 'base64-img') {
    message = `[CQ:image,file=${handleBase64Image(message)}]`
  }
  //
  // if (type === 'file-img') {
  //   message = `[CQ:image,file=${message}]`
  // }

  request(url, {
    group_id: groupId,
    message,
  }).catch((err) => {
    console.log(err)
  })
}
