class RobotError extends Error {
  constructor(m: string) {
    super(m)
  }
}

export default function createRobotError(msg: string) {
  throw new RobotError(`无量他妈的天尊，${msg}`)
}

export function ErrorTips(err: string): string {
  return `无量他妈的天尊，道爷我歇逼了，${err}`
}
