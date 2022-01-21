import sendGroupMsg from '../../api/send-group-msg'
import getWeiboHot from '../../api/request/weibo-hot'
import type { ITransformGroupMiddleware } from '../../utils/types'
import { drawWeibo } from '../../helper/canvas/weibo-hot'

export default function weiboHot(response: ITransformGroupMiddleware) {
  if (response.message[0] !== '微博热搜') {
    return
  }

  getWeiboHot().then(async(hotList: any) => {
    drawWeibo(hotList.cards).then((base64Img) => {
      sendGroupMsg(response, base64Img, 'base64-img')
    }).catch((err) => {
      sendGroupMsg(response, err.toString(), 'msg')
    })
  })
}
