import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CultureClubDetails = () => {
  const activities = [
    {
      img: "https://www.rkgirlscollege.edu.in/images/cultural-club-ardhamandali-3.jpg",
      title: "Cultural Events",
      desc: "Explore the vibrant cultural events showcasing dance, drama, music, and more.",
    },
    {
      img: "https://www.rkgirlscollege.edu.in/images/women-day-6.jpg",
      title: "Workshops",
      desc: "Participate in creative workshops, including arts, crafts, and theater.",
    },
    {
      img: "https://media.assettype.com/freepressjournal/2023-10/a405698e-2c10-4376-81e7-91fb6e89d91e/IMG_3223.JPG",
      title: "Festivals",
      desc: "Celebrate cultural festivals with the club, making unforgettable memories.",
    },
    {
      img: "https://vvce.ac.in/wp-content/uploads/2020/01/taranga1-Dr.-Chandrashekar.-M.-Patil-ECE.jpg",
      title: "Community Outreach",
      desc: "Get involved in community outreach programs, spreading culture and positivity.",
    },
  ];

  const gallery = [
    "https://lakehighlands.advocatemag.com/wp-content/uploads/2023/04/image004.png",
    "https://prakashcollege.in/wp-content/uploads/2024/04/13-7.jpg",
    "https://www.scmsbengaluru.edu.in/assets/images/student-clubs-and-committee/CULTURAL-CLUB/1.webp",
    "https://www.scmsbengaluru.edu.in/assets/images/student-clubs-and-committee/CULTURAL-CLUB/3.webp",
    "https://www.scmsbengaluru.edu.in/assets/images/student-clubs-and-committee/BUSINESS-AND-FINANCE-CLUB/1.webp",
  ];

  const teamMembers = [
    {
      name: "Himanshu singh",
      role: "Club President",
      image: "https://as2.ftcdn.net/jpg/04/80/65/51/1000_F_480655182_cs2QhhhDSuUGWRmYwrzvCjk9AVXM8piq.jpg",
    },
    {
      name: "Harshdeep pawar",
      role: "Event Coordinator",
      image: "https://i.pinimg.com/736x/57/da/d9/57dad92feb92292879e67bf19d71e599.jpg",
    },
    {
      name: "Jiya katariya",
      role: "Artist",
      image: "https://im.rediff.com/news/2010/dec/30afsheen3.jpg",
    },
    {
      name: "Tanishka",
      role: "Cultural Enthusiast",
      image: "https://m.media-amazon.com/images/S/pv-target-images/f0ae918820628dcf24503eb9249d5ffb3f1df9e882f3a618185513d710b096bf._SX1080_FMjpg_.jpg",
    },
  ];

  return (
    <>
      <section className="relative bg-cover bg-center h-[60vh] md:h-[80vh]"
        style={{ backgroundImage: "url('https://vvce.ac.in/wp-content/uploads/2020/01/cultural-club-logo-Dr.-Chandrashekar.-M.-Patil-ECE.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative flex flex-col justify-center items-center text-center h-full text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Culture Club</h1>
          <p className="text-lg md:text-xl font-light max-w-3xl">
            Celebrating diversity, creativity, and community through art and culture.

          </p>
          {/* <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition">
            Explore More
          </button> */}
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">

        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Activities
          </h2>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {activities.map((activity, index) => (
              <div key={index} className="bg-white shadow-md rounded-md overflow-hidden mx-4">
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.desc}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* Team Members Section */}
        <section className="py-12 px-6 bg-white">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Meet Our Team
          </h2>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            itemClass="px-4"
            containerClass="gap-x-4"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative bg-gray-50 shadow-md rounded-md flex flex-col items-center mx-4"
              >
                <img
                  src={member.image || "https://via.placeholder.com/300"} // Placeholder if no image
                  alt={member.name}
                  className="w-full h-48 object-center rounded-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-md"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4">
                  <div>
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Photo Gallery
          </h2>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            itemClass="px-4"
            containerClass="gap-x-4"
          >
            {gallery.map((img, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="h-64 w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </section>
      </div>
    </>
  );
};

export default CultureClubDetails;
