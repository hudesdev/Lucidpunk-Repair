import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import InitPage from './Pages/InitPage';
import Goto from './Component/Goto';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Goto/>
      <Routes>
        <Route path='/' element = {<InitPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
