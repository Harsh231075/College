import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const admission = () => {
    navigate('/btech');
  }
  return (
    <div className="relative flex items-center justify-center text-white h-[80vh]">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.itm.ac.in/2024/05/civil-engineer-construction-worker-architects-wearing-hardhats-safety-vests-are-working-together-construction-site-building-home-cooperation-teamwork-concept.webp')" }}
      />


      <div className="absolute inset-0 opacity-90" />

      <div className="max-w-4xl text-center px-4 relative z-10">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to B.Tech Programs
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore various branches and build a strong foundation for your future.
        </motion.p>
        <motion.button
          className="bg-white text-red-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => console.log('Get Started Clicked')}
        >
          <button onClick={admission}>  Get Started</button>
        </motion.button>
      </div>


      <motion.img
        src="https://takshshila.org/wp-content/uploads/2021/05/9U0A4511.jpg"
        alt="Floating Image 1"
        className="absolute top-10 left-10 w-32 h-32 object-contain"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      />
      <motion.img
        src="https://cache.careers360.mobi/media/article_images/2024/6/20/Top-BTech-colleges-accepting-CUET-in-India.jpg"
        alt="Floating Image 2"
        className="absolute bottom-10 right-10 w-32 h-32 object-contain"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
};

export default HeroSection;
