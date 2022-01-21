import { serverLog } from '../utils/utils'
import sendGroupMsg from '../api/send-group-msg'
import createRobotError from '../utils/Error'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer')

export default async function screenPornIcon(txt: string[]) {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
      width: 1136,
      height: 814,
    })
    await page.goto('https://www.logoly.pro/#/')
    const focus = await page.$('.prefix[data-v-5e2495ac]')
    const prefix = await page.$('.prefix[data-v-1bc936a9]')
    const postfix = await page.$('.postfix[data-v-1bc936a9]')
    for (let i = 0; i < 4; i++) {
      await prefix.press('ArrowRight')
      await prefix.press('Backspace')
    }
    await prefix.type(txt[1])
    for (let i = 0; i < 2; i++) {
      await postfix.press('ArrowRight')
      await postfix.press('Backspace')
    }

    await postfix.type(txt[2])
    await focus.click()
    const el = await page.$('#logo[data-v-1bc936a9]')
    const bufferImg = await el?.screenshot()
    const base64Img = Buffer.from(bufferImg).toString('base64')

    await browser.close()
    serverLog('截图成功')
    return base64Img
  } catch (err) {
    createRobotError(String(err))
  }
}
