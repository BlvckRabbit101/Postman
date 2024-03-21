import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.svg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import Button from './Button';

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="left">
            <img className='logo' src={logo} alt="" />
            <nav>Product<MdOutlineKeyboardArrowDown className='icon' /></nav>
            <nav>Pricing</nav>
            <nav>Enterprise</nav>
            <nav>Resources and Support<MdOutlineKeyboardArrowDown className='icon' /></nav>
            <nav>Public API Network</nav>
        </div>
        <div className="mid">
            <RiSearchLine className='icon' />
            <input type="text" placeholder='Search Postman' />
        </div>
        <div className="right">
            <Button title='Contact Sales'/>  
            <Button title='Sign In'/>  
            <Button effect='btnClass' title='Sign Up for Free'/>  
        </div>
      </div>
    </div>
  )
}

export default Header
