import React from 'react';
import './home.css';
import '../components/Chatbot.css';
import Chatbot from '../components/Chatbot';

import heroImage from '../assets/welcome.jpg';
import marketingImage from '../assets/2.jpg';
import webdevImage from '../assets/1.jpg';
import projectImage from '../assets/project.jpg';
import backgroundImage from '../assets/background.jpg';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              WELCOME<br />
              <span className="highlight">I'M LORDVINE, A DEVELOPER</span>
            </h1>
            <p>
              Discover a world of creativity, innovation, and modern tech solutions.
              At Lordvine Tech, I turn ideas into digital reality—whether it's frontend magic,
              backend logic, or complete web solutions. Dive in and explore my work!
            </p>
            <a href="/projects" className="cta-button">View My Work</a>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Welcome banner" />
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section
        className="contact-preview"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h2>Let’s Connect</h2>
        <div className="preview-grid">
          <div className="preview-item">
            <img src={marketingImage} alt="Marketing Quotes" />
            <p>“Make it simple. Make it memorable. Make it inviting to look at.”</p>
          </div>
          <div className="preview-item">
            <img src={webdevImage} alt="Web Development" />
            <p>“Great web design without functionality is like a sports car with no engine.”</p>
          </div>
          <div className="preview-item">
            <img src={projectImage} alt="Collaboration" />
            <p>
              Got a cool project, collaboration idea, or just want to say hi?<br />
              <a href="/contact" className="cta-button">Get in Touch</a>
            </p>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}

export default Home;
