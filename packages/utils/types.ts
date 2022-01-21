export type Fn = (...args: any[]) => void

type Notice = 'group_upload' | 'group_admin' | 'group_decrease' | 'group_increase' | 'group_ban' | 'group_recall'

interface IMiddlewareTransform {
  postType: 'message' | 'notice' | 'request'
  time: number
  noticeType: Notice
}

export interface ITransformGroupMiddleware extends IMiddlewareTransform {
  groupId: number
  userId: number
  type: 'group' | 'else'
  subType: 'leave' | 'kick' | 'kick_me'
  message: string[]
  operatorId?: number
  requestType?: 'group'
}

export interface IMiddleware {
  group: Fn[]
}
