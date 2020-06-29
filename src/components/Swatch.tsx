import React from 'react'

const Swatch = () => {
  return <div>I am a swatch</div>
}

type RgbColor = {
  red: number // [0, 255]
  green: number // [0, 255]
  blue: number // [0, 255]
}

type HslColor = {
  hue: number // [0, 360] degrees
  saturation: number // [0, 100] percentage
  lightness: number // [0, 100] percentage
}

type BrgbColor = {
  red: number // [0, 10000]
  green: number // [0, 10000]
  blue: number // [0, 10000]
}

type ColorListItem = {
  kind: string // One of "rgb", or "hsl"
  components: RgbColor | HslColor
}

type ColorList = ColorListItem[]

type ExtendedColorListItem = {
  kind: string // One of "rgb", "hsl", or "brgb"
  components: RgbColor | HslColor | BrgbColor
}

type ExtendedColorList = ExtendedColorListItem[]

export { Swatch }
