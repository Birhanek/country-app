import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import NavBar from '../components/layout/NavBar'
import Countries from './Countries'

const Home = () => {
  return (
    <div className='container'>
        <NavBar/>
        <Header/>
        <Countries/>
        <Footer/>
    </div>
  )
}

export default Home
