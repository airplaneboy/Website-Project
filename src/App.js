import React from 'react';
import { Navbar } from './components';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from '@mui/material';
import { Footer, Header } from './containers';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Theme from './theme';
import { Main, Home, Contact, Testimonials, About, Courses, FAQ, Subject, Topics, Profile, Error } from './pages';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <IconContext.Provider value={{ size: '2em', verticalAlign: 'middle' }}>
          <div className='App'>
            <Navbar></Navbar>
            <Header></Header>
            {/* <Main></Main> */}
            <Routes>
              <Route path='/' element={<Main />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/courses' element={<Courses />}></Route>
              <Route path='/FAQ' element={<FAQ />}></Route>
              <Route path='/main/' element={<Main />}></Route>
              <Route path='/main/:id' element={<Main />}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/subject' element={<Subject />}></Route>
              <Route path='/testimonials' element={<Testimonials />}></Route>
              <Route path='/topics' element={<Topics />}></Route>
              <Route path='*' element={<Error />}></Route>
            </Routes>
            <Footer></Footer>
          </div>
        </IconContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
