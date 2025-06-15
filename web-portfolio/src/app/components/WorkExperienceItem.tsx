import React from 'react';

interface WorkExperienceItemProps {
  period: string;
  location: string;
  position: string;
  company: string;
  responsibilities: string[];
}

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  period = "10/2023 – present",
  location = "Forchheim, Bavaria",
  position = "Working Student IT",
  company = "Siemens Healthineers",
  responsibilities = [
    "Completed a rigorous course load focused on Computer Science, effectively balancing academic responsibilities while engaging in extracurricular activities, which supported my overall development and time management skills.",
    "Led a team project to develop a mobile application for campus life, receiving positive feedback from over 200 users, which significantly enhanced community engagement and connection among students.",
    "Organized and hosted a tech workshop that attracted 50 students, fostering a collaborative learning environment and bridging gaps in coding knowledge, which helped participants gain confidence in their skills.",
    "Conducted research on machine learning algorithms, culminating in a paper published in a student-led journal, which contributed to a deeper understanding of the subject among peers and promoted academic discourse."
  ]
}) => {
  return (
    <div className="work-experience-item">
      <div className="work-header">
        <span className="period">{period}</span>
        <span className="location">{location}</span>
      </div>
      <h3 className="position">{position}</h3>
      <h4 className="company">{company}</h4>
      <ul className="responsibilities">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};
