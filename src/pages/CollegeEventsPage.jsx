import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: "coding",
    title: "Coding Competition",
    description:
      "Put your coding skills to the test in an intense competition. Solve challenging problems and showcase your talent.",
    image:
      "https://contentstatic.techgig.com/photo/74969192/how-coding-competitions-are-significant-in-a-developers-career.jpg?798505",
  },
  {
    id: "robotics",
    title: "Robotics Championship",
    description:
      "Build and program robots to perform tasks and compete with other teams. Dive into the world of robotics and automation.",
    image:
      "https://www.lcsun-news.com/gcdn/presto/2021/08/21/PNM2/07a986c7-b208-4938-aa8c-fadfe5a888ca-NM_BEST.jpeg?width=660&height=441&fit=crop&format=pjpg&auto=webp",
  },
  {
    id: "arts",
    title: "Arts and Design Contest",
    description:
      "Express your creativity through art, design, and visual storytelling. Compete with peers to showcase your imagination.",
    image:
      "https://www.srms.ac.in/cet/wp-content/uploads/2017/04/Art-Competition.jpg",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CollegeEventsPage = () => {
  const navigate = useNavigate();

  const Event = (id) => {
    console.log(id)
    navigate(`/event/${id}`);
  }
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">
          College Events & Competitions
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          itemClass="px-4"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-justify">{event.description}</p>
              </div>
              <div className="p-4 text-center bg-gray-50">
                <button
                  onClick={() => Event(event.id)}
                  className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CollegeEventsPage;
