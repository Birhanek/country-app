import React from 'react';
import { Paper } from '@mui/material';

// project specific imports
import './App.css';
import CountryIndex from './routes/CountryIndex';

function App() {
  return (
      <Paper elevation={3} sx={{flexGrow:1,paddingX:1,marginTop:1}}>
        <CountryIndex/>
      </Paper>
  );
}

export default App;
