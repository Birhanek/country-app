import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks'
import { getAllCountries } from '../app/dataService/countryAPI'
import CountryTabular from '../components/country/CountryTabular'
import Loading from '../components/sideFeatures/Loading'


const Countries = () => {
  const dispatch = useAppDispatch()
  const {countryState,isLoading,isError,message } = useAppSelector(state=>state.country)

  
  // Dispatching all country at first glance
  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])
  
  // 
  const countryData = countryState.map((country,index)=>{
    return <CountryTabular key = {index}  country = {country}/>
  })


  return (
    <div className="country-details">
     {
      isLoading?
      <Loading/>:isError?<p style={{background:"green",fontSize:"2rem"}}>{message}</p>:
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
            countryData
          }
      </tbody>
      
      </table>
}
     
    </div>
  )
}

export default Countries
