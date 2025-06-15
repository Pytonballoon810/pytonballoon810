import React from 'react';

interface EducationItemProps {
  period: string;
  location: string;
  degree: string;
  institution: string;
  details?: string[];
}

export const EducationItem: React.FC<EducationItemProps> = ({ 
  period, 
  location, 
  degree, 
  institution, 
  details = [] 
}) => {
  return (
    <div className="education-item">
      <div className="education-header">
        <span className="period">{period}</span>
        <span className="location">{location}</span>
      </div>
      <h3 className="degree">{degree}</h3>
      <h4 className="institution">{institution}</h4>
      {details.length > 0 && (
        <ul className="education-details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
