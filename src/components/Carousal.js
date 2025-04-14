import React, { useEffect, useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [images.length, isPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  if (!images || images.length === 0) return <p>No images to display</p>;

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={{
          width: '100%',
          height: 'auto',
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

      <button
        onClick={togglePlay}
        style={{
          marginTop: '15px',
          padding: '8px 16px',
          fontSize: '14px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          backgroundColor: isPlaying ? '#f44336' : '#4CAF50',
          color: 'white',
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default ImageCarousel;
