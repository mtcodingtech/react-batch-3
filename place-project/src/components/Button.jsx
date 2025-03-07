import React from 'react'

function Button({startIcon, endIcon, text, ...customProps}) {
  const { clickEvent } = customProps;

  return (
    <button onClick={clickEvent} className='bg-blue-700 py-1 px-3 rounded-md capitalize text-sm text-gray-50'>{startIcon} {text} {endIcon}</button>
  )
}

export default Button