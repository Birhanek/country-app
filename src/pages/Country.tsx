import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks'
import { getAllCountries } from '../app/dataService/countryAPI'
import Loading from '../components/sideFeatures/Loading'

const Country = () => {

  const {countryState,isLoading,isError,message } = useAppSelector(state=>state.country)

  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])
  
  return (
    <div>
     {
      isLoading?
      <Loading/>:isError?<p style={{background:"green",fontSize:"2rem"}}>{message}</p>:
      countryState.map((country)=>{
        return <div>
          {country.name.common}
          {country.flag}
          {country.population.toString()}
          {country.flags.key}
          
          </div>
      })
     }
    </div>
  )
}

export default Country
