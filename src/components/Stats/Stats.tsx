import React from "react";

interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="landing__stats">
      {stats.map((stat, index) => (
        <div key={index} className="landing__stat">
          <span className="landing__stat-value">{stat.value}</span>
          <span className="landing__stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
