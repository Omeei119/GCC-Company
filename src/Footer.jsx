import React from 'react';
import "./App.css";

const Footer = () => (
<footer className="site-footer">
    <div className="footer-container">
      <div className="footer-about">
        <h3>Your Company</h3>
        <p>Providing quality electric vehicles since 2023. Driven by innovation and sustainability.</p>
      </div>
      
      <div className="footer-links">
        <h4>Quick Links</h4>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
  
      <div className="footer-social">
        <h4>Follow Us</h4>
        <a href="#" title="Facebook">🔵 Facebook</a><br />
        <a href="#" title="Instagram">📸 Instagram</a><br />
        <a href="#" title="LinkedIn">💼 LinkedIn</a>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;