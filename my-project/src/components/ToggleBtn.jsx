import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ToggleBtn() {
    const {toggleTheme} = useContext(ThemeContext)
  return (
   <button onClick={toggleTheme}>Change Theme</button>
  )
}

export default ToggleBtn