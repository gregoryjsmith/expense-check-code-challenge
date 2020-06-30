export type RgbColor = {
  red: number // [0, 255]
  green: number // [0, 255]
  blue: number // [0, 255]
}

export type HslColor = {
  hue: number // [0, 360] degrees
  saturation: number // [0, 100] percentage
  lightness: number // [0, 100] percentage
}

export type BrgbColor = {
  bred: number // [0, 10000]
  bgreen: number // [0, 10000]
  bblue: number // [0, 10000]
}

export type ColorListItem = {
  kind: string // One of "rgb", or "hsl"
  components: RgbColor | HslColor
}

export type ColorList = ColorListItem[]

export type ExtendedColorListItem = {
  kind: string // One of "rgb", "hsl", or "brgb"
  components: RgbColor | HslColor | BrgbColor
}

export type ExtendedColorList = ExtendedColorListItem[]
