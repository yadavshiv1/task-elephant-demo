import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import WhatWeDo from './WhatWeDo';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WhatWeDo />} />
          <Route path="/our-product" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
