import React from 'react';

interface AwardItemProps {
  date: string;
  title: string;
  organization: string;
  description: string;
}

export const AwardItem: React.FC<AwardItemProps> = ({ date, title, organization, description }) => {
  return (
    <div className="award-item">
      <div className="award-date">{date}</div>
      <h3 className="award-title">{title}</h3>
      <h4 className="award-organization">{organization}</h4>
      <p className="award-description">{description}</p>
    </div>
  );
};
