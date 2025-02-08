import React from 'react'

export default function Subtractor(props) {
  return (
    <button type='button' className='subtract item-button' onClick={props.onClick}>-</button>
  )
}
