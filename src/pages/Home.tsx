import React from 'react'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import Country from './Country'

const Home = () => {
  return (
    <div className='container'>
        <Header/>
        <Country/>
        <Footer/>
    </div>
  )
}

export default Home
