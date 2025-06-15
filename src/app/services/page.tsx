import React from "react";
import "@/styles/services.scss";

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Property Valuation and Market Analysis",
      description:
        "Our expert team provides detailed property valuations and market analysis to help you accurately price your property and understand the local real estate market. Our in-depth research and analysis take into account a variety of factors, including market trends, comparable sales, and property condition.",
      image: "/images/service-valuation.jpg",
      buttonText: "Learn More",
    },
    {
      id: 2,
      title: "Listing and Advertising Your Property",
      description:
        "We use our extensive network and marketing expertise to list and advertise your property to a wide audience. From professional photography and virtual tours to targeted online and offline advertising, we use a variety of strategies to attract potential buyers and showcase your property in the best possible light.",
      image: "/images/service-listing.jpg",
      buttonText: "Learn More",
    },
    {
      id: 3,
      title: "Showing Your Property to Potential Buyers",
      description:
        "Our team is available to schedule and conduct property showings for interested buyers. We understand that your time is valuable, so we work with your schedule to ensure that showings are convenient for you while still providing potential buyers with the best possible experience.",
      image: "/images/service-showing.jpg",
      buttonText: "Learn More",
    },
  ];

  return (
    <main className="services">
      <section className="services__hero">
        <div className="services__header">
          <h1 className="services__title">How We Help You</h1>
          <p className="services__subtitle">
            Our team of experts is dedicated to helping you achieve your real
            estate goals
          </p>
        </div>
      </section>

      <section className="services__content">
        <div className="services__container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`services__card ${
                index % 2 === 1 ? "services__card--reverse" : ""
              }`}
            >
              <div className="services__card-visual">
                <div className="services__blob" />
                <div className="services__icon">
                  {service.image ? (
                    <img src={service.image} alt={service.title} />
                  ) : null}
                </div>
              </div>
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">
                  {service.description}
                </p>
                <button className="services__card-button">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
