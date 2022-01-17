import type { AxiosPromise } from 'axios'
import { handleBase64Image } from '../utils/utils'
import request from './index'

export default function sendGroupMsg(response: any, message: string, type: 'msg' | 'img' = 'msg'): AxiosPromise {
  const url = '/send_group_msg'
  const groupId = response.group_id
  console.log(1)
  if (type === 'img') {
    message = `[CQ:image,file=${handleBase64Image(message)}]`
  }

  return request(url, {
    group_id: groupId,
    message,
  })
}
