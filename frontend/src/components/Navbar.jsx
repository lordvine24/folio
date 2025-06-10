import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';  // adjust path if needed

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-right">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACTS</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
