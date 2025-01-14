import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://www.rsmt.ac.in/uploads/files/newsevent/459247971_947861114024244_5958975420635200664_n.jpg', alt: 'BCA Activity 1' },
  { src: 'https://www.rsmt.ac.in/uploads/files/newsevent/405568777_759900346153656_6362651157112284908_n2.jpg', alt: 'BCA Activity 2' },
  { src: 'https://shantibschool.edu.in/public/bca/assets/img/photos/about21.jpg', alt: 'BCA Activity 3' },

];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const BCA = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50">

      <div className="relative flex items-center justify-center text-white h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/BCA.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl font-extrabold mb-4 text-yellow-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to BCA Program
          </motion.h1>
          <motion.p
            className="text-lg mb-6 text-yellow-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dive into the world of computer applications and software development.
          </motion.p>
        </div>
      </div>


      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Head of Department</h2>
        <img
          className="mx-auto rounded-full w-48 h-48 object-cover shadow-lg"
          src="https://sreyas.ac.in/wp-content/uploads/2021/09/HoD-Photo.jpg"
          alt="BCA HOD"
        />
        <p className="text-xl mt-4 text-gray-700">Dr. Suresh Patel</p>
      </div>


      <div className="bg-blue-50 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Course Details</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-4 text-gray-800">
            The BCA (Bachelor of Computer Applications) is a 3-year undergraduate program that covers various aspects of computer applications and software development. It includes subjects like Programming, Database Management, Networking, and more.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Duration: 3 Years</li>
            <li>Eligibility: 10+2 with Mathematics</li>
            <li>Focus Areas: Programming, Database Management, Networking</li>
          </ul>
        </div>
      </div>


      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">BCA Activities</h2>
        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
          {images.map((image, index) => (
            <div key={index} className="p-2">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BCA;
