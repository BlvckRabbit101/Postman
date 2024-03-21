import React from 'react'

const Postcard = ({icon, title, text}) => {
  return (
    <div className='postcard'>
      <img src={icon} alt="" />
      <h3 className="post-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Postcard
