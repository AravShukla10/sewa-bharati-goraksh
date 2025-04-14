import React from 'react';
import ImageCarousel from './Carousal'; 

const CarouselWithText = ({ images, position = 'left', content, languageType }) => {
  const isLeft = position === 'left';
  

  const selectedContent = content[languageType] || content['en']; 

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isLeft ? 'row' : 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        padding: '2rem',
      }}
    >
      <div style={{ flex: '1 1 400px' }}>
        <ImageCarousel images={images} />
      </div>
      <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
        <h2>{selectedContent.title}</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{selectedContent.description}</p>
      </div>
    </div>
  );
};

export default CarouselWithText;
