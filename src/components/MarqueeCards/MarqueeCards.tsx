import Link from "next/link";
import styles from "./MarqueeCards.module.scss";

interface MarqueeCard {
  title: string;
  href: string;
  icon?: string;
}

const MarqueeCards = () => {
  const cards: MarqueeCard[] = [
    {
      title: "Custom CRM",
      href: "/crm",
      icon: "📊",
    },
    {
      title: "Smoke Alarm Safety",
      href: "/services/smoke-alarm",
      icon: "🔥",
    },
    {
      title: "Electrical Safety",
      href: "/services/electrical-safety",
      icon: "⚡",
    },
    {
      title: "Gas Safety",
      href: "/services/gas-safety",
      icon: "🔧",
    },
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeTrack}>
        {duplicatedCards.map((card, index) => (
          <Link
            key={`${card.title}-${index}`}
            href={card.href}
            className={styles.marqueeCard}
          >
            <div className={styles.cardIcon}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.cardArrow}>→</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCards;
