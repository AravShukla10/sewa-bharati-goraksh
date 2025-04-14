import React from 'react';
import ImageCarousel from './components/Carousal';

import img1 from './images/1.webp';
import img2 from './images/2.webp';
import img3 from './images/3.webp';
import img4 from './images/4.webp';
import img5 from './images/5.webp';
import img6 from './images/6.webp';
import img7 from './images/7.webp';
import img8 from './images/8.webp';
import img9 from './images/9.webp';
import img10 from './images/10.webp';

const App = () => {
  const imageArray = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>📷 Smooth Image Carousel</h2>
      <ImageCarousel images={imageArray} />
    </div>
  );
};

export default App;
