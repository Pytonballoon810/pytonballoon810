import React from 'react';
import { SocialMediaItem } from "./SocialMediaItem";

export const SocialMediaSection: React.FC = () => {
  return (
    <div className="social-media-section">
      <h2>Social Media</h2>
      <div className="social-media-list">
        <SocialMediaItem platform="Github" url="https://github.com/Pytonballoon810" />
        <SocialMediaItem platform="Linktree" />
      </div>
    </div>
  );
};