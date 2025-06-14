import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import BusinessInfo from "./BusinessInfo";
import Products from "./Products";
import Contact from "./Contact";
import Ratings from "./Ratings";
import Footer from "./Footer";
import "./App.css"; // Global CSS


export default function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="main-content-wrapper">
          <MainContent />
          <BusinessInfo />
          <Products />
        </div>
      </div>
      <Contact />
      <Ratings />
      <Footer />
    </div>
  );
}