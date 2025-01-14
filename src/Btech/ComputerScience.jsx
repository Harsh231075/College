import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://cse.sairamit.edu.in/wp-content/uploads/sites/5/2024/01/cse-lab-photos-3.jpg', alt: 'Image 1' },
  { src: 'https://www.carmelcet.in/images/facilities/Hi-Tech-Computer-Lab.jpg', alt: 'Image 2' },
  { src: 'https://stepupstudent.com/wp-content/uploads/2021/08/iitbim3.jpg', alt: 'Image 3' },
  { src: 'https://pbs.twimg.com/media/FKqEubUacAA1AUv?format=jpg', alt: 'Image 4' },
  { src: 'https://cgu-odisha.ac.in/wp-content/uploads/2023/05/0U6A0982-scaled.jpg', alt: 'Image 5' },

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

const ComputerScience = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Computer Science Gallery</h1>
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

export default ComputerScience;
