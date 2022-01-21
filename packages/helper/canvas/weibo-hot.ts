import { loadImage } from 'canvas'
import { handleBase64Image, transformCommands } from '../../utils/utils'
import { DEFAULT_SIZE, createBaseCanvas } from './index'

export const drawWeibo = (hotList: any[]) => {
  const titleHeight = 200
  const height = titleHeight + 30 * 50
  const { canvas, ctx } = createBaseCanvas({ width: DEFAULT_SIZE.width, height })

  function drawLine() {
    (hotList[0].card_group as any[]).forEach((hot: any, index) => {
      ctx.beginPath()
      ctx.moveTo(0, (index + 1) * 30 + titleHeight)
      ctx.lineTo(DEFAULT_SIZE.width, (index + 1) * 30 + titleHeight)
      ctx.lineWidth = 2
      ctx.font = '14px 微软雅黑'
      ctx.fillText(`${index + 1} ${hot.desc}`, 5, (index + 1) * 30 - 10 + titleHeight)
      const hotRank = {
        tips: '热度',
        rank: '',
      }

      const transformedExtr = transformCommands(String(hot.desc_extr))
      if (transformedExtr.length === 1) {
        hotRank.rank = hot.desc_extr
      }
      if (transformedExtr.length === 2) {
        hotRank.tips = transformedExtr[0]
        hotRank.rank = transformedExtr[1]
      }

      ctx.fillText(`${hotRank.tips}: ${hotRank.rank || ''}`, DEFAULT_SIZE.width - 100, (index + 1) * 30 - 10 + titleHeight)
      ctx.strokeStyle = 'black'
      ctx.stroke()
    })
  }

  return loadImage('public/imgs/weibo.png').then(async(img) => {
    const bg = await loadImage('public/imgs/background.png')
    ctx.drawImage(bg, 0, 0, DEFAULT_SIZE.width, height)
    ctx.drawImage(img, 0, 0, DEFAULT_SIZE.width, titleHeight)
    drawLine()

    const base64 = canvas.toDataURL('image/png')
    return base64
  })
}
