// components/HeroSection.tsx
import React from "react";
import "./HeroSection.css"; // CSS file for styling

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">
          Expand Your Mind, Elevate Your Future.
        </h1>
        <a href="#signup" className="cta-button">
          Sign up for free
        </a>
        <p className="hero-text">
          Make study easier and more effective.
          <br />
          Make studying feel like scrolling, not school work.
          <br />
          Turn learning into a game you actually enjoy playing.
        </p>
        <a href="#lesson" className="cta-button secondary">
          Unlock your lesson for free
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
