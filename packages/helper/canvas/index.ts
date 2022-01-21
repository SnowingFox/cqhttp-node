import type { Canvas } from 'canvas'
import { createCanvas, loadImage } from 'canvas'

export const DEFAULT_SIZE = { width: 400, height: 812 }

export function createBaseCanvas(size: { width: number; height: number } = DEFAULT_SIZE) {
  const canvas = createCanvas(size.width, size.height)
  const ctx = canvas.getContext('2d')

  return {
    canvas,
    ctx,
  }
}
