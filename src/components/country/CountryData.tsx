import { Favorite } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Languages } from '../../app/countryDataMaintainer/CountryFunctions'
import CountryInfo, { CountryProps, FavoriteCountry } from '../../app/countryDataMaintainer/countryInterface'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks';
import { DecrementFavorite, IncrementFavorite } from '../../features/country/countrySlice';
import { FaAngleRight } from 'react-icons/fa';

const CountryData = (country:CountryProps) => {
    const dispatch = useAppDispatch()
    const [color,setColor] = useState<string>('blue')
   
  
    const favoriteCountryAdd =(country:CountryInfo)=>{
      
      const favorite: FavoriteCountry ={
        count:1,
        country:country
      }
      if(color === 'blue'){
        setColor('black')
        dispatch(IncrementFavorite(favorite))
        toast.success(`${country.name.common} is added to favorite`)
      }
      if(color === 'black'){
        setColor('blue')
        dispatch(DecrementFavorite(favorite))
        toast.error(`${country.name.common} is removed from favorite`)
      } 
    }
  return (
    <TableRow key={uuidv4()}>
        <TableCell sx={{fontSize:10}}><img src={country.country.flags["png"]} alt={country.country.flags["alt"]}/></TableCell>
        <TableCell sx={{fontSize:10}}>{country.country.name.common}</TableCell>
        <TableCell sx={{fontSize:10}}>{country.country.region}</TableCell>
        <TableCell sx={{fontSize:10}}>{country.country.population.toLocaleString('en-us')}</TableCell>
        <TableCell sx={{fontSize:10}}>
            <ul>
                {
                    Languages(country.country.languages).map((language)=><li key={uuidv4()}>{language}</li>)
                }
            </ul>
        </TableCell>
        <TableCell><Favorite onClick={()=>favoriteCountryAdd(country.country)} className={`btn-${color}`} /></TableCell>
        <TableCell><Link to={`/countries/${country.country.name.official}?fullText=true`}><FaAngleRight/></Link></TableCell>
    </TableRow>
  )
}

export default CountryData