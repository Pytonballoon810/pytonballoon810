import React from 'react';
import { SkillItem } from './SkillItem';

interface Skill {
  name: string;
  level: number;
}

interface SkillsGroupProps {
  title: string;
  skills: Skill[];
}

export const SkillsGroup: React.FC<SkillsGroupProps> = ({ title, skills }) => {
  return (
    <div className="skills-group">
      <h3 className="skills-group-title">{title}</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem 
            key={index} 
            name={skill.name} 
            level={skill.level} 
          />
        ))}
      </div>
    </div>
  );
};