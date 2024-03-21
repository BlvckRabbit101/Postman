import React from 'react'
import '../Header/style.css'
import heroImg from '../../assets/images/homepage-hero.png'
import Button from '../Header/Button'
import windows from '../../assets/images/windows.svg'
import apple from '../../assets/images/apple.svg'
import linux from '../../assets/images/linux.svg'

const Hero = () => {
  return (
    <div>
      <div className="hero-wrapper">
        <div className="hero-left">
            <h1>Build</h1>
            <h3>APIs together</h3>
            <p>Over 30 million developers use Postman. Get started by signing up or downloading the desktop app.</p>
            <div className="input-holder">
                <input type="text" placeholder='jsmith@example.com'/>
                <Button effect='heroClass' title='Sign Up for Free' />
            </div>
            <div style={{color:'rgb(107, 107, 107)', fontSize:'14px', fontWeight:'500'}}>Download the desktop app for</div>
            <div className="icon-holder">
              <img src={windows} alt="" />
              <img src={apple} alt="" />
              <img src={linux} alt="" />
            </div>
        </div>
        <div className="hero-right"><img className='heroImg' src={heroImg} alt="" /></div>
      </div>
    </div>
  )
}

export default Hero
