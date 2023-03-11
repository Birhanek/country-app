import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// project specific import 
import Favorite from '../pages/Favorite'
import Home from '../pages/Home'

const CountryIndex = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/favorite' element = {<Favorite/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default CountryIndex
