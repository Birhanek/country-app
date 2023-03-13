import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks';
import { getCountryByName } from '../app/dataService/countryAPI';
import NavBar from '../components/layout/NavBar';

const Country = () => {

const dispatch = useAppDispatch()
const {countryState, isLoading,isError,message} = useAppSelector((state)=>state.country) 
const {name} = useParams()

useEffect(()=>{
dispatch(getCountryByName(name))
},[dispatch,name])
  return (
    <div >
    <NavBar/>
    
    {
      countryState.map((country)=><div>
        <h1>{country.name.common}</h1>
        <h2>{country.flag}</h2>
      </div>)
    }
    </div>
  )
}

export default Country
