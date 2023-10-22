import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/';
import Hero from './components/Hero';
import Info from './components/Info';
import Footer from './components/Footer';
import Services from './components/Services';
import Form from './components/Form';
// import Call from './components/Call';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<div><Hero /><Info /><Services /></div>} />
          <Route path="/form" element={<Form />} />
          <Route path="services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
