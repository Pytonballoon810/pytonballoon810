import React from 'react';

interface SocialMediaItemProps {
  platform: string;
  url?: string;
}

export const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ platform, url }) => {
  return (
    <div className="social-media-item">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {platform}
        </a>
      ) : (
        <span>{platform}</span>
      )}
    </div>
  );
};
