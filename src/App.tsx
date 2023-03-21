import React, { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

// project specific imports
import './App.css';
import CountryIndex from './routes/CountryIndex';

export const SwitcherThemeContext = createContext({ toggleColorMode: () => {} })
function App() {
 
const [mode,setMode] = useState<'dark'|'light'>('light')
const colorSwitcher = useMemo(() => ({
    toggleColorMode: () => {
      setMode((preMode)=>(preMode === 'light'?'dark':'light'))
    }
  }),[])

  const modeTheme = useMemo(()=>createTheme({
    palette:{
      mode,
    },
  }),[mode])
  return (
    <SwitcherThemeContext.Provider value={colorSwitcher}>
      <ThemeProvider theme={modeTheme}>
          <CountryIndex/>
      </ThemeProvider>
    </SwitcherThemeContext.Provider>
  );
}

export default App;
