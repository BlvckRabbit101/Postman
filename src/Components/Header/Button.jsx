import React from 'react'

const Button = (btn) => {
  return (
    <div>
      <button className={`btn ${btn.effect}`}>{btn.title}</button>
    </div>
  )
}

export default Button
