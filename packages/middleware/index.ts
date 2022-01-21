import type { IMiddleware, ITransformGroupMiddleware } from '../utils/types'
import { transformCommands } from '../utils/utils'
import covid19 from '../plugins/covid-19'
import pornhubIcon from '../plugins/pornhub-icon'
import SignIn from '../plugins/sign-in'
import weiboHot from '../plugins/weiboHot'

const Middlewares: IMiddleware = {
  group: [covid19, pornhubIcon, SignIn, weiboHot],
}

export default function registerMiddleware(response: any): void {
  transform(response)
}

function transform(response: any): any {
  // 群消息处理
  if (response.message_type === 'group' || response.request_type === 'group') {
    transformGroup(response)
  }
}

function transformGroup(response: any): void {
  const groupTransformed: ITransformGroupMiddleware = {
    type: 'group',
    time: response.time,
    message: response.message ? transformCommands(response.message) : [],
    subType: response.sub_type,
    postType: response.post_type,
    groupId: response.group_id,
    userId: response.user_id,
    operatorId: response.operator_id,
    noticeType: response.notice_type,
    requestType: response.request_type,
  }
  dispatch(groupTransformed)
}

function dispatch(data: ITransformGroupMiddleware) {
  if (data.type === 'group') {
    Middlewares.group.forEach(group => group(data))
  }
}
