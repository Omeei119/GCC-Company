import React from 'react';
import "./App.css";

const Products = () => (
      <section className="products-section">
        <h2>Products & Services</h2>
        <div className="products-container">
          
          <div className="product-card">
            <img src="img/EV-1.jpg" alt="Electric Rickshaw" />
            <h3>Electric Rickshaw</h3>
            <p>Eco-friendly electric rickshaw designed for city transport, offering high mileage and comfort.</p>
          </div>
      
          <div className="product-card">
            <img src="img/EV-1.jpg" alt="Passenger E-Rickshaw" />
            <h3>Passenger E-Rickshaw</h3>
            <p>Spacious and efficient, ideal for daily passenger commute with enhanced safety features.</p>
          </div>
      
          <div className="product-card">
            <img src="img/EV-1.jpg" alt="Cargo E-Rickshaw" />
            <h3>Cargo E-Rickshaw</h3>
            <p>Sturdy build for heavy loads, designed to streamline local delivery operations efficiently.</p>
          </div>
      
          <div className="product-card">
            <img src="img/EV-1.jpg" alt="Battery Solutions" />
            <h3>Battery Solutions</h3>
            <p>Long-lasting and quick-charging batteries for electric vehicles, ensuring continuous operation.</p>
          </div>
        </div>
      </section>
);

export default Products;