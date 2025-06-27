import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import appStore from './utils/appStore';
import { Provider } from 'react-redux';
import Login from './pages/Login';

function App() {
  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Fixed Header with Navigation */}
        <Header />
        
        {/* Main Content Area with Routes */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/login"  element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Footer Section */}
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;