import React from 'react';
import './app.css';
import { Navbar } from './components';
import { IconContext } from 'react-icons/lib';
import Theme from './theme';

import { ThemeProvider } from '@mui/material';

import { Footer, Header, Main } from './containers';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <IconContext.Provider value={{ size: '2em', verticalAlign: 'middle' }}>
          <div className='App'>
            <Navbar></Navbar>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
          </div>
        </IconContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
