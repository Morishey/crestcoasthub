import React from 'react';
import { SunMedium, Building, Heart, Home, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';

const Lending: React.FC = () => {
  const lendingVerticals = [
    {
      icon: <SunMedium />,
      title: "Energy Loan Network",
      subtitle: "Helping you plug into your sustainable energy goals.",
      description: "Connects contractors and residential homeowners to affordable financing options for home energy upgrades."
    },
    {
      icon: <Building />,
      title: "Commercial Property Assessed Clean Energy",
      subtitle: "Helping businesses do their part.",
      description: "Offers financing for renewable energy projects like solar power, energy efficiency upgrades, and seismic strengthening."
    },
    {
      icon: <Heart />,
      title: "Healthcare",
      subtitle: "Taking care of those who take care of others",
      description: "Support healthcare companies both large and small with custom financing solutions."
    }
  ];

  return (
    <section id="lending" className="lending">
      <div className="container">
        <div className="section-title">
          <h2>Our Lending Verticals</h2>
          <p>Specialized financing solutions for a sustainable future</p>
        </div>
        
        <div className="lending-grid">
          {lendingVerticals.map((vertical, index) => (
            <div key={index} className="lending-card">
              <div className="lending-header">
                <div className="lending-icon">
                  {vertical.icon}
                </div>
                <h3>{vertical.title}</h3>
              </div>
              <div className="lending-body">
                <h4>{vertical.subtitle}</h4>
                <p>{vertical.description}</p>
                <button className="btn btn-outline">
                  Explore Financing
                  <ArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lending;