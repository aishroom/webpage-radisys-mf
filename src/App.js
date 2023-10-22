import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/';
import Hero from './components/Hero';
import Info from './components/Info';
import Footer from './components/Footer';
import Services from './components/Services';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>        
          <Route path="/" element={<div><Hero /><Info /><Services /></div>} />
          <Route path="/" element={<Hero />} />
          <Route path="/info" element={<Info />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
