import React from 'react';
import { Link } from 'react-router-dom';
import './Fundraiser.css';

function Fundraiser() {
  const goalAmount = 500000; // Example goal in INR
  const raisedAmount = 320000; // Example raised amount in INR
  const progress = (raisedAmount / goalAmount) * 100;

  return (
    <div className="fundraiser-page">
      {/* Hero Section with Background Video */}
      <section className="fundraiser-hero">
      <video autoPlay muted loop className="hero-video">
  <source src="/videos/4443742-hd_1920_1080_25fps.mp4" type="video/mp4" />
  <source src="/videos/4443742-hd_1920_1080_25fps.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>

        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Support Anandwan</h1>
          <p>Help us empower marginalized communities with your generous contribution</p>
          <Link to="#donate" className="btn btn-donate">Donate Now</Link>
        </div>
      </section>

      {/* Fundraiser Info */}
      <section className="fundraiser-info">
        <div className="container">
          <h2 className="section-title">Our Current Fundraiser</h2>
          <div className="info-content">
            <div className="info-text">
              <h3>Building a New Rehabilitation Center</h3>
              <p>
                Your donation will help us construct a state-of-the-art rehabilitation center to provide healthcare, vocational training, and dignified living for individuals affected by leprosy and disabilities.
              </p>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="progress-details">
                <span>Raised: ₹{raisedAmount.toLocaleString()}</span>
                <span>Goal: ₹{goalAmount.toLocaleString()}</span>
              </div>
            </div>
            <div className="info-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYotzCAPH54FcfEBZ7whQ7JLepag7npm9Qdw&s" alt="Rehabilitation Center" />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate" className="donation-options">
        <div className="container">
          <h2 className="section-title">Choose Your Donation</h2>
          <div className="donation-grid">
            <div className="donation-card">
              <h3>₹500</h3>
              <p>Provides medical supplies for one patient for a month.</p>
              <button className="btn btn-donate-card">Donate</button>
            </div>
            <div className="donation-card">
              <h3>₹1000</h3>
              <p>Funds vocational training for one individual.</p>
              <button className="btn btn-donate-card">Donate</button>
            </div>
            <div className="donation-card">
              <h3>₹5000</h3>
              <p>Supports a family’s livelihood for a month.</p>
              <button className="btn btn-donate-card">Donate</button>
            </div>
            <div className="donation-card custom-donation">
              <h3>Custom Amount</h3>
              <input type="number" placeholder="Enter amount (₹)" />
              <button className="btn btn-donate-card">Donate</button>
            </div>
          </div>
        </div>
      </section>

      {/* Donor Testimonials */}
      <section className="donor-testimonials">
        <div className="container">
          <h2 className="section-title">What Our Donors Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Donating to Anandwan feels like being part of a family that truly cares. I’ve seen the impact firsthand."</p>
              <div className="testimonial-author">
                <div>
                  <h4>Priya Sharma</h4>
                  <p>Donor since 2020</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Every rupee counts here. I’m proud to support a cause that transforms lives."</p>
              <div className="testimonial-author">
                <div>
                  <h4>Rahul Desai</h4>
                  <p>Donor since 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h2>Be the Change</h2>
          <p>Your support can make a lasting difference in the lives of thousands.</p>
          <Link to="#donate" className="btn btn-cta">Donate Now</Link>
        </div>
      </section>
    </div>
  );
}

export default Fundraiser;