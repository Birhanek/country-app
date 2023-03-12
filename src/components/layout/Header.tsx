import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks'
import { searchByName } from '../../features/country/countrySlice'

const Header = () => {
  
  const dispatch = useAppDispatch()
  const [name,setName] = useState<string>('')

  const searchCountryByName = (event:React.ChangeEvent<HTMLInputElement>)=>{
    
    event.preventDefault()
    setName(event.target.value)
    dispatch(searchByName(name))
  }
  return (
    <div className='header'>
        <div className='header-search'>
            <FaSearch className='search-icon'/>
            <input id='search' name='search' value={name} className='search__input' onChange={(e)=>searchCountryByName(e)}/>
        </div>
        <div className='header-search'>
            <select className='select-region'>

            </select>
        </div>
    </div>
  )
}

export default Header
