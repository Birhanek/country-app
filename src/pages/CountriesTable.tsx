import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { IconButton, Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/countryDataMaintainer/hooks';
import { getAllCountries } from '../app/dataService/countryAPI';
import CountryData from '../components/country/CountryData';
import Loading from '../components/sideFeatures/Loading';
import { sortByCountryName, sortByPopulation } from '../features/country/countrySlice';

const CountriesTable = () => {
    const dispatch = useAppDispatch()
    const {countryState,isLoading,isError,message, searchQuery } = useAppSelector(state=>state.country)
    const [page,setPage] = useState<number>(0);
    const [dataPerPage, setDataPerPage] = useState<number>(5)
    const [isSortedByPopulation, setIsSortedByPopulation] = useState(false)
    const [isSortedByCountryName, setIsSortedByCountryName] = useState(false)
  
    const indexOfLastData = page * dataPerPage + dataPerPage
    const indexOfFirstData = page * dataPerPage
    const countries = countryState.slice(indexOfFirstData,indexOfLastData)
  
  
   const handleChangePage = (event:unknown, newPage:number) => {
    setPage(newPage)
   }

   const handlePagesPerRow = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setDataPerPage(+event.target.value)
    setPage(0)
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
    }).map((country,index)=><CountryData key={index} index = {index}  country = {country}/>)
  
  
    return (
        <Paper sx={{width:'100%', overflow: 'hidden'}} elevation={3} >
            {
                isLoading ? <Loading/> : 
                isError ? <p style={{background:"green",fontSize:"2rem"}}>{message}</p> :
                <TableContainer sx={{maxWidth:'100%'}}>
                <TableHead >
                    <TableRow sx={{width:'100%'}}>
                        <TableCell sx={{fontSize:15}} colSpan={2}>Flag</TableCell>
                        <IconButton onClick={sortingByNameOfCountry}><TableCell sx={{fontSize:20}} colSpan={1}>Name {isSortedByCountryName ? <ArrowCircleDown/> : <ArrowCircleUp/>}</TableCell></IconButton>
                        <TableCell sx={{fontSize:15}} >Region</TableCell>
                        <IconButton onClick={sortingByPopulation}><TableCell sx={{fontSize:10}} >Population {isSortedByPopulation ? <ArrowCircleDown/> : <ArrowCircleUp/>}</TableCell></IconButton>
                        <TableCell sx={{fontSize:15}}>Languages</TableCell>
                        <TableCell sx={{fontSize:10}}></TableCell>
                        <TableCell sx={{fontSize:10}}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        countryState && dataTable
                    }
                </TableBody>
            </TableContainer>
            }
            <TablePagination
            rowsPerPageOptions={[5,10,15]}
            component="div"
            count={countryState.length}
            rowsPerPage={dataPerPage}
            page={page}
            onPageChange ={handleChangePage}
            onRowsPerPageChange ={handlePagesPerRow}
            />
           
            
            
        </Paper>
    )
}

export default CountriesTable