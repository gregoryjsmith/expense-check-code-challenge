import { colorListItemToRgb } from './colorListItemToRgb'
import { extendedColorListItemToRgb } from './extendedColorListItemToRgb'

test('convert ColorListItem to rgb', () => {
  expect(
    extendedColorListItemToRgb({
      kind: 'hsl',
      components: { hue: 100, lightness: 50, saturation: 50 },
    })
  ).toEqual({
    red: 106,
    green: 191,
    blue: 64,
  })

  expect(
    extendedColorListItemToRgb({
      kind: 'rgb',
      components: { red: 120, green: 110, blue: 100 },
    })
  ).toEqual({
    red: 120,
    green: 110,
    blue: 100,
  })

  expect(
    extendedColorListItemToRgb({
      kind: 'brgb',
      components: { bred: 200, bgreen: 120, bblue: 80 },
    })
  ).toEqual({
    red: 51,
    green: 31,
    blue: 20,
  })

  expect(
    extendedColorListItemToRgb({
      kind: 'notsupported',
      components: { red: 120, green: 110, blue: 100 },
    })
  ).toEqual(undefined)
})
