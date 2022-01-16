export default function buildMsg(msg: string[]): string {
  let build = ''
  msg.forEach((line) => {
    build += `${line}\n`
  })

  return build
}
