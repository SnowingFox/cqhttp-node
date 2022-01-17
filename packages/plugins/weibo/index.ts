// 微博热搜
import { drawWeibo } from '../../helper/canvas'
import sendGroupMsg from '../../api/send-group-msg'
import getWeiboHot from '../../api/request/weibo-hot'

export default function weibo(response: any) {
  if (response.message !== '微博热搜') {
    return
  }

  getWeiboHot().then(async(hotList: any) => {
    const base64Img: string = await drawWeibo(hotList.cards)

    sendGroupMsg(response, base64Img, 'img')
  })
}
