import React from 'react';

interface ProfileTextProps {
  text?: string;
}

export const ProfileText: React.FC<ProfileTextProps> = ({ 
  text = "University Student with a strong foundation in Computer Science. Successfully led a team project to develop a mobile application for campus life, receiving positive feedback from over 200 users, which significantly boosted community engagement. Organized a tech workshop that brought together 50 students, creating a collaborative learning environment and enhancing coding skills. Committed to leveraging technical knowledge and leadership abilities to contribute to innovative projects in a dynamic team setting."
}) => {
  return (
    <div className="profile-text">
      <p>{text}</p>
    </div>
  );
};
