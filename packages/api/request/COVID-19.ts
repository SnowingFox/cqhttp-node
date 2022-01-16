import type { AxiosPromise } from 'axios'
import { createInstance } from '../index'
import createRobotError from '../../utils/Error'

export function getCOVID19Total(): AxiosPromise {
  const instance = createInstance()
  instance.interceptors.response.use((res) => {
    if (res) {
      return res.data.data
    }

    createRobotError('获取新冠疫情数据异常')
  })
  return instance.get('https://c.m.163.com/ug/api/wuhan/app/data/list-total')
}

export function getCOVID19ByArea(areaCode: string | number): AxiosPromise {
  const instance = createInstance('https://c.m.163.com/ug/api/wuhan/app/data/')
  instance.interceptors.response.use((res) => {
    if (res) {
      return res.data.data
    }
  })

  return instance.get('list-by-area-code', {
    params: {
      areaCode,
      t: Date.now(),
    },
  })
}
