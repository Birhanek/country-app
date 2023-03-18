import React from 'react'
import { Container } from '@mui/material'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import NavBar from '../components/layout/NavBar'
import Countries from './Countries'

const Home = () => {
  return (
      <Container component="div" maxWidth="lg" sx={{display:'flex',flexDirection:'column',gap:3}}>
        <NavBar/>
        <Header/>
        <Countries/>
        <Footer/>
    </Container>
  )
}

export default Home
