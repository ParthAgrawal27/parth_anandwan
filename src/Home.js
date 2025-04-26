import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with Background Video */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/videos/3696027-hd_1920_1080_24fps.mp4" type="video/mp4" />
          <source src="/videos/3696027-hd_1920_1080_24fps.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Anandwan</h1>
          <p>A community of hope, rehabilitation, and sustainable living founded by Baba Amte</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/fundraiser" className="btn btn-secondary">Support Us</Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-content">
            <div className="mission-text">
              <p className="quote">"Charity destroys, work builds." - Baba Amte</p>
              <p>
                Anandwan is dedicated to empowering marginalized communities, 
                especially those affected by leprosy, through healthcare, 
                education, and dignified livelihood opportunities.
              </p>
            </div>
            <div className="mission-image">
              <img src="https://img1.rapidleaks.com/2018/01/Baba-Amte-at-Anandwan.jpeg" alt="Anandwan Community" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="impact">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <div className="stat-number">70+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Lives Transformed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Community Centers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">450</div>
              <div className="stat-label">Acres of Land Reclaimed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="focus-areas">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon health-icon"></div>
              <h3>Healthcare</h3>
              <p>Providing medical care and rehabilitation services for leprosy patients and people with disabilities.</p>
            </div>
            <div className="area-card">
              <div className="area-icon education-icon"></div>
              <h3>Education</h3>
              <p>Running schools and vocational training centers for children and adults from marginalized communities.</p>
            </div>
            <div className="area-card">
              <div className="area-icon agriculture-icon"></div>
              <h3>Sustainable Agriculture</h3>
              <p>Developing innovative farming practices and promoting food security through organic methods.</p>
            </div>
            <div className="area-card">
              <div className="area-icon empowerment-icon"></div>
              <h3>Community Empowerment</h3>
              <p>Building self-reliant communities through skill development and income generation activities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Voices from Anandwan</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <p>"Coming to Anandwan gave me dignity and purpose. Here, I am not defined by my disability but by my skills and contributions."</p>
              <div className="testimonial-author">
                <img src="https://images.unsplash.com/photo-1632414237690-7713a79fe9d3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZSUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Testimonial Author" />
                <div>
                  <h4>Ramesh Patil</h4>
                  <p>Resident since 1998</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="get-involved">
        <div className="container">
          <h2>Get Involved</h2>
          <p>Join us in our mission to build an inclusive and self-reliant community.</p>
          <div className="involvement-options">
            <Link to="/fundraiser" className="involvement-card">
              <h3>Donate</h3>
              <p>Support our initiatives with your contribution.</p>
            </Link>
            <Link to="/contact" className="involvement-card">
              <h3>Volunteer</h3>
              <p>Share your skills and time with our community.</p>
            </Link>
            <Link to="/awareness" className="involvement-card">
              <h3>Spread Awareness</h3>
              <p>Help us fight stigma and misinformation.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;