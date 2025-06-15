import React from 'react';

interface StrengthItemProps {
  strength: string;
}

export const StrengthItem: React.FC<StrengthItemProps> = ({ strength }) => {
  return (
    <div className="strength-item">
      <span>{strength}</span>
    </div>
  );
};
