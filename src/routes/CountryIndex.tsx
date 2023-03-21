import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from '../pages/Country'
import Countries from '../pages/Countries'

// project specific import 
import Favorite from '../pages/Favorite'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

const CountryIndex = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/countries' element ={<Countries/>}/>
            <Route path='/countries/:name' element={<Country/>}/>
            <Route path='/favorite' element = {<Favorite/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default CountryIndex
