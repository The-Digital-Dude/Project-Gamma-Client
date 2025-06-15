import React from "react";

interface HeroVisualProps {
  imageUrl: string;
  altText: string;
}

const HeroVisual: React.FC<HeroVisualProps> = ({ imageUrl, altText }) => {
  return (
    <div className="landing__visual">
      <div className="landing__visual-card">
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default HeroVisual;
