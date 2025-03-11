import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Tours from './Pages/Tours/Tours';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/tour' element={<Tours />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App