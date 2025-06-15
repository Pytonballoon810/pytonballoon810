import React from 'react';
import { ProfileText } from "./ProfileText";

export const HeroSection: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-header">
        <div className="hero-image">
          <img src="/avatar.jpg" alt="Philipp Hofmann" />
        </div>
        <div className="hero-info">
          <h1>Philipp Hofmann</h1>
          <div className="contact-info">
            <p>26.01.2004</p>
            <p>German</p>
            <p>Dietzhof, 104, Leutenbach 91359, DE</p>
            <p>+49 15228629163</p>
            <p>philipp@hofmann-ebs.de</p>
            <p>https://philipp.hofmann-ebs.de</p>
            <p>https://github.com/Pytonballoon810</p>
            <p>Male</p>
          </div>
        </div>
      </div>
      <ProfileText />
    </div>
  );
};