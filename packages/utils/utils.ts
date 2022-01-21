export const transformCommands = (str: string) => str.split(' ')

export const handleBase64Image = (base64: string) => {
  return `base64://${base64.replace('data:image/png;base64,', '')}`
}

export const serverLog = (log: string) => console.log(`[Robot] ${log}`)
