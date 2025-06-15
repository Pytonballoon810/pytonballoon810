import React from 'react';
import { WorkExperienceItem } from "./WorkExperienceItem";

export const WorkExperienceSection: React.FC = () => {
  return (
    <div className="work-experience-section">
      <h2>Work Experience</h2>
      <WorkExperienceItem
        period="10/2023 – present"
        location="Forchheim, Bavaria"
        position="Working Student IT"
        company="Siemens Healthineers"
        responsibilities={[
          "Completed a rigorous course load focused on Computer Science, effectively balancing academic responsibilities while engaging in extracurricular activities, which supported my overall development and time management skills.",
          "Led a team project to develop a mobile application for campus life, receiving positive feedback from over 200 users, which significantly enhanced community engagement and connection among students.",
          "Organized and hosted a tech workshop that attracted 50 students, fostering a collaborative learning environment and bridging gaps in coding knowledge, which helped participants gain confidence in their skills.",
          "Conducted research on machine learning algorithms, culminating in a paper published in a student-led journal, which contributed to a deeper understanding of the subject among peers and promoted academic discourse."
        ]}
      />
    </div>
  );
};