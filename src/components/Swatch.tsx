import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ColorList, RgbColor } from '../types'
import { colorListItemToRgb } from '../utilities/colorListItemToRgb'
import './Swatch.css'

const ENDPOINT = 'https://challenge.structrs.com'

const Swatch: React.FC = () => {
  const [colors, setColors] = useState<ColorList>([])
  const [color, setColor] = useState<RgbColor>()

  const requestColors = async () => {
    const response = await axios.get<ColorList>(`${ENDPOINT}/rest/colors/list`)
    setColors(response.data)
    setColor(undefined)
  }

  useEffect(() => {
    requestColors()
  }, [])

  const handleSwatchClick = (color: RgbColor) => (e: React.MouseEvent) => {
    setColor(color)
  }

  return (
    <div className='Swatch'>
      <div className='Swatch-swatches'>
        {colors.map(colorListItemToRgb).map((color) => (
          <div
            className='Swatch-color'
            style={{
              backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
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
