class RobotError extends Error {
  constructor(m: string) {
    super(m)
  }
}

export default function createRobotError(msg: string) {
  throw new RobotError(`无量天尊，贫道${msg}`)
}
