import { transformCommands } from '../../utils/utils'
import Covid19Manager from '../../utils/Covid19Manager'

export default function covid19(response: any) {
  const commands: string[] = transformCommands(response.message)
  if (commands.length === 0 || commands[0] !== '疫情') {
    return
  }
  const areaName = commands[1]
  const data = Covid19Manager.getData()
  const idx = data
}
