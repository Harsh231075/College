import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const facilities = [
  {
    id: "hostel",
    title: "Hostel Facilities",
    description:
      "Our college offers well-equipped hostels with comfortable living spaces, 24/7 security, and a homely environment for both boys and girls.",
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/24/cb/33/8-bed-mixed-gender-dorm.jpg",
      "https://images.trvl-media.com/lodging/54000000/53180000/53172800/53172718/942e9111.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/be/db/c7/room-18-6-bed-co-ed-dorm.jpg",
    ],
  },
  {
    id: "transportation",
    title: "Transportation Facilities",
    description:
      "We provide safe and convenient transportation facilities for students with a fleet of buses covering all major routes to and from the campus.",
    images: [
      "https://www.jnncollege.edu.in/wp-content/uploads/2019/04/Transportation.jpg",
      "https://urgirlscollege.com/wp-content/uploads/2021/07/Slider_15.png",
      "https://www.rvscollege.ac.in/wp-content/uploads/2023/03/DSC_0464-1-8.png",
    ],
  },
  {
    id: "library",
    title: "Library Facilities",
    description:
      "Our state-of-the-art library houses a vast collection of books, journals, and digital resources, providing a quiet and conducive environment for studying.",
    images: [
      "https://tha.edu.in/wp-content/uploads/2019/06/library-facility-gallery_v4-1.jpg",
      "https://www.londonlibrary.co.uk/images/CHARLOTTE/NEW_WEBSITE_IMAGES/artbanner.jpg",
      "https://bayancollege.edu.om/wp-content/uploads/2021/12/DSC02190-1024x682.jpg",
    ],
  },
  {
    id: "sports",
    title: "Sports Facilities",
    description:
      "The campus has dedicated sports facilities including cricket, football, basketball, and volleyball courts, ensuring a healthy lifestyle for students.",
    images: [
      "https://www.iist.ac.in/sites/default/files/facilities/sports_facility1big.jpg",
      "https://indoreinstitute.com/wp-content/uploads/2018/01/sports3.jpg",
      "https://images.shiksha.com/mediadata/images/1593580550phpacne8t.jpeg",
    ],
  },
  {
    id: "cafeteria",
    title: "Cafeteria Facilities",
    description:
      "Our cafeteria offers a variety of food options, including vegetarian and non-vegetarian meals, snacks, and beverages, with hygienic and quality standards.",
    images: [
      "https://5.imimg.com/data5/SU/BL/GLADMIN-11737140/cafeteria-facilities.jpg",
      "https://5.imimg.com/data5/ANDROID/Default/2022/11/GB/RP/NS/163442106/product-jpeg-500x500.jpg",
      "https://3.imimg.com/data3/UC/IV/GLADMIN-7613951/images-cant1.jpg",
    ],
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const FacilitySection = ({ title, description, images }) => (
  <div className="py-16 bg-gray-50">
    <h2 className="text-4xl font-bold text-center text-blue-600 mb-4">{title}</h2>
    <p className="text-lg text-gray-600 text-center mb-8">{description}</p>
    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="p-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <img
            src={src}
            alt={`${title} ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
      ))}
    </Carousel>
  </div>
);

const FacilitiesPage = () => {
  return (
    <div>
      {facilities.map((facility) => (
        <FacilitySection
          key={facility.id}
          title={facility.title}
          description={facility.description}
          images={facility.images}
        />
      ))}
    </div>
  );
};

export default FacilitiesPage;
