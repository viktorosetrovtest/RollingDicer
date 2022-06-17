import React from 'react'

function Button(props) {
 return <button 
  type="submit"
  onClick ={props.onClick}
  >Play game</button>
}

export default Button;