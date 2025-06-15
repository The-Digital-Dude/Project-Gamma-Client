import React from "react";

interface HeadlineProps {
  mainText: string;
  boldText: string;
  highlightText: string;
}

const Headline: React.FC<HeadlineProps> = ({
  mainText,
  boldText,
  highlightText,
}) => {
  return (
    <h1 className="landing__headline">
      {mainText} <span className="landing__headline--bold">{boldText}</span>
      {highlightText && (
        <span className="landing__headline--highlight"> {highlightText}</span>
      )}
    </h1>
  );
};

export default Headline;
