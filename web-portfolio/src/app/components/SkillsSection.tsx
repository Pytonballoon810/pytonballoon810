import React from 'react';
import { SkillsGroup } from './SkillsGroup';

export const SkillsSection: React.FC = () => {
  const programmingLanguages = [
    { name: 'JavaScript', level: 5 },
    { name: 'HTML/CSS', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'React/NEXT Js', level: 5 },
    { name: 'SSH', level: 4 },
    { name: 'NodeJS', level: 3 },
    { name: 'C', level: 2 },
    { name: 'Rust', level: 2 },
    { name: 'ASM', level: 1 },
    { name: 'PHP', level: 1 }
  ];

  const services = [
    { name: 'Excel', level: 4 },
    { name: 'PowerPoint', level: 3 },
    { name: 'PostgresSQL', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'NGINX / SWAG', level: 4 },
    { name: 'Server / Service Management', level: 5 }
  ];

  const languages = [
    { name: 'German', level: 5 },
    { name: 'Englisch', level: 4 },
    { name: 'AI (Prompting)', level: 4 },
    { name: 'French', level: 1 }
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <SkillsGroup title="Programming Languages" skills={programmingLanguages} />
      <SkillsGroup title="Services" skills={services} />
      <SkillsGroup title="Spoken/Written Languages" skills={languages} />
    </div>
  );
};