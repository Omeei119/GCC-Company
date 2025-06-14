import React from 'react';
import "./App.css";
import MainContent from './MainContent';

const Sidebar = () => (
      <div className="main-container">
<aside className="sidebar">
      <nav className="side-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <input type="text" placeholder="Search..." className="search-bar"/>
    </aside>
    {/* <MainContent /> */}
    </div>
);

export default Sidebar;