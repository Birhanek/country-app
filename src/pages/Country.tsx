import { MoreVert } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Languages } from '../app/countryDataMaintainer/CountryFunctions';
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks';
import { getCountryByName } from '../app/dataService/countryAPI';
import Loading from '../components/sideFeatures/Loading';
import { ExpandMoreProps } from '../app/countryDataMaintainer/countryInterface';
import { styled} from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { v4 as uuidv4, v4 } from 'uuid';

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
const [locationExpand, setLocationExpand] = useState<boolean>(false)

const handleExpand = ()=>{
  setExpand(!expand)
}

const handleLocationExpanded = () => {
  setLocationExpand(!locationExpand)
}

  useEffect(()=>{
  dispatch(getCountryByName(name))
},[dispatch,name])

  return (
    <Container sx={{width:'40%',padding:'2rem'}}>
    {
     isLoading?<Loading/>:isError?<Typography variant="h2">{message}</Typography>:countryState.map((country)=><Box key={uuidv4()} sx={{width:'400',height:"auto"}}>
        <Card>
          <CardHeader 
          avatar={<Avatar sx={{backgroundColor:"blue"}}>{country.cca2}</Avatar>}
          action={<IconButton><MoreVert/></IconButton>}
          title={country.name.common}
          subheader={country.continents[0]}
          sx={{backgroundColor:"text.secondary", fontSize:20}}/>
          <CardMedia
            component='img' 
            width='400' 
            image={country.flags["png"]} 
            alt={country.flags["alt"]}
            />
          <CardContent>
            <Typography variant="body2" color="HighlightText" sx={{fontSize:14,color:"text.secondary"}}>
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
                <Link to='/'><ArrowBackIosIcon/></Link>
               </IconButton> 
               <ExpandMoreButton
               expand={locationExpand}
               onClick={handleLocationExpanded}
               aril-label=" show location"
               >
               <IconButton aria-label='location'>
                <LocationOnIcon/>
               </IconButton>
               </ExpandMoreButton>
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
                  <MenuItem key={uuidv4()}>{language}</MenuItem>
              )
               }</Stack>
            </Typography>
               </CardContent>
          
          </Collapse>
          <Collapse in={locationExpand} timeout="auto" unmountOnExit>
               <CardContent>
                  <Typography>
                    <iframe src={country.maps["openStreetMaps"]} title={country.name.official}></iframe>
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
