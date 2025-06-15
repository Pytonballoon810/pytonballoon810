import React from 'react';
import { HobbyItem } from "./HobbyItem";

export const HobbiesSection: React.FC = () => {
  const hobbies = [
    "Mixing and Mastering / Creating Music", "Listening to Music", "Programming",
    "Product Design", "3D Modelling", "3D Printing", "Soldering", "PCB Design",
    "Server Administration", "Smart Home", "Open Source"
  ];

  return (
    <div className="hobbies-section">
      <h2>Hobbies</h2>
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <HobbyItem key={index} hobby={hobby} />
        ))}
      </div>
    </div>
  );
};