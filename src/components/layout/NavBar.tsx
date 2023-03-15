
import React, { useState } from 'react'
import {FaBuffer, FaHeart, FaHome} from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/countryDataMaintainer/hooks';
import Box from '@mui/material/Box';
import { AppBar, FormControlLabel, FormGroup, IconButton, Switch, Toolbar, Typography } from '@mui/material';

const NavBar = () => {
  const {favoriteCount,favoriteCountry} = useAppSelector(state=>state.country)
  console.log(favoriteCountry)
  const [bgControl,setBgControl] = useState<boolean>(true)
  const handleChange =(event:React.ChangeEvent<HTMLInputElement>)=>{
    setBgControl(event.target.checked)
  }
  return (
    <Box sx={{flexGrow:1,paddingX:1}}>
      <AppBar position="sticky">
        <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{display:'flex',flexGrow:1}}>
              <IconButton size="large" edge="start" color="inherit" aria-label='buffer' sx={{mr:2}}>
                <FaBuffer/>
              </IconButton>
              <Typography variant="h2" component="div"> Country Finder</Typography>
          </Box>
          <Box sx={{display:'flex',gap:1,justifyContent:'space-between',alignItems:'center'}}>
              <Link to='/'><FaHome/></Link>
              <Link to='/countries'><GiWireframeGlobe/></Link>
              <Link to='/favorite' state={favoriteCountry}><sup>{favoriteCount}</sup><FaHeart/></Link> 
              <FormGroup>
                <FormControlLabel label control={<Switch checked={bgControl} onChange={handleChange}/>}/>
              </FormGroup>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default NavBar
