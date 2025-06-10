import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Lordvine</h2>
          <p>Crafting digital experiences.</p>
        </div>

        <div className="subscribe-section">
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit">Subscribe</button>
          </form>

          <nav className="footer-links" aria-label="Footer Navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/lordvine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://linkedin.com/in/lordvine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Lordvine. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
