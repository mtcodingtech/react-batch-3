import React from 'react'
import { useSelector } from 'react-redux'

function Nav() {
  const theme = useSelector(state => state.theme)
  return (
    <h1>{theme}</h1>
  )
}

export default Nav