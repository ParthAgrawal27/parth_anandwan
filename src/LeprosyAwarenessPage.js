import React from 'react';
import './LeprosyAwarenessPage.css'; // Import the CSS file

const LeprosyAwarenessPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner">
        <h1>Understanding Leprosy</h1>
        <p>Awareness, Facts, and Anandwan's Role in Treatment & Rehabilitation</p>
      </div>

      {/* Introduction Section */}
      <section className="section">
        <h2>What is Leprosy?</h2>
        <p>
          Leprosy, also known as Hansen's disease, is a chronic infectious disease caused by 
          <em>Mycobacterium leprae</em>. It primarily affects the skin, peripheral nerves, 
          mucosa of the upper respiratory tract, and eyes.
        </p>
        <p>
          Contrary to common myths, leprosy is not highly contagious. It spreads through 
          droplets from the nose and mouth during close and frequent contact with untreated cases. 
          With early diagnosis and modern treatment, leprosy is completely curable.
        </p>
      </section>

      {/* Breaking the Myths */}
      <section className="myths-facts-container">
        <div className="myths">
          <h3>Common Myths</h3>
          <ul>
            <li><strong>Myth:</strong> Leprosy is highly contagious.</li>
            <li><strong>Myth:</strong> Leprosy causes body parts to fall off.</li>
            <li><strong>Myth:</strong> Leprosy is a curse or punishment for sins.</li>
            <li><strong>Myth:</strong> Leprosy is incurable.</li>
          </ul>
        </div>

        <div className="facts">
          <h3>The Reality</h3>
          <ul>
            <li><strong>Fact:</strong> Leprosy is one of the least contagious infectious diseases.</li>
            <li><strong>Fact:</strong> Disabilities happen due to nerve damage, not the disease itself.</li>
            <li><strong>Fact:</strong> Leprosy is caused by bacteria, not sins or curses.</li>
            <li><strong>Fact:</strong> Leprosy is completely curable with Multi-Drug Therapy (MDT).</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Support the Fight Against Leprosy</h2>
        <p>Spread awareness, support those affected, and help eliminate the stigma around leprosy.</p>
        <a href="#" className="cta-button">Get Involved</a>
      </section>
    </div>
  );
};

export default LeprosyAwarenessPage;
