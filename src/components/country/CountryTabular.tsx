import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Languages } from '../../app/countryDataMaintainer/CountryFunctions'
import { CountryProps } from '../../app/countryDataMaintainer/countryInterface'


const CountryTabular = (props:CountryProps) => {
  
  return (
    <tr key={props.key} className=''>
      <td>{props.country.flag}</td>
      <td>{props.country.name.common}</td>
      <td>{props.country.region}</td>
      <td>{props.country.population}</td>
      <td>
        <ul>
        {
          Languages(props.country.languages).map((language)=><li style={{color:"black",listStyleType:"desc"}}>{language}</li>)
        }
        </ul>
      </td>
      <td>Love</td>
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
