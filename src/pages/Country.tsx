import { MoreVert } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Container, IconButton, MenuItem, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Languages } from '../app/countryDataMaintainer/CountryFunctions';
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks';
import { getCountryByName } from '../app/dataService/countryAPI';
import NavBar from '../components/layout/NavBar';
import Loading from '../components/sideFeatures/Loading';

const Country = () => {

const dispatch = useAppDispatch()
const {countryState, isLoading,isError,message} = useAppSelector((state)=>state.country) 
const {name} = useParams()

  useEffect(()=>{
  dispatch(getCountryByName(name))
},[dispatch,name])

  return (
    <Container>
    <NavBar/>
    
    {
     isLoading?<Loading/>:isError?<Typography variant="h2">{message}</Typography>:countryState.map((country)=><Box>
        <Card>
          <CardHeader 
          avatar={<Avatar sx={{bgcolor:blue}}>{country.cca2}</Avatar>}
          action={<IconButton><MoreVert/></IconButton>}
          title={country.name.common}
          subheader={country.continent.at(0)}/>
          <CardMedia 
            component='img' 
            width='400' 
            image={country.flags["png"]} 
            alt={country.flags["alt"]}/>
          <CardContent>
            <Typography variant="body2" color="HighlightText">
              Population: {country.population}
            </Typography>
            {
              Languages(country.languages).map((language)=><Stack spacing={2}>
                  <MenuItem>{language}</MenuItem>
              </Stack>)
            }
          </CardContent>
        </Card>
      </Box>)
    }
    </Container>
  )
}

export default Country
