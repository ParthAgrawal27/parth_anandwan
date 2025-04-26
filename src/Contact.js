import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get in Touch with Anandwan</h1>
          <p>We’d love to hear from you! Reach out to join our mission or seek assistance.</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <h2 className="section-title">Send Us a Message</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Your Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="location-content">
            <div className="location-details">
              <h3>Anandwan Ashram</h3>
              <p>
                <strong>Address:</strong> Anandwan, Warora, Chandrapur District, Maharashtra 442914, India
              </p>
              <p><strong>Phone:</strong> +91 7176 282 034</p>
              <p><strong>Email:</strong> contact@anandwan.org</p>
              <p><strong>Visiting Hours:</strong> Monday - Saturday, 9:00 AM - 5:00 PM</p>
            </div>
            <div className="location-map">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.576829698231!2d79.62097461414895!3d20.23386588642764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4a5e5f5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAnandwan!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Anandwan Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="additional-contact">
        <div className="container">
          <h2 className="section-title">More Ways to Connect</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon email-icon"></div>
              <h3>Email Us</h3>
              <p>contact@anandwan.org</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon phone-icon"></div>
              <h3>Call Us</h3>
              <p>+91 7176 282 034</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon social-icon"></div>
              <h3>Follow Us</h3>
              <p>
                <a href="https://facebook.com/anandwan" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://twitter.com/anandwan" target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;