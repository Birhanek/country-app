import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from '../pages/Country'


// project specific import 
import Favorite from '../pages/Favorite'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'
import { Paper } from '@mui/material'
import CountriesTable from '../pages/CountriesTable'
import { ToastContainer } from 'react-toastify'




const CountryIndex = () => {
  
  return (
    <Paper elevation={3} sx={{flexGrow:1,paddingX:1,marginTop:1}}>
        <BrowserRouter>
        <ToastContainer autoClose={500} theme='colored' hideProgressBar={true}/>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/countries' element ={<CountriesTable/>}/>
                <Route path='/countries/:name' element={<Country/>}/>
                <Route path='/favorite' element = {<Favorite/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </Paper>
     
  )
}

export default CountryIndex
