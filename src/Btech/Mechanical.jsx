import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://elumalaipolytechnic.com/dept-images/mech/lab-2.jpg', alt: 'Mechanical Image 1' },
  { src: 'https://www.lords.ac.in/mechanical-engineering/infrastructure/mechanical-lab-photo-19/', alt: 'Mechanical Image 2' },
  { src: 'https://www.lords.ac.in/mechanical-engineering/infrastructure/mechanical-lab-photo-12/', alt: 'Mechanical Image 3' },
  { src: 'https://www.kccitm.edu.in/images/machanical-img.jpg', alt: 'Mechanical Image 4' },
  { src: 'https://www.gen-labs.com/wp-content/uploads/Engineering/Mechanical/internal-combustion-engine-training%20lab/internal-combustion-engine-training%20lab%20(1).jpg', alt: 'Mechanical Image 4' },

];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Mechanical = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Mechanical Engineering Gallery</h1>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Mechanical;
