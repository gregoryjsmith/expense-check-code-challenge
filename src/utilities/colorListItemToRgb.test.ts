import { colorListItemToRgb } from './colorListItemToRgb'

test('convert ColorListItem to rgb', () => {
  expect(
    colorListItemToRgb({
      kind: 'hsl',
      components: { hue: 100, lightness: 50, saturation: 50 },
    })
  ).toEqual({
    red: 106,
    green: 191,
    blue: 64,
  })

  expect(
    colorListItemToRgb({
      kind: 'rgb',
      components: { red: 120, green: 110, blue: 100 },
    })
  ).toEqual({
    red: 120,
    green: 110,
    blue: 100,
  })

  expect(
    colorListItemToRgb({
      kind: 'notsupported',
      components: { red: 120, green: 110, blue: 100 },
    })
  ).toEqual(undefined)
})
