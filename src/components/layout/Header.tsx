import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks'
import { searchByName, searchByRegion } from '../../features/country/countrySlice'

const Header = () => {
  
  const dispatch = useAppDispatch()
  const [name,setName] = useState<string>('')
  const [region,setRegion] = useState<string>('Africa')

  const searchCountryByName = (event:React.ChangeEvent<HTMLInputElement>)=>{
    
    event.preventDefault()
    setName(event.target.value)
    dispatch(searchByName(name))
  }
  const searchCountriesByRegion =(event:React.ChangeEvent<HTMLSelectElement>)=>{
    event.preventDefault()
    setRegion(event.target.value)
    dispatch(searchByRegion(region))
  }
  return (
    <div className='header'>
        <div className='header-search'>
            <FaSearch className='search-icon'/>
            <input id='search' name='search' value={name} className='search__input' onChange={(e)=>searchCountryByName(e)}/>
        </div>
        <div className='header-search'>
            <select className='select-region' value={region} onChange={searchCountriesByRegion}>
                <option>select By region</option>
                <option value="Africa"> Africa</option>
                <option value="Antarctica"> Antarctica</option>
                <option value="Asia"> Asia</option>
                <option value="North America"> North America</option>
                <option value="South America"> South America</option>
                <option value="Europe"> Europe</option>
                <option value="Oceania"> Oceania</option>
            </select>
        </div>
    </div>
  )
}

export default Header
