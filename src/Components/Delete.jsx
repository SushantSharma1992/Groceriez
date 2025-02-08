import React from 'react'

export default function Delete(props) {
  return (
    <button className="rightButton" type='button' onClick={props.deleteFunc}>Delete</button>
  )
}
