import { FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'
import { Continents } from '../../app/countryDataMaintainer/countryInterface'
import { useAppDispatch } from '../../app/countryDataMaintainer/hooks'
import { getCountriesByRegion } from '../../app/dataService/countryAPI'
import { searchByName } from '../../features/country/countrySlice'
import SearchIcon from '@mui/icons-material/Search';
import { Search,SearchIconWrapper,StyledInputBase } from '../sideFeatures/SearchComponent'

const Header = () => {
  
  const dispatch = useAppDispatch()
  const [name,setName] = useState<string>('')
  const [region,setRegion] = useState<string>('')

  const searchCountryByName = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value)
    dispatch(searchByName(name))
  }
  const searchCountriesByRegion =(event:SelectChangeEvent)=>{
    event.preventDefault()
    setRegion(event.target.value)
    dispatch(getCountriesByRegion(region))
  }
  return (
        <Grid container spacing={2} sx={{mt:1,p:1}}>
              <Grid container item xs={12} xl={8} md={6} >
                <FormControl fullWidth={true}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                      id='search'
                      name='search'
                      value={name}
                      onChange={searchCountryByName}
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </FormControl>
              </Grid>
              <Grid container item xs={12} xl={4} md={6}>
                  <FormControl fullWidth={true}>
                  <InputLabel>Search By Region</InputLabel>
                  <Select labelId='select-by-region-label' id='select-by-region' value={region} onChange={searchCountriesByRegion} label='region'>
                      <MenuItem value={Continents.Africa} >{Continents.Africa}</MenuItem>
                      <MenuItem value={Continents.Antarctica} >{Continents.Antarctica}</MenuItem>
                      <MenuItem value={Continents.Asia} >{Continents.Asia}</MenuItem>
                      <MenuItem value={Continents.Europe} >{Continents.Europe}</MenuItem>
                      <MenuItem value={Continents.NorthAmerica} >{Continents.NorthAmerica}</MenuItem>
                      <MenuItem value={Continents.Oceania} >{Continents.Oceania}</MenuItem>
                      <MenuItem value={Continents.SouthAmerica} >{Continents.SouthAmerica}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            
          </Grid>
        )
}

export default Header
