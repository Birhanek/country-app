
import React from 'react'
import {FaBuffer, FaHeart, FaHome} from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/countryDataMaintainer/hooks';

const NavBar = () => {
  const {favoriteCount,favoriteCountry} = useAppSelector(state=>state.country)
  console.log(favoriteCountry)
  return (
    <div className='navigation'>
      <div className='navigation-logo'>
          <FaBuffer className='logo'/>
          <h1 className='title'>Country Finder</h1>
      </div>
      <div className='navigation-links'>
        <Link to='/'><FaHome/></Link>
        <Link to='/countries'><GiWireframeGlobe/></Link>
        <Link to='/favorite' state={favoriteCountry}><sup>{favoriteCount}</sup><FaHeart/></Link> 
        <label className='switch'>
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}

export default NavBar
