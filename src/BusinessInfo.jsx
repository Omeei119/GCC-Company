import React from 'react';
import "./App.css";

const BusinessInfo = () => (
    <section className="business-info">
        <div className="info-box">
          <img src="icons/business.png" alt="Business Icon" />
          <div>
            <p>Nature of Business</p>
            <strong>Manufacturer</strong>
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/employees.png" alt="Employees Icon" />
          <div>
            <p>Total Number of Employees</p>
            <strong>26 to 50 People</strong>
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/calendar.png" alt="GST Date Icon" />
          <div>
            <p>GST Registration Date</p>
            <strong>02-05-2023</strong>
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/legal.png" alt="Legal Icon" />
          <div>
            <p>Legal Status of Firm</p>
            <strong>Limited Company</strong>
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/turnover.png" alt="Turnover Icon" />
          <div>
            <p>Annual Turnover</p>
            <strong>1.5 - 5 Cr</strong>
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/globe.png" alt="IEC Icon" />
          <div>
            <p>Import Export Code (IEC)</p>
            <strong>AAHCE*****</strong>
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/gst.png" alt="GST Icon" />
          <div>
            <p>GST No.</p>
            {/* <strong>27AAHCE4406A1Z5</strong> */}
          </div>
        </div>
      
        <div className="info-box">
          <img src="icons/doc.png" alt="CIN Icon" />
          <div>
            <p>CIN No.</p>
            {/* <strong>U29209PN2023PTC218234</strong> */}
          </div>
        </div>
      </section>
);

export default BusinessInfo;