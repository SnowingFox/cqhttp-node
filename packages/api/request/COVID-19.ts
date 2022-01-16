import type { AxiosPromise } from 'axios'
import { createInstance } from '../index'

const instance = createInstance()

export default function getCOVID19(): AxiosPromise {
  instance.interceptors.response.use((res) => {
    if (res.data) {
      return res.data.data
    }
    throw new Error('获取新冠数据异常')
  })
  return instance.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total')
}
