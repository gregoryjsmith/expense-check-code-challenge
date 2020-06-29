import { hslToRgb } from './hslToRgb'

test('convert hsl to rgb', () => {
  expect(hslToRgb({ hue: 100, lightness: 50, saturation: 50 })).toEqual({
    red: 106,
    green: 191,
    blue: 64,
  })
  expect(hslToRgb({ hue: 20, lightness: 27, saturation: 40 })).toEqual({
    red: 130,
    green: 93,
    blue: 74,
  })
})
