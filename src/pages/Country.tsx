import { MoreVert } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Languages } from '../app/countryDataMaintainer/CountryFunctions';
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks';
import { getCountryByName } from '../app/dataService/countryAPI';
import NavBar from '../components/layout/NavBar';
import Loading from '../components/sideFeatures/Loading';
import { ExpandMoreProps } from '../app/countryDataMaintainer/countryInterface';
import { styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ExpandMoreButton = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other}/>;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Country = () => {

const dispatch = useAppDispatch()
const {countryState, isLoading,isError,message} = useAppSelector((state)=>state.country) 
const {name} = useParams()

const [expand,setExpand] = useState<boolean>(false)

const handleExpand = ()=>{
  setExpand(!expand)
}

  useEffect(()=>{
  dispatch(getCountryByName(name))
},[dispatch,name])

  return (
    <Container>
    <NavBar/>
    
    {
     isLoading?<Loading/>:isError?<Typography variant="h2">{message}</Typography>:countryState.map((country)=><Box sx={{width:'400',height:"auto"}}>
        <Card className='card'>
          <CardHeader 
          avatar={<Avatar sx={{bgcolor:blue}}>{country.cca2}</Avatar>}
          action={<IconButton><MoreVert/></IconButton>}
          title={country.name.common}
          subheader={country.continents[0]}/>
          <CardMedia
            component='img' 
            width='400' 
            image={country.flags["png"]} 
            alt={country.flags["alt"]}/>
          <CardContent>
            <Typography variant="body2" color="HighlightText" className='description'>
              The country belongs to 
              <strong style={{color:'blue'}}> {country.region} </strong> region and 
              <strong style={{color:'blue'}}> {country.subregion} </strong> sub-region.Located at 
              <strong style={{color:'blue'}}> {country.latlng[0]} <sup>o</sup>N</strong> and 
              <strong style={{color:'blue'}}> {country.latlng[1]} <sup>o</sup>W</strong>.
              The country has a population of
              <strong style={{color:'blue'}}> {country.population.toLocaleString('es-us')} </strong>.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
               <IconButton aria-label='back to main page'>
                <ArrowBackIosIcon/>
               </IconButton> 
               <IconButton aria-label='location'>
                <LocationOnIcon/>
               </IconButton>
               <ExpandMoreButton
                expand={expand}
                onClick = {handleExpand}
                aria-expanded ={expand}
                aria-label ='show more'
               >
                <ExpandMoreIcon/>
               </ExpandMoreButton>
          </CardActions>
          <Collapse in={expand} timeout="auto" unmountOnExit>
               <CardContent>
               <Typography variant="body2">
               Languages: <Stack direction="row" spacing={1}>{
              Languages(country.languages).map((language)=>
                  <MenuItem>{language}</MenuItem>
              )
               }</Stack>
            </Typography>
               </CardContent>
          
          </Collapse>
        </Card>
      </Box>)
    }
    </Container>
  )
}

export default Country
