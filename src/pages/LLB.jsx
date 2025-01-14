import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = [
  { src: 'https://www.iilsindia.com/images/page/3-year-llb-colleges.jpg', alt: 'LLB Activity 1' },
  { src: 'https://www.dbuu.ac.in/law/images/1.webp', alt: 'LLB Activity 2' },
  { src: 'https://5.imimg.com/data5/JN/DX/YR/GLADMIN-86814796/legal-studies.jpg', alt: 'LLB Activity 3' },
  { src: 'https://images.squarespace-cdn.com/content/v1/6202004c3c7aae13f71fcc18/efa7f542-77f5-4733-9a97-f2d955a2bdce/ABI08329copy-min-1.jpg', alt: 'LLB Activity 4' },

];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const LLB = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50">

      <div className="relative flex items-center justify-center text-white h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://karnavatiuniversity.edu.in/wp-content/uploads/2024/02/ba-llb-hons-desktop-mobile-img.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.h1
            className="text-6xl font-extrabold mb-4 text-yellow-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bachelor of Laws (LLB)
          </motion.h1>
          <motion.p
            className="text-lg mb-6 text-yellow-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dive into the world of legal studies and prepare for a career in law.
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
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">About LLB Program</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Overview</h3>
            <p className="text-lg text-gray-700">The LLB program offers comprehensive education in the legal field, covering various aspects of law, including civil, criminal, corporate, and constitutional law.</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
            <p className="text-lg text-gray-700">LLB graduates can pursue careers as lawyers, legal advisors, judges, or continue with further studies like LLM or judicial services.</p>
          </div>
        </div>
      </div>


      <div className="py-16 bg-blue-50">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Meet Our Faculty</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg" src="https://srec.ac.in/uploads/Faculty/whatsappimage2023-08-05at9.46.42am(1)230816083910.jpeg" alt="Faculty Member 1" />
            <p className="text-xl mt-4 font-bold">Dr. Anjali Sharma</p>
            <p className="text-gray-600">Constitutional Law</p>
          </div>
          <div className="text-center">
            <img className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg" src="https://cse.iith.ac.in/assets/images/profiles/Antony-Franklin.jpg" alt="Faculty Member 2" />
            <p className="text-xl mt-4 font-bold">Dr. Ramesh Gupta</p>
            <p className="text-gray-600">Corporate Law</p>
          </div>
          <div className="text-center">
            <img className="mx-auto rounded-full w-32 h-32 object-cover shadow-lg" src="https://lawfaculty.du.ac.in/userfiles/images/DEANS/IMG-20230928-WA0032.jpg" alt="Faculty Member 3" />
            <p className="text-xl mt-4 font-bold">Dr. Meena Kapoor</p>
            <p className="text-gray-600">Criminal Law</p>
          </div>
        </div>
      </div>


      <div className="bg-blue-100 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Course Details</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Year 1</h3>
            <p className="text-lg text-gray-700">Introduction to Law, Legal Methods, and Constitutional Law.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <h3 className="text-2xl font-bold mb-4">Year 2</h3>
            <p className="text-lg text-gray-700">Advanced Civil Law, Criminal Law, and Family Law.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <h3 className="text-2xl font-bold mb-4">Year 3</h3>
            <p className="text-lg text-gray-700">Specializations in Corporate Law, International Law, and Moot Court practices.</p>
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

export default LLB;
