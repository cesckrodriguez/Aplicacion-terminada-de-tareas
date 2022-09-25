import React from 'react'

const Button = ({texto, color, onClick}) => {
    
  return (
    <button className='btn' style={{backgroundColor: color}} onClick={onClick}>{texto} </button>
  )
}

export default Button