import { BrgbColor, RgbColor } from '../types'

function brgbToRgb(brgbColor: BrgbColor): RgbColor | undefined {
  for (const [key, value] of Object.entries(brgbColor)) {
    if (value < 0 || value > 1000) {
      return
    }
  }

  return {
    red: convertBrgbValueToRgb(brgbColor.bred),
    green: convertBrgbValueToRgb(brgbColor.bgreen),
    blue: convertBrgbValueToRgb(brgbColor.bblue),
  }
}

function convertBrgbValueToRgb(value: number): number {
  return Math.round((value / 1000) * 256)
}

export { brgbToRgb }
