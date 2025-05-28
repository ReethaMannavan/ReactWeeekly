import React, {useState} from 'react';
import img1 from '../images/animal.jpeg';
import img2 from '../images/deer.jpeg';
import img3 from '../images/elephant.jpeg';
import img4 from '../images/forest.jpeg';
import img5 from '../images/mountain.jpeg';
import img6 from '../images/peacock.jpeg';
import img7 from '../images/sky.jpeg';
import img8 from '../images/water.jpeg';

const ImageGallery = () => {

    const [selectedId,setSelectedId]=useState(null);

  const images = [
    { id: 1, src: img1, title: 'Animal', selected: false },
    { id: 2, src: img2, title: 'Deer', selected: false },
    { id: 3, src: img3, title: 'Elephant', selected: false },
    { id: 4, src: img4, title: 'Forest', selected: false },
    { id: 5, src: img5, title: 'Mountain', selected: false },
    { id: 7, src: img6, title: 'Peacock', selected: false },
    { id: 8, src: img7, title: 'Sky', selected: false },
    { id: 9, src: img8, title: 'water', selected: false },
  ];

 const handleImageClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="gallery-container">
      <h1>Project 2:  Image Gallery</h1>
      <div className="image-grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`image-card ${selectedId === image.id ? 'selected' : ''}`}
            onClick={() => handleImageClick(image.id)}
            role="button"
            tabIndex="0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
            />
            <div className="selected-overlay">
              <div className="checkmark">✓</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;