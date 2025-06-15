import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ title, subtitle, features }) => {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__header">
          <h2 className="features__title">{title}</h2>
          <p className="features__subtitle">{subtitle}</p>
        </div>
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="features__card">
              <div className="features__icon">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
