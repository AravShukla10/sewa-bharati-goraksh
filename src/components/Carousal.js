import React, { useEffect, useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (!images || images.length === 0) return <p>No images to display</p>;

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{
          width: '100%',
          height: '300px', // Fixed height
          objectFit: 'cover', // Ensures image covers the area without distortion
          borderRadius: '10px',
          transition: 'all 0.5s ease-in-out',
        }}
      />

      <div style={{ marginTop: '10px' }}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              cursor: 'pointer',
              height: '12px',
              width: '12px',
              margin: '0 4px',
              backgroundColor: currentIndex === index ? '#333' : '#bbb',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
