import React from 'react'
import Button from '../Header/Button'
import Postcard from './Postcard'
import A from '../../assets/images/icon1.svg'
import B from '../../assets/images/icon2.svg'
import C from '../../assets/images/icon3.svg'
import D from '../../assets/images/icon4.svg'

const Postsection = () => {
  return (
    <div className='post'>
      <div className="post-wrap">
        <div className="post-top">
            <h2>What is Postman?</h2>
            <p>Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.</p>
        </div>
        <div className="post-btm">
            <Postcard title='API Tools' text='A comprehensive set of tools that help accelerate the API Lifecycle - from design, testing, documentation, and mocking to discovery.' icon={A} />
            <Postcard title='API Repository' text='Easily store, iterate and collaborate around all your API artifacts on one central platform used across teams.' icon={B} />
            <Postcard title='Workspaces' text='Organize your API work and collaborate with teammates across your organization or stakeholders across the world.' icon={C} />
            <Postcard title='Governance' text='Improve the quality of APIs with governance rules that ensure APIs are designed, built, tested, and distributed meeting organizational standards.' icon={D} />
        </div>
        <div className="post-btn">
            <Button title='Learn more'/>
        </div>
      </div>
    </div>
  )
}

export default Postsection
