import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const navigate = useNavigate();

  const course = () => {
    navigate('/courses');
  }
  const join = () => {
    navigate('/admission');
  }

  return (

    <section className="relative w-full">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={false}
        showDots={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list"
        itemClass="carousel-item-padding-40-px"
      >

        <div className="relative w-full h-[70vh]">
          <img
            src="banner0.webp"
            alt="Slide 1"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
              Welcome to Our Platform
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
              Discover new courses and opportunities to elevate your skills.
            </p>
            {/* <button className="px-6 py-3 bg-white/80 text-blue-800 rounded-lg text-lg font-semibold hover:bg-white shadow-lg transition duration-300">
              Explore Now
            </button> */}

          </div>
        </div>


        <div className="relative w-full h-[70vh]">
          <img
            src="banner1.jpeg"
            alt="Slide 2"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
              Empower Your Learning
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
              Explore a wide range of modern and advanced courses.
            </p>
            <button
              onClick={course}
              className="px-6 py-3 bg-white/80 text-purple-800 rounded-lg text-lg font-semibold hover:bg-white shadow-lg transition duration-300">
              Start Learning
            </button>
          </div>
        </div>


        <div className="relative w-full h-[70vh]">
          <img
            src="banner2.jpg"
            alt="Slide 3"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
              Join Our Community
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
              Learn, grow, and achieve success with us.
            </p>
            <button
              onClick={join}
              className="px-6 py-3 bg-white/80 text-green-800 rounded-lg text-lg font-semibold hover:bg-white shadow-lg transition duration-300">
              Join Now
            </button>
          </div>
        </div>
      </Carousel>
    </section >
  );
}

export default Banner;
