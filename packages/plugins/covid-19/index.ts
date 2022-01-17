import { transformCommands } from '../../utils/utils'
import sendGroupMsg from '../../api/send-group-msg'
import Tips from '../../utils/Tips'
import { getCOVID19ByArea } from '../../api/request/COVID-19'
import buildMsg from '../../utils/buildMsg'
import Covid19AreaList from '../../config/covid19-area-list'
import { solarSystem } from '../../utils/surprise'

export default function covid19(response: any) {
  const commands = transformCommands(response.message)
  if (!commands.length) {
    return
  }
  if (commands[0] !== '疫情') {
    return
  }
  if (commands[0] === '疫情' && commands.length === 1) {
    sendGroupMsg(response, Tips('应该这样输入, 疫情 北京，道爷我才好给你最新的消息,tnnd'))
    return
  }
  const areaName = commands[1]

  // 搞点彩蛋

  if (solarSystem.includes(areaName)) {
    sendGroupMsg(response, `想不到你还真有人想知道${areaName}的疫情，笑死道爷我了，这样吧，等你走上修行路，最起码到圣人王境界才能横渡宇宙，前往${areaName}`)
    return
  }

  const idx = Covid19AreaList.findIndex(area => area.name === areaName || area.fullName === areaName)

  if (idx < 0) {
    sendGroupMsg(response, Tips(`说的什么地名？道爷我不知道还有${areaName}这个地方，难不成有古之大帝的墓不成？`))
    return
  }

  const areaCode = Covid19AreaList[idx]?.code

  if (!areaCode) {
    return
  }

  getCOVID19ByArea(areaCode).then((res: any) => {
    const data: any[] = res.list
    const today = data[data.length - 1]
    const message = buildMsg([
      `${areaName}最新疫情情况`,
      `今日新增确诊人数: ${today.today.confirm}`,
      `今日死亡人数: ${today.today.dead}`,
      `今日痊愈人数: ${today.today.heal}`,
      `今日境外输入人数: ${today.today.input}`,
      `总确诊人数: ${today.total.confirm}`,
      `总死亡人数: ${today.total.dead}`,
      `总痊愈人数: ${today.total.heal}`,
      `总境外输入人数: ${today.total.input}`,
      `总死亡率: ${(today.total.dead / (today.total.confirm === 0 ? 1 : today.total.confirm) * 100).toFixed(5)}%`,
    ])

    sendGroupMsg(response, message, 'msg')
  })
}
