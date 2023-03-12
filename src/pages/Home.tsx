import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import NavBar from '../components/layout/NavBar'
import Country from './Country'

const Home = () => {
  return (
    <div className='container'>
        <NavBar/>
        <Header/>
        <Country/>
        <Footer/>
    </div>
  )
}

export default Home
