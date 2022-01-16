import { encode } from 'node-base64-image'

export const base64Image = (img: any) => {
  return encode(img)
}

export const transformCommands = (str: string) => str.split(' ')
