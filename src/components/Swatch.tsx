import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { ColorList, RgbColor } from '../types'
import { colorListItemToRgb } from '../utilities/colorListItemToRgb'
import './Swatch.css'

const ENDPOINT = 'https://challenge.structrs.com'

type Props = {
  path?: string
  toRgbFunction?(color: any): RgbColor | undefined
}

const Swatch: React.FC<Props> = ({ path, toRgbFunction }) => {
  const [colors, setColors] = useState<ColorList>([])
  const [color, setColor] = useState<RgbColor>()

  const requestColors = useCallback(async () => {
    const response = await axios.get<ColorList>(
      `${ENDPOINT}${path ?? '/rest/colors/list'}`
    )
    setColors(response.data)
    setColor(undefined)
  }, [path])

  useEffect(() => {
    requestColors()
  }, [requestColors])

  const handleSwatchClick = (color?: RgbColor) => (e: React.MouseEvent) => {
    e.preventDefault()
    setColor(color)
  }

  return (
    <div className='Swatch'>
      <div className='Swatch-swatches'>
        {colors
          .map(toRgbFunction ?? colorListItemToRgb)
          .filter((color) => color !== undefined)
          .map((color, index) => (
            <div
              key={`${index}-${JSON.stringify(color)}`}
              className='Swatch-color'
              style={{
                backgroundColor: `rgb(${color?.red}, ${color?.green}, ${color?.blue})`,
              }}
              onClick={handleSwatchClick(color)}
            />
          ))}
      </div>
      <div className='Swatch-selected'>
        {color
          ? `rgb(${color?.red}, ${color?.green}, ${color?.blue})`
          : 'Click a color to see its RGB value'}
      </div>
      <button className='Swatch-button' onClick={requestColors}>
        Refresh
      </button>
    </div>
  )
}

export { Swatch }
