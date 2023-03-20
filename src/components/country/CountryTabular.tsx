
import React, { useState } from 'react'
import { FaAngleRight, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Languages } from '../../app/countryDataMaintainer/CountryFunctions'
import CountryInfo, { CountryProps, FavoriteCountry } from '../../app/countryDataMaintainer/countryInterface'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks'
import { DecrementFavorite, IncrementFavorite } from '../../features/country/countrySlice'


const CountryTabular = (props:CountryProps) => {
  

  const dispatch = useAppDispatch()
  //const [color,setColor] = useState<string>('blue')

  const favoriteCountryAdd =(country:CountryInfo)=>{
    
    const favorite: FavoriteCountry ={
      count:1,
      country:country
    }
    /*if(color === 'blue'){
      setColor('black')
      dispatch(IncrementFavorite(favorite))
    }
    if(color === 'black'){
      setColor('blue')
      dispatch(DecrementFavorite(favorite))
    }*/
    if(country.isFavorite === false){
     
      dispatch(IncrementFavorite(favorite))
    }
    else{
      
      dispatch(DecrementFavorite(favorite))
    }
    
  }

  return (
    <tr key={props.key} className="table-details__data-row">
      <td className='country__flag'>{props.country.flag}</td>
      <td>{props.country.name.common}</td>
      <td>{props.country.region}</td>
      <td>{props.country.population.toLocaleString('en-us')}</td>
      <td>
        <ul className='language__list'>
        {
          Languages(props.country.languages).map((language)=><li className='language'>{language}</li>)
        }
        </ul>
      </td>
      <td><button onClick={()=>favoriteCountryAdd(props.country)}><FaHeart className={`btn-${props.country.isFavorite?'black':'blue'}`}/></button></td>
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
