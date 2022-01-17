import type { Canvas } from 'canvas'
import { createCanvas, loadImage } from 'canvas'
import { handleBase64Image, transformCommands } from '../utils/utils'

const DEFAULT_SIZE = { width: 400, height: 812 }

function createBaseCanvas(size: { width: number; height: number } = DEFAULT_SIZE) {
  const canvas = createCanvas(size.width, size.height)
  const ctx = canvas.getContext('2d')

  return {
    canvas,
    ctx,
  }
}

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

    const base64 = handleBase64Image(canvas.toDataURL('image/png'))
    return base64
  })
}

export const drawPh = async(txt: string[]) => {
  const fontsize = 50
  const height = 200

  const width1 = txt[0].length * fontsize + fontsize
  const width2 = txt[1].length * fontsize

  const rectHeight = fontsize * 2

  const width = width1 + width2 + 100
  const { canvas, ctx } = createBaseCanvas({ width, height })

  const bg = await loadImage('public/imgs/bg-black.png')
  ctx.drawImage(bg, 0, 0, width, height)
  ctx.font = `normal bold ${fontsize}px Robot`
  ctx.fillStyle = 'white'
  ctx.fillText(txt[0], width1 * 2 / 5, fontsize * 0.25 + height / 2)
  ctx.fillStyle = '#FF9900'
  ctx.fillRect(width1, height / 2 - rectHeight / 2, width2, rectHeight)
  ctx.fillStyle = 'black'
  ctx.fillText(txt[1], (width1) + fontsize / 3, fontsize * 0.25 + height / 2)
  const base64 = handleBase64Image(canvas.toDataURL('image/png'))

  return base64
}
