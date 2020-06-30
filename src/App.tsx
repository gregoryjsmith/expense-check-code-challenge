import React from 'react'
import './App.css'
import { Swatch } from './components/Swatch'
import { extendedColorListItemToRgb } from './utilities/extendedColorListItemToRgb'

const App = () => (
  <div className='App'>
    <h1>Basic Swatch</h1>
    <Swatch />
    <h1>Swatch with extension</h1>
    <Swatch
      path='/rest/colors/list-extended'
      toRgbFunction={extendedColorListItemToRgb}
    />
  </div>
)

export { App }
