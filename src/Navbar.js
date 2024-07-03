import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/Logo.svg'; // Ensure this path is correct

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <header className="App-header">
        <div>
        <img src={Logo} alt="Task Elephants Logo" className="logo" />
        <div className="menu-toggle" onClick={toggleMenu}>
        <img src={Logo} alt="Task Elephants Logo" className="logo" />
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
        <div className="menu-icon"></div>
      </div>
        </div>
      <div className={`right-navbar ${isOpen ? 'active' : ''}`}>
        <div><Link to="/about" className='nav-link' onClick={toggleMenu}>About</Link></div>
        <div><Link to="/our-product" className='nav-link' onClick={toggleMenu}>Our Product</Link></div>
      </div>
      </header>
    </nav>
  );
}
