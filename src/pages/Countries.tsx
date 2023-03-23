
import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks'
import { getAllCountries } from '../app/dataService/countryAPI'
import CountryTabular from '../components/country/CountryTabular'
import Loading from '../components/sideFeatures/Loading'
import Pagination from '../components/sideFeatures/Pagination'
import { IconButton } from '@mui/material';
import { sortByCountryName, sortByPopulation } from '../features/country/countrySlice';


const Countries = () => {
  const dispatch = useAppDispatch()
  const {countryState,isLoading,isError,message, searchQuery } = useAppSelector(state=>state.country)
  const [currentPage,setCurrentPage] = useState<number>(1);
  const [dataPerPage] = useState<number>(10)
  const [isSortedByPopulation, setIsSortedByPopulation] = useState(false)
  const [isSortedByCountryName, setIsSortedByCountryName] = useState(false)

  const indexOfLastData = currentPage * dataPerPage
  const indexOfFirstData = indexOfLastData - dataPerPage
  const countries = countryState.slice(indexOfFirstData,indexOfLastData)


  const paginate = (selected:number) =>{
    setCurrentPage(selected + 1)
  }
  const prevPage = ()=> {
    if(currentPage !== 1) setCurrentPage(currentPage - 1)
  }
  const nextPage = ()=> {
    if(currentPage !== Math.ceil(countryState.length/dataPerPage)) setCurrentPage(currentPage +1)
  }
 
  const sortingByPopulation = () =>{
    if(isSortedByPopulation){
      dispatch(sortByPopulation(isSortedByPopulation))
      setIsSortedByPopulation(!isSortedByPopulation)
    }
    else{
      dispatch(sortByPopulation(isSortedByPopulation))
      setIsSortedByPopulation(!isSortedByPopulation)
    }
  }

  const sortingByNameOfCountry = () =>{
    if(isSortedByCountryName){
      dispatch(sortByCountryName(isSortedByCountryName))
      setIsSortedByCountryName(!isSortedByCountryName)
    }
    else {
      dispatch(sortByCountryName(isSortedByCountryName))
      setIsSortedByCountryName(!isSortedByCountryName)
    }
  }


  useEffect(()=>{
    dispatch(getAllCountries())
  },[dispatch])

  const dataTable = countries.filter((country)=>{
    if(searchQuery === '') return country
    else{
      return country.name.common.toLocaleLowerCase().includes(searchQuery)
    }
  }).map((country,index)=><CountryTabular key={index} index = {index}  country = {country}/>)


  return (
    <div className="country-details">
     {
      isLoading?
      <Loading/>:isError?<p style={{background:"green",fontSize:"2rem"}}>{message}</p>:
      <table className='table-details'>
          <thead className='table-details__head'>
                <tr className='table-details-head__row'>
                    <th>Flag</th>
                    <IconButton onClick={sortingByNameOfCountry}><th>Name {isSortedByCountryName ? <ArrowDownwardIcon/> : <ArrowUpwardIcon/> }</th></IconButton>
                    <th>Region</th>
                    <IconButton onClick={sortingByPopulation}><th>Population {isSortedByPopulation ? <ArrowDropUpIcon/>:<ArrowDropDownIcon/>}</th></IconButton>
                    <th>Languages</th>
                </tr>  
          </thead>
      <tbody className='table-details__body'>
          {
            countryState && dataTable  
          }
        
      </tbody>  
      </table>
}
<Pagination dataPerPage={dataPerPage} totalData={countryState.length} 
              paginate={paginate} prevPage={prevPage} nextPage={nextPage}
              />
<ToastContainer autoClose={500} hideProgressBar={true} theme='colored'/>
    </div>
  )
}

export default Countries
