import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Component/Header';
import Footer from './Component/Footer';
import InitPage from './Pages/InitPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<InitPage/>} />    
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
