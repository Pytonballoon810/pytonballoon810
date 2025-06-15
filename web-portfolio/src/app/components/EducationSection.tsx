import React from 'react';
import { EducationItem } from './EducationItem';

export const EducationSection: React.FC = () => {
  return (
    <div className="education-section">
      <h2>Education</h2>
      <EducationItem
        period="09/2014 – 07/2023"
        location="Ebermannstadt, DE"
        degree="Abitur"
        institution="Gymnasium Fränkische Schweiz"
      />
      <EducationItem
        period="10/2023 – present"
        location="Erlangen, DE"
        degree="Computer Science | Bachelor"
        institution="Friedrich Alexander Universität Erlangen-Nürnberg"
        details={[
          "Currently pursuing a Bachelor's degree in Computer Science, which has provided me with a solid foundation in programming and software development principles.",
          "Utilized the Electronics Lab since my first semester, gaining hands-on experience with various electronic components and systems, which has enhanced my practical skills.",
          "Developed and launched my own website to showcase and sell 3D printed products, effectively combining my technical skills with entrepreneurship and reaching potential customers online.",
          "Engaged in independent projects focusing on Internet of Things (IoT) and smart home technologies, which has allowed me to deepen my understanding of these innovative fields and apply my knowledge in real-world scenarios."
        ]}
      />
    </div>
  );
};