// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-JSFGNHy_Hl7nabU8pxmaNQ8oUJ-Yhp1jA&s"
            alt="Anandwan"
          />
          Anandwan
        </Link>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/awareness">Awareness</Link>
          <Link to="/fundraiser">Fundraiser</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/awareness" onClick={() => setIsMenuOpen(false)}>Awareness</Link>
          <Link to="/fundraiser" onClick={() => setIsMenuOpen(false)}>Fundraiser</Link>
          <Link to="/videos" onClick={() => setIsMenuOpen(false)}>Videos</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
