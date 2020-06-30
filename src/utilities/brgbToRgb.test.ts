import { brgbToRgb } from './brgbToRgb'

test('convert brgb to rgb', () => {
  expect(brgbToRgb({ bred: 200, bgreen: 120, bblue: 80 })).toEqual({
    red: 51,
    green: 31,
    blue: 20,
  })

  expect(brgbToRgb({ bred: 823, bgreen: 0, bblue: 1000 })).toEqual({
    red: 211,
    green: 0,
    blue: 256,
  })

  expect(brgbToRgb({ bred: 211, bgreen: 33, bblue: 1001 })).toEqual(undefined)
})
