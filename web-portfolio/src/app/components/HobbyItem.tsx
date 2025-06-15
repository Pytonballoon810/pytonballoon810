import React from 'react';

interface HobbyItemProps {
  hobby: string;
}

export const HobbyItem: React.FC<HobbyItemProps> = ({ hobby }) => {
  return (
    <div className="hobby-item">
      <span>{hobby}</span>
    </div>
  );
};
