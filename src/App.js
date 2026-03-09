import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LeprosyAwarenessPage from './LeprosyAwarenessPage';
import Fundraiser from './Fundraiser';
import Videos from './Videos';
import Billing from './Billing';

function App() {
  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awareness" element={<LeprosyAwarenessPage />} />
            <Route path="/fundraiser" element={<Fundraiser />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/billing" element={<Billing />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
