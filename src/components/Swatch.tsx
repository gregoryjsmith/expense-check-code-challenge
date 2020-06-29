import React from 'react'

const Swatch = () => {
  return (
    <div className='Swatch'>
      <div className='Swatch-swatches'>Swatches will go here</div>
      <div className='Swatch-selected'>Selected value goes here</div>
      <button className='Swatch-button'>Refresh</button>
    </div>
  )
}

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
  red: number // [0, 10000]
  green: number // [0, 10000]
  blue: number // [0, 10000]
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

export { Swatch }
