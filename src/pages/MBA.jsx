import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://www.immindia.edu.in/stagging/images/event-activities-dk-new-m.png', alt: 'MBA Activity 1' },
  { src: 'https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/mba-dept-banner-2021-1a.jpg', alt: 'MBA Activity 2' },
  { src: 'https://mba.somlalit.org/wp-content/uploads/2024/02/Expert-Session-on-Financial-Literacy-1024x683.jpg', alt: 'MBA Activity 3' },

];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const MBA = () => {
  return (
    <div className="bg-gray-100">

      <div className="relative flex items-center justify-center text-white h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.avanse.com/blogs/images/22feb-blog-2023.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to MBA Program
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us to explore the world of management excellence.
          </motion.p>
        </div>
      </div>


      <div className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Head of Department</h2>
        <img
          className="mx-auto rounded-full w-48 h-48 object-cover"
          src="https://drait.edu.in/assets/departments/MBA/faculty/profile_186-041234.jpg"
          alt="MBA HOD"
        />
        <p className="text-xl mt-4">Dr. Ramesh Sharma</p>
      </div>


      <div className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">MBA Activities</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MBA;
