import React, { useContext } from 'react'
import { TitleContext } from './ComponentA'

function ComponentD() {
    const {title, color} = useContext(TitleContext);
  return (
    <div>
        <h3>Component D</h3>
        <p style={{color}}>{title}</p>
    </div>
  )
}

export default ComponentD;