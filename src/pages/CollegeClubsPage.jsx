import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

const clubs = [
  {
    id: "tech",
    title: "Tech Club",
    description:
      "Explore the world of technology with workshops, coding challenges, and events. A perfect place for tech enthusiasts to grow and innovate.",
    image:
      "https://www.skit.ac.in/images/Clubs/Science_and_Technology.jpg",
  },
  {
    id: "hackathons",
    title: "Hackathons",
    description:
      "Collaborate, ideate, and innovate in hackathon events. Develop creative solutions to real-world problems with your peers.",
    image:
      "https://college.harvard.edu/sites/default/files/styles/billboard_image/public/2024-04/IMG_0771_0.PNG",
  },
  {
    id: "culture",
    title: "Cultural Club",
    description:
      "Celebrate diversity through art, music, drama, and dance. Join us to showcase your talents and embrace creative expression.",
    image:
      "https://www.rkgirlscollege.edu.in/images/farewell-2022-3.jpg",
  },
  {
    id: "research",
    title: "Research and Innovation Club",
    description:
      "Engage in cutting-edge research and work on innovative projects. Collaborate with like-minded peers.",
    image:
      "https://www.snspt.org/wp-content/uploads/2024/12/pro.jpg",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CollegeClubsPage = () => {

  const navigate = useNavigate();

  const Event = (id) => {
    console.log(id)
    navigate(`/club/${id}`);
  }
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
          College Clubs
        </h1>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass="px-4"
        >
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={club.image}
                alt={club.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {club.title}
                </h2>
                <p className="text-gray-600 text-justify">{club.description}</p>
              </div>
              <div className="p-4 text-center bg-gray-50">
                <button
                  onClick={() => Event(club.id)}
                  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CollegeClubsPage;
