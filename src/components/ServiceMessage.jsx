import React from 'react';
import './styles/ServiceMessage.css';  // Include custom CSS for the component

const ServiceMessage = ({ languageType }) => {
  const content = {
    en: {
      heading: 'Serving the Nation is Serving God',
      paragraph1: `In Indian culture, the only way to establish oneness with the divine is to serve the nation. Service destroys ego and begins the practice of Omkar. Service is life, service is dedication, and living for the awakening of harmony and brotherhood in society is the Aarti philosophy.`,
      paragraph2: `Seeing our deprived, suffering, neglected, and needy society and making their life happy through our service work and bringing them into the mainstream of society is the true divine service. This is the message given by Lord Rama and Krishna through their lives. Let us implement this in our lives.`,
      paragraph3: `Nature also inspires us to serve. Sun, water, wind, trees, earth, everything always gives the message of giving. The country gives us everything, we should also learn to give something, taking inspiration from this, we can experience ultimate happiness by making our lives meaningful through service.`,
      paragraph4: `In Hindu tradition, it is believed that by donating for the upliftment of the poor and helpless, Goddess Lakshmi herself comes to the person and he always remains happy, healthy, and long-lived.`,
      categories: [
        { title: 'Category 1: Upliftment', description: 'Making efforts so that the person who is served today becomes self-reliant, self-respecting, and serves others tomorrow.' },
        { title: 'Category 2: Empowerment', description: 'Removing the needs of the suffering and deprived people, making them self-reliant and self-respecting.' },
        { title: 'Category 3: Immediate Relief', description: 'Providing food, water, medicine, and education to the needy.' }
      ],
    },
    // Add Hindi translation similarly
  };

  return (
    <div className="service-message">
      <div className="hero-section">
        <h1>{content[languageType].heading}</h1>
        <p>{content[languageType].paragraph1}</p>
      </div>
      
      <div className="service-content">
        <p>{content[languageType].paragraph2}</p>
        <p>{content[languageType].paragraph3}</p>
        <p>{content[languageType].paragraph4}</p>
      </div>

      <div className="service-categories">
        {content[languageType].categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon">
              <i className="icon" data-feather="heart"></i> {/* Change icons as necessary */}
            </div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMessage;
