
import React, { useContext } from 'react'
import {FaBuffer} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { AppBar, Badge, IconButton, Toolbar, Typography, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
//User defined call ups
import { useAppSelector } from '../../app/countryDataMaintainer/hooks';
import { SwitcherThemeContext } from '../../App';


const NavBar = () => {
  const theme = useTheme()
  const colorSwitcher = useContext(SwitcherThemeContext)
  const {favoriteCount,favoriteCountry} = useAppSelector(state=>state.country)
  return (
    <Box sx={{flexGrow:1,width:'100%',position:"sticky",top:0,left:0,zIndex:5}}>
      <AppBar position="sticky">
        <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{display:'flex',flexGrow:1}}>
              <IconButton size="large" edge="start" color="inherit" aria-label='buffer' sx={{mr:1}}>
                <FaBuffer/>
              </IconButton>
              <Typography variant="h2" component="div"> Country Finder</Typography>
          </Box>
          <Box sx={{display:'flex',gap:1,justifyContent:'space-between',alignItems:'center'}}>
              <IconButton><Link to='/'><HomeIcon/></Link></IconButton>
              <IconButton><Link to='/countries'><TravelExploreIcon/></Link></IconButton>
              <IconButton>
                <Link to='/favorite' state={favoriteCountry}>
                  <Badge badgeContent={favoriteCount} max={5} color="error">
                        <FavoriteIcon/>
                  </Badge>
                </Link>
              </IconButton>
              <IconButton onClick={colorSwitcher.toggleColorMode}>
                {theme.palette.mode ==='light'?<Brightness7/>:<Brightness4/>}
              </IconButton> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
  )
}

export default NavBar
