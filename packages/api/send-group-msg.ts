import type { AxiosPromise } from 'axios'
import request from './index'

export default function sendGroupMsg(response: any, message: string): AxiosPromise {
  const url = '/send_group_msg'
  const groupId = response.group_id
  return request(url, {
    group_id: groupId,
    message,
  })
}
