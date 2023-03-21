import React from 'react'
import { Box, Typography } from '@mui/material'


const Footer = () => {
  return (
    <Box sx={{p:2,textAlign:"center",boxShadow:3,bgcolor:(theme)=>(theme.palette.mode ==='dark'?'#101010':'#fff')}}>
      <Typography component="h3" variant='h3' sx={{color:(theme)=>theme.palette.mode === 'dark' ? 'grey.300':'grey.900',fontStyle:"italic"}}>
        A country finder web app done using <strong>MUI, Redux toolkit, TypeScript & React</strong>. in {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}

export default Footer
