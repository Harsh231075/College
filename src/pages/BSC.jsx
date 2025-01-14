import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://images.shiksha.com/mediadata/images/1497236620phpI2LYnK.jpeg', alt: 'BSC Activity 1' },
  { src: 'https://careerdecoder.allegiance-educare.in/storage/uploads/colleges/1438859595campus3.jpg', alt: 'BSC Activity 2' },
  { src: 'https://clgtak.com/wp-content/uploads/2023/12/377562590_292626500213253_8897584372753937798_n.jpg', alt: 'BSC Activity 3' },
  { src: 'https://newhorizoncollege.co.in/wp-content/uploads/2024/01/fdp.png', alt: 'BSC Activity 4' },
  
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const BSC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50">
     
      <div className="relative flex items-center justify-center text-white h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://st.depositphotos.com/1518767/1395/i/450/depositphotos_13959673-stock-photo-a-laughing-group-of-students.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.h1
            className="text-6xl font-extrabold mb-4 text-yellow-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bachelor of Science (BSC)
          </motion.h1>
          <motion.p
            className="text-lg mb-6 text-yellow-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A gateway to explore scientific principles and apply them in various fields.
          </motion.p>
          <motion.a
            href="#about"
            className="inline-block px-6 py-3 text-lg font-semibold bg-yellow-300 text-blue-800 rounded-lg shadow-lg hover:bg-yellow-400 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>

      
      <div id="about" className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">About BSC Program</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Overview</h3>
            <p className="text-lg text-gray-700">The BSC program offers a wide range of subjects that form the foundation of scientific knowledge. This program is designed to foster critical thinking and analytical skills.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
            <p className="text-lg text-gray-700">Graduates of the BSC program have diverse career opportunities in fields such as research, healthcare, technology, and environmental science.</p>
          </div>
        </div>
      </div>

     
      <div className="py-16 bg-blue-50">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Meet Our Faculty</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg" src="https://srec.ac.in/uploads/Faculty/whatsappimage2023-08-05at9.46.42am(1)230816083910.jpeg" alt="Faculty Member 1" />
            <p className="text-xl mt-4 font-bold">Dr. Anjali Sharma</p>
            <p className="text-gray-600">Physics Department</p>
          </div>
          <div className="text-center">
            <img className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg" src="https://cse.iith.ac.in/assets/images/profiles/Antony-Franklin.jpg" alt="Faculty Member 2" />
            <p className="text-xl mt-4 font-bold">Dr. Ramesh Gupta</p>
            <p className="text-gray-600">Chemistry Department</p>
          </div>
          <div className="text-center">
            <img className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg" src="https://lawfaculty.du.ac.in/userfiles/images/DEANS/IMG-20230928-WA0032.jpg" alt="Faculty Member 3" />
            <p className="text-xl mt-4 font-bold">Dr. Meena Kapoor</p>
            <p className="text-gray-600">Mathematics Department</p>
          </div>
        </div>
      </div>

     
      <div className="bg-blue-100 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Course Details</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Year 1</h3>
            <p className="text-lg text-gray-700">Introduction to Physics, Chemistry, Mathematics, and Biology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <h3 className="text-2xl font-bold mb-4">Year 2</h3>
            <p className="text-lg text-gray-700">Advanced topics in Physics, Organic Chemistry, Calculus, and Zoology.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <h3 className="text-2xl font-bold mb-4">Year 3</h3>
            <p className="text-lg text-gray-700">Specialized electives and project work in chosen fields of interest.</p>
          </div>
        </div>
      </div>

     
      <div className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Gallery</h2>
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

export default BSC;
