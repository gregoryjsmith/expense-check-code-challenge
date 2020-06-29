import { HslColor, RgbColor } from '../components/Swatch'

/**
 * Convert HSL to RGB
 *
 * Taken from here, with slight modifications for TypeScript:
 * https://github.com/WickyNilliams/pure-color/blob/master/convert/hsl2rgb.js
 */
function hslToRgb({ hue, lightness, saturation }: HslColor): RgbColor {
  const h = hue / 360
  const s = lightness / 100
  const l = saturation / 100
  let t2
  let t3
  let val

  if (s === 0) {
    val = l * 255
    return {
      red: val,
      green: val,
      blue: val,
    }
  }

  if (l < 0.5) {
    t2 = l * (1 + s)
  } else {
    t2 = l + s - l * s
  }

  const t1 = 2 * l - t2
  const rgb = [0, 0, 0]

  for (let i = 0; i < 3; i++) {
    t3 = h + (1 / 3) * -(i - 1)

    if (t3 < 0) {
      t3++
    }

    if (t3 > 1) {
      t3--
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3
    } else if (2 * t3 < 1) {
      val = t2
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6
    } else {
      val = t1
    }

    rgb[i] = Math.round(val * 255)
  }

  return {
    red: rgb[0],
    green: rgb[1],
    blue: rgb[2],
  }
}

export { hslToRgb }
