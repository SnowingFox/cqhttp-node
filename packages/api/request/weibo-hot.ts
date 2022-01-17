import { createInstance } from '../index'
import createRobotError from '../../utils/Error'

const instance = createInstance()

instance.interceptors.response.use((response) => {
  if (response.data.toString() === '') {
    createRobotError('拿不到微博热搜数据了')
  }
  return response.data.data
})

export default function getWeiboHot() {
  return instance.get('https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot')
}
