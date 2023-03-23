
import { Favorite } from '@mui/icons-material';
import React, { useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// User defined call ups
import { Languages } from '../../app/countryDataMaintainer/CountryFunctions'
import CountryInfo, { CountryProps, FavoriteCountry } from '../../app/countryDataMaintainer/countryInterface'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks'
import { DecrementFavorite, IncrementFavorite } from '../../features/country/countrySlice'


const CountryTabular = (props:CountryProps) => {
  

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
    <tr key={uuidv4()} className="table-details__data-row">
      <td id='flag'><img id='country__flag' src={props.country.flags["png"]} alt={props.country.flags["alt"]}/></td>
      <td>{props.country.name.common}</td>
      <td>{props.country.region}</td>
      <td>{props.country.population.toLocaleString('en-us')}</td>
      <td>
        <ul className='language__list'>
        {
          Languages(props.country.languages).map((language)=><li key={uuidv4()} className='language'>{language}</li>)
        }
        </ul>
      </td>
      <td><Favorite onClick={()=>favoriteCountryAdd(props.country)} className={`btn-${color}`}/></td>
      <td>
        <Link 
        to={`/countries/${props.country.name.official}?fullText=true`}>
          <FaAngleRight/>     
        </Link>
      </td>
      
    </tr>
  )
}

export default CountryTabular
