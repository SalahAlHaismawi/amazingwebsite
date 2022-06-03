// @ts-nocheck

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import React from 'react';
import Home from './routes/Home.js';

import Newsletter from 'components/Newsletter';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
