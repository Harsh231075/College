import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://education.sakshi.com/sites/default/files/images/2022/08/25/civil-telangana-1661425813.jpg', alt: 'Image 1' },
  { src: 'https://www.vvcoe.org/department/sites/all/themes/custom/edu/images/civil/concrete_lab.jpg', alt: 'Image 2' },
  { src: 'https://omdayal.com/wp-content/uploads/2023/03/ce-gallery-22-23.jpg', alt: 'Image 3' },
  { src: 'https://www.cuchd.in/uie/civil-engg/images/civil-activity8.jpg', alt: 'Image 4' },
  { src: 'https://www.marian.ac.in/public/images/uploads/ce%20departmental%20activities/17.jpg', alt: 'Image 5' },

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

const Civil = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Civil Engineering Gallery</h1>
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

export default Civil;
