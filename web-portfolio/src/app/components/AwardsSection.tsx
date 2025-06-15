import React from 'react';
import { AwardItem } from './AwardItem';

export const AwardsSection: React.FC = () => {
  return (
    <div className="awards-section">
      <h2>Awards</h2>
      <AwardItem
        date="02/2024"
        title="1st Place Jugend Forscht Regionalwettbewerb Oberfranken"
        organization="Jugend Forscht"
        description="Achieved 1st Place at the Jugend Forscht Regionalwettbewerb Oberfranken, which celebrates outstanding scientific research by young innovators, highlighting a project that inspired others to explore and engage with science."
      />
      <AwardItem
        date="08/2025"
        title="2nd Place Jugend Forscht Landeswettbewerb Bayern"
        organization="Jugend Forscht"
        description="Achieved 2nd Place at the Jugend Forscht Landeswettbewerb Bayern, which recognizes exceptional scientific research and innovation among young talents, showcasing a project that demonstrated significant impact and creativity in the field."
      />
    </div>
  );
};