import { Paper } from '@mui/material';
import React from 'react';

// project specific imports
import './App.css';
import CountryIndex from './routes/CountryIndex';

function App() {
  return (
      <Paper elevation={3} sx={{flexGrow:1,paddingX:1}}>
        <CountryIndex/>
      </Paper>
  );
}

export default App;
