import React from 'react'
import { Container } from '@mui/material'
import Header from '../components/layout/Header'
import CountriesTable from './CountriesTable'

const Home = () => {
  return (
    <Container component="div" maxWidth="lg" sx={{display:'flex',flexDirection:'column',gap:3}}>
        <Header/>
        <CountriesTable/>
    </Container>
  )
}

export default Home
