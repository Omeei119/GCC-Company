import React from 'react';
import "./App.css";

const Header = () => (
  <header className="site-header">
    <div className="logo">
      <img src="img/Company_logo.jpg.jpg" alt="Omeei's Logo" />
      <span className="company-name">GreenCharge Company</span>
    </div>
    <nav className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="mailto:omeei@example.com" className="btn">Email</a>
      <a href="tel:+911234567890" className="btn">Call Us</a>
    </nav>
  </header>
);

export default Header;