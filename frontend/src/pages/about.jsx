import React from 'react';
import './about.css';
import aboutImage from '../assets/about-image.png'; // Replace with your actual image path

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-text left-text">
          <h2>Who I Am</h2>
          <p>
            I’m Lordvine, a passionate developer with expertise in crafting elegant web solutions.
            I specialize in both frontend and backend development, always aiming to deliver
            user-friendly, efficient, and beautiful digital experiences.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="Lordvine Developer Portrait" />
        </div>

        <div className="about-text right-text">
          <h2>What I Do</h2>
          <p>
            From conceptualizing ideas to building full-stack applications, I bring
            creativity and technical skill together to solve real-world problems.
            Collaboration and innovation are at the heart of everything I create.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
