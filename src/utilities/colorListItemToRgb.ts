import { ColorListItem, HslColor, RgbColor } from '../types'
import { hslToRgb } from './hslToRgb'

function colorListItemToRgb({
  kind,
  components,
}: ColorListItem): RgbColor | undefined {
  switch (kind) {
    case 'hsl':
      return hslToRgb(components as HslColor)
    case 'rgb':
      return components as RgbColor
  }
}

export { colorListItemToRgb }
