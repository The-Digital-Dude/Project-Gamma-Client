import React from "react";

interface SubtextProps {
  text: string;
}

const Subtext: React.FC<SubtextProps> = ({ text }) => {
  return <p className="landing__subtext">{text}</p>;
};

export default Subtext;
