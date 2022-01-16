import type { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import service from '../config/service'

export const createInstance = (baseURL = '', options: AxiosRequestConfig = {}): AxiosInstance => {
  return axios.create({
    baseURL,
    ...options,
  })
}

const instance = createInstance(service.server.http)

export default function request(url: string, params: any): AxiosPromise {
  return instance.get(url, {
    params,
  })
}
