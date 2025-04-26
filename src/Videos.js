import React from "react";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="videos-page">
      {/* Background Section behind Navbar */}
      <div className="video-hero-section">
      <h1 className="hero-title">Our Inspiring Stories</h1>
      <p className="hero-subtitle">Discover the journey, values, and mission of Anandwan through these impactful videos.</p>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h2 className="section-header text-green-700">Watch Our Story</h2>
        </div>

        <div className="videos-grid">
          {/* Video 1 */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/eyGg4FVf6_E"
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/rJhQhOA6Fy8"
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/GB6L2lOMnGE"
              title="Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 4 */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/iqJcIqaEe-U"
              title="Video 4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 5 */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/fhoHeNOZceA"
              title="Video 5"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 6 */}
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/uv6pl9qX6SU"
              title="Video 6"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
