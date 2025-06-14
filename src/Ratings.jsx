import React from 'react';
import "./App.css";

const Ratings = () => (
<section className="ratings-section">
    <h2>Ratings & Reviews</h2>
    <div className="ratings-container">
  
      <div className="overall-rating">
        <div className="rating-score">
          <span className="score">4.8</span><span className="out-of">/5</span>
        </div>
        <div className="stars">★★★★★</div>
        <div className="reviews-count">Reviewed by 20 Users</div>
      </div>
  
      <div className="ratings-breakdown">
        <div className="rating-bar">
          <span>5★</span>
          <div className="bar"><div style={{ width: '70%' }}></div></div>
          <span>70%</span>
        </div>
        <div className="rating-bar">
          <span>4★</span>
          <div className="bar"><div style={{ width: '20%' }}></div></div>
          <span>20%</span>
        </div>
        <div className="rating-bar">
          <span>3★</span>
          <div className="bar"><div style={{ width: '10%' }}></div></div>
          <span>10%</span>
        </div>
        <div className="rating-bar">
          <span>2★</span>
          <div className="bar"><div style={{ width: '0%' }}></div></div>
          <span>0%</span>
        </div>
        <div className="rating-bar">
          <span>1★</span>
          <div className="bar"><div style={{ width: '0%' }}></div></div>
          <span>0%</span>
        </div>
      </div>

      <div className="user-satisfaction">
        <h4>👍 User Satisfaction</h4>
        <div className="satisfaction-bar">
          <span>Response</span>
          <div className="bar"><div style={{ width: '100%' }}></div></div>
          <span>100%</span>
        </div>
        <div className="satisfaction-bar">
          <span>Quality</span>
          <div className="bar"><div style={{ width: '100%' }}></div></div>
          <span>100%</span>
        </div>
      </div>

  
    </div>
  </section>
);

export default Ratings;