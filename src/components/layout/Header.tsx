import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Continents } from '../../app/countryDataMaintainer/countryInterface'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks'
import { getCountriesByRegion } from '../../app/dataService/countryAPI'
import { searchByName, searchByRegion } from '../../features/country/countrySlice'

const Header = () => {
  
  const dispatch = useAppDispatch()
  const [name,setName] = useState<string>('')
  const [region,setRegion] = useState<string>('')

  const searchCountryByName = ()=>{
    dispatch(searchByName(name))
  }
  useEffect(()=>{
    searchCountryByName()
  },[name])
  const searchCountriesByRegion =(event:React.ChangeEvent<HTMLSelectElement>)=>{
    event.preventDefault()
    setRegion(event.target.value)
    dispatch(getCountriesByRegion(region))
  }
  return (
    <div className='header'>
        <div className='header-search'>
            <FaSearch className='search-icon'/>
            <input onKeyDown={searchCountryByName} id='search' name='search' value={name} className='search__input' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='header-search'>
            <select className='select-region' value={region} onChange={searchCountriesByRegion}>
                <option>select By region</option>
                <option value={Continents.Africa}>{Continents.Africa}</option>
                <option value={Continents.Antarctica}>{Continents.Antarctica}</option>
                <option value={Continents.Asia}>{Continents.Asia}</option>
                <option value={Continents.Europe}>{Continents.Europe}</option>
                <option value={Continents.NorthAmerica}>{Continents.NorthAmerica}</option>
                <option value={Continents.Oceania}>{Continents.Oceania}</option>
                <option value={Continents.SouthAmerica}>{Continents.SouthAmerica}</option>
            </select>
        </div>
    </div>
  )
}

export default Header
