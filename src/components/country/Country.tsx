import React from 'react'
import { CountryProps } from '../../app/countryDataMaintainer/countryInterface'


const Country = (props:CountryProps) => {
  
  return (
    <tr key={props.key} className=''>
      <td>{props.country.flag}</td>
      <td>{props.country.name.common}</td>
      <td>{props.country.region}</td>
      <td>{props.country.population}</td>
      <td>
        
      </td>
    </tr>
  )
}

export default Country
