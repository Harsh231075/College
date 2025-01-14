import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const images = {
  auditorium: [
    'https://content.jdmagicbox.com/v2/comp/mumbai/l7/0731px731.x731.200627204520.n5l7/catalogue/old-auditorium-indian-institute-of-management-iim-indore-auditoriums-fajzd38vuq.jpg',
    'https://www.sicacollegeindore.com/wp-content/uploads/2023/06/22.jpeg',
    'https://www.gargicollege.in/uploads/infrastructure/auditorium/DSC_0140.jpg',
    'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/08/08/Pictures/hrithik-upcoming-promotion-mohenjo-college-hindustan-bollywood_aa71a3a0-5d69-11e6-93fe-9ac2f090b545.JPG'
  ],
  sports: [
    'https://rksdcollege.ac.in/wp-content/uploads/2020/12/6-1.jpg',
    'https://www.galgotiasuniversity.edu.in/public/uploads/media/tOeHnqJM3DsgXiCG80Q2q1CVxXYssqDvYoaB6Bem.webp',
    'https://www.timscdrmumbai.in/wp-content/uploads/2022/08/DSC00904.jpg',
    'https://lbscek.ac.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-26-at-11.07.11-PM.jpeg'
  ],
  achievements: [
    'https://aryacollegeludhiana.in/wp-content/uploads/2019/11/15-1.jpg',
    'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1486462211/hansraj-college%2Cjpg00.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/1400/9df41c53449221.59355d5209abe.jpg',
  ],
  placements: [
    'https://www.aec.edu.in/logos/gallery/placement.jpg',
    'https://universalcollegeofengineering.edu.in/wp-content/uploads/2022/11/placement-20222.jpg',
    'https://alphagroup.edu/engineering/images/placements-recruiters-banner.jpg',
  ],
  success: [
    'https://sbit.in/wp-content/uploads/2024/01/sucess-stories-1.jpg',
    'https://th-i.thgim.com/public/incoming/1lacno/article67659626.ece/alternates/FREE_1200/4.JPG',
    'https://www.sih.gov.in/img/testimonial/BVPtechies-bg.jpg',
  ],
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const GallerySection = ({ title, categoryImages }) => (
  <div className="py-16 bg-white">
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">{title}</h2>
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
      {categoryImages.map((src, index) => (
        <motion.div
          key={index}
          className="p-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            src={src}
            alt={title}
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
      ))}
    </Carousel>
  </div>
);

const CollegeGallery = () => {
  return (
    <div>
      <GallerySection title="Auditorium" categoryImages={images.auditorium} />
      <GallerySection title="Sports Achievements" categoryImages={images.sports} />
      <GallerySection title="Success Stories" categoryImages={images.success} />
      <GallerySection title="Placements" categoryImages={images.placements} />
      <GallerySection title="festivals " categoryImages={images.achievements} />
    </div>
  );
};

export default CollegeGallery;
