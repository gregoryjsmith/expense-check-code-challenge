import {
  BrgbColor,
  ColorListItem,
  ExtendedColorListItem,
  RgbColor,
} from '../types'
import { colorListItemToRgb } from './colorListItemToRgb'
import { brgbToRgb } from './brgbToRgb'

function extendedColorListItemToRgb({
  kind,
  components,
}: ExtendedColorListItem | ColorListItem): RgbColor | undefined {
  const rgb = colorListItemToRgb({ kind, components } as ColorListItem)

  if (rgb) {
    return rgb
  }

  switch (kind) {
    case 'brgb':
      return brgbToRgb(components as BrgbColor)
  }
}

export { extendedColorListItemToRgb }
