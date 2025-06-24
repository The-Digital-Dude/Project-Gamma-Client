import React from "react";
import GlassyInput from "../GlassyInput/GlassyInput";
import "@/styles/cta.scss";

interface CTAProps {
  className?: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  highlightText?: string;
  onButtonClick: () => void;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  buttonLabel,
  highlightText,
  onButtonClick,
  className,
}) => {
  return (
    <section className="cta">
      <div className={`cta__container ${className ? className : ""}`}>
        <div className="cta__content">
          <h2 className="cta__title">
            {title}{" "}
            {highlightText && (
              <span className="landing__headline--highlight">
                {" "}
                {highlightText}
              </span>
            )}
          </h2>
          <p className="cta__subtitle">{subtitle}</p>
          <GlassyInput
            className="mx-auto"
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
