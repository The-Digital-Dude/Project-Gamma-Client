import React from "react";

interface HeadlineProps {
  mainText: string;
  boldText: string;
  highlightText: string;
  heading?: "h1" | "h2" | "h3" | "h4";
}

const Headline: React.FC<HeadlineProps> = ({
  mainText,
  boldText,
  highlightText,
  heading = "h1",
}) => {
  const children = (
    <>
      {mainText} <span className="landing__headline--bold">{boldText}</span>
      {highlightText && (
        <span className="landing__headline--highlight"> {highlightText}</span>
      )}
    </>
  );

  return React.createElement(
    heading,
    { className: "landing__headline" },
    children
  );
};

export default Headline;
