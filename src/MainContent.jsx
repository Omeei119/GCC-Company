import React from 'react';
import "./App.css";
import BusinessInfo from './BusinessInfo';
import Products from './Products';

const MainContent = () => (
    <div className="main-content-wrapper">
    <main className="content">
      <div className="card-grid">
        <div className="card"><img src="img/EV-1.jpg" alt="Auto 1" /></div>
        <div className="card"><img src="img/EV-2.jpg" alt="Auto 2" /></div>
        <div className="card"><img src="img/EV-3.jpg" alt="Auto 3" /></div>
      </div>
    </main>
    {/* <BusinessInfo /> */}
    {/* <Products /> */}
    </div>
);

export default MainContent;