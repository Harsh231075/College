import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://www.lboro.ac.uk/course-archive/undergraduate/2023/media/media/study/mirror-content/virtual-tours/subjects/mechanical-electrical-manufacturing/mechatronics.jpg', alt: 'Electrical Image 1' },
  { src: 'https://ce.du.edu.om/wp-content/uploads/2018/05/Electric-Circuits-Laboratory-I.jpg', alt: 'Electrical Image 2' },
  { src: 'https://cmrec.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/11/10232003/1.-Basic-Electrical-and-Electronics-Lab-scaled.jpg', alt: 'Electrical Image 3' },
  { src: 'https://www.gcek.ac.in/images/3_machines-labnew.jpg', alt: 'Electrical Image 4' },
  { src: 'https://du-website.s3.ap-south-1.amazonaws.com/U01/Page/53---20-06-2021-11-15-37.jpg', alt: 'Electrical Image 5' },

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

const Electrical = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Electrical Engineering Gallery</h1>
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

export default Electrical;
