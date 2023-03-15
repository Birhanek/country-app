import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:'center',paddingX:1,mt:35}}>
        Loading .....
      <CircularProgress/>
    </Box>
  )
}

export default Loading
