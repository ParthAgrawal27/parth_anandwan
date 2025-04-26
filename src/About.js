import React, { useEffect } from 'react';
import './Styles.css';

function About() {
  // Add animation effect when scrolling
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center about-title">About Anandwan</h1>
      
      {/* History Section */}
      <section className="mb-16 history-section">
        <h2 className="text-2xl font-bold mb-6 text-green-700 section-header">Our History</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">Anandwan was founded in 1949 by social activist and humanitarian Murlidhar Devidas Amte, affectionately known as Baba Amte. What began as a small rehabilitation center for those affected by leprosy has grown into a thriving community and a model for sustainable development.</p>
            <p className="mb-4">With the vision "Charity destroys, work builds," Baba Amte created a self-sufficient community where people were empowered through dignity of labor and self-reliance rather than mere charity.</p>
            <p>Today, Anandwan stands as a testament to what marginalized communities can achieve when given opportunities, respect, and the right support systems.</p>
          </div>
          <div className="flex justify-center">
            {/* Replace with actual historical image */}
            <img src="https://live.staticflickr.com/3596/3309051462_f11e61e315_b.jpg" alt="Anandwan History" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-green-700 section-header">Our Mission & Vision</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="mission-vision p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p>To create an inclusive community where individuals marginalized by society due to disabilities, illness, or socioeconomic factors find dignity, purpose, and opportunities for self-reliance through constructive work.</p>
          </div>
          <div className="mission-vision p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p>A world where every individual, regardless of their physical or social condition, has access to healthcare, education, and opportunities to contribute meaningfully to society, leading to self-sufficient and sustainable communities.</p>
          </div>
        </div>
      </section>
      
      {/* Founder */}
      <section className="mb-16 founder-section">
        <h2 className="text-2xl font-bold mb-6 text-green-700 section-header">Our Founder</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            {/* Replace with actual image of Baba Amte */}
            <img src="https://i.pinimg.com/736x/26/58/49/265849d3ebec6715bd503d2caba49cf1.jpg" alt="Baba Amte" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Baba Amte (1914-2008)</h3>
            <p className="mb-4">Murlidhar Devidas Amte, known as Baba Amte, was a noted social worker and social activist known particularly for his work for the rehabilitation and empowerment of people suffering from leprosy.</p>
            <p className="mb-4">He dedicated his life to serving the marginalized and believed in the philosophy that compassion alone is not enough; it must be accompanied by action. His work earned him numerous accolades including the Ramon Magsaysay Award, the Templeton Prize, and the Gandhi Peace Prize.</p>
            <p>His legacy lives on through his sons, Vikas and Prakash Amte, who continue to lead the work at Anandwan and its satellite projects.</p>
          </div>
        </div>
      </section>
      
      {/* Our Work */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-green-700 section-header">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="work-card p-6">
            <h3 className="text-xl font-bold mb-4">Healthcare</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Comprehensive rehabilitation for leprosy patients</li>
              <li>General hospital serving the community</li>
              <li>Eye hospital providing free cataract surgeries</li>
              <li>Care centers for differently-abled individuals</li>
              <li>Mobile medical units for remote villages</li>
            </ul>
          </div>
          <div className="work-card p-6">
            <h3 className="text-xl font-bold mb-4">Education & Empowerment</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Schools for children with special needs</li>
              <li>Vocational training centers</li>
              <li>Agriculture training programs</li>
              <li>Cultural activities and sports</li>
              <li>Women's empowerment initiatives</li>
            </ul>
          </div>
          <div className="work-card p-6">
            <h3 className="text-xl font-bold mb-4">Sustainability</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Organic farming practices</li>
              <li>Renewable energy projects</li>
              <li>Water conservation efforts</li>
              <li>Afforestation programs</li>
              <li>Sustainable handicraft production</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-green-700 section-header">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center leader-card">
            {/* Replace with actual image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENufW0h3eX8OYKDWRkwuShyBtZ2unQKG5vg&s" alt="Dr. Vikas Amte" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Dr. Vikas Amte</h3>
            <p className="text-gray-600">Secretary General</p>
          </div>
          <div className="text-center leader-card">
            {/* Replace with actual image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7dvFdmRRJT_HHgdVF27AB6-X9gR8ddOmqQ&s" alt="Dr. Sheetal Amte-Karajgi" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Dr. Sheetal Amte-Karajgi</h3>
            <p className="text-gray-600">Chief Executive Officer</p>
          </div>
          <div className="text-center leader-card">
            {/* Replace with actual image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOdpbhNeGv7KagsGZgkTtVa-PtLPTkiuRYQ&s" alt="Dr. Prakash Amte" className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Dr. Prakash Amte</h3>
            <p className="text-gray-600">Project Director</p>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-green-700 section-header">Gallery</h2>
        <div className="gallery-container">
          {/* Replace with actual images */}
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Anandwan Community" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Medical Services" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Education Programs" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Agricultural Activities" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Community Events" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Handicraft Production" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Rehabilitation Work" />
          </div>
          <div className="gallery-image">
            <img src="/api/placeholder/300/300" alt="Sustainable Initiatives" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;