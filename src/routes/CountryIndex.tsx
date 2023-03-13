import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Country from '../pages/Country'
import Countries from '../pages/Countries'

// project specific import 
import Favorite from '../pages/Favorite'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'

const CountryIndex = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/countries' element ={<Countries/>}/>
            <Route path='/countries/:name' element={<Country/>}/>
            <Route path='/favorite' element = {<Favorite/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default CountryIndex
