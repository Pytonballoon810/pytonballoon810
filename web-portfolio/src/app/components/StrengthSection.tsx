import React from 'react';
import { StrengthItem } from "./StrengthItem";

export const StrengthSection: React.FC = () => {
  const strengths = [
    "DIY", "Electronics", "Programming", "Creative thinking", "Soldering",
    "Hands-on Learner", "Solution oriented", "Determination", "Open minded",
    "SMD/THT Soldering", "PCB Design"
  ];

  return (
    <div className="strength-section">
      <h2>Strengths</h2>
      <div className="strengths-list">
        {strengths.map((strength, index) => (
          <StrengthItem key={index} strength={strength} />
        ))}
      </div>
    </div>
  );
};