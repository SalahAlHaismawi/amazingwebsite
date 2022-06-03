// @ts-nocheck

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import React from 'react';
import Home from './routes/Home.js';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Newsletter from 'components/Newsletter';
import Cards from 'components/Cards';
import Footer from 'components/Footer';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
       
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;
