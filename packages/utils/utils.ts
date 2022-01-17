export const transformCommands = (str: string) => str.split(' ')

export const handleBase64Image = (base64: string) => base64.replace('data:image/png;base64,', 'base64://')
