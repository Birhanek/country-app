import React from 'react'
import { Container } from '@mui/material'
import Header from '../components/layout/Header'
import Countries from './Countries'

const Home = () => {
  return (
    <Container component="div" maxWidth="lg" sx={{display:'flex',flexDirection:'column',gap:3}}>
        <Header/>
        <Countries/>
    </Container>
  )
}

export default Home
