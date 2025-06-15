import React from 'react';

interface SkillItemProps {
  name: string;
  level: number;
}

export const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}/5</span>
    </div>
  );
};
