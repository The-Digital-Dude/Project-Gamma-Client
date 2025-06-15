import React from "react";
import GlassyInput from "../GlassyInput/GlassyInput";

interface CTAProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onButtonClick: () => void;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <section className="cta">
      <div className="cta__container">
        <div className="cta__content">
          <h2 className="cta__title">{title}</h2>
          <p className="cta__subtitle">{subtitle}</p>
          <GlassyInput
            type="email"
            placeholder="Enter your email address"
            buttonLabel={buttonLabel}
            onButtonClick={onButtonClick}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
