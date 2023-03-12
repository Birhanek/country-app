
import React from 'react'
import {FaBuffer, FaHeart, FaHome} from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navigation'>
      <div className='navigation-logo'>
          <FaBuffer className='logo'/>
          <h1 className='title'>Country Finder</h1>
      </div>
      <div className='navigation-links'>
        <Link to='/'><FaHome/></Link>
        <Link to='/favorite'><FaHeart/></Link> 
        <label className='switch'>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default NavBar
