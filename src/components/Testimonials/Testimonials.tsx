import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">{title}</h2>
          <p className="testimonials__subtitle">{subtitle}</p>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonials__card">
              <div className="testimonials__quote">"{testimonial.quote}"</div>
              <div className="testimonials__author">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="testimonials__avatar"
                />
                <div className="testimonials__author-info">
                  <h4 className="testimonials__author-name">
                    {testimonial.author}
                  </h4>
                  <p className="testimonials__author-role">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
