import React from 'react'
import { useAppSelector } from '../app/countryDataMaintainer/hooks'
import CountryTabular from '../components/country/CountryTabular'
import NavBar from '../components/layout/NavBar'


const Favorite = () => {
  const {favoriteCountry} = useAppSelector(state=>state.country)

  const favoriteCountryData = favoriteCountry.map((favorite,index)=>{
    return <CountryTabular key={index} country={favorite}/>
  })
  return (
    <React.Fragment>
      <NavBar/>
     {
      favoriteCountry.length>0?<div className='country-details'>
      <table className='table-details'>
        <thead className='table-details__head'>
            <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Region</th>
                <th>Population</th>
                <th>Language</th>
            </tr>  
        </thead>
        <tbody>
      {
        favoriteCountryData
      }
        </tbody>
  
    </table></div>:
    <p>No favorite country selected</p>
    
     }
    </React.Fragment>
  )
}

export default Favorite
