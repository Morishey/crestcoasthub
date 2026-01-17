import React from 'react';
import { Building2, Users, Globe } from 'lucide-react';

const Business: React.FC = () => {
  const businessFeatures = [
    {
      icon: <Building2 />,
      title: "Business Checking & Money Market",
      description: "A range of checking account options for businesses of any size. No matter what you need to help run your business, we have a checking solution to match."
    },
    {
      icon: <Users />,
      title: "Business Savings",
      description: "Helping your business save in more ways than one. Enjoy a variety of flexible saving account options with high yield returns to help your business grow."
    },
    {
      icon: <Globe />,
      title: "Business Credit Cards",
      description: "Empowering you to grow your business on your terms. Our popular business credit card options offer the flexibility you need to operate your business."
    }
  ];

  return (
    <section className="business">
      <div className="container">
        <div className="section-title">
          <h2>Our Business Banking Products and Services</h2>
          <p>Comprehensive banking solutions for businesses of all sizes</p>
        </div>
        
        <div className="features-grid">
          {businessFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
