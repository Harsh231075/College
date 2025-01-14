import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const TechClubDetails = () => {
  const activities = [
    {
      img: "https://contentstatic.techgig.com/photo/82433878.cms",
      title: "Coding Workshops",
      desc: "Learn the latest programming languages and frameworks through our hands-on coding workshops.",
    },
    {
      img: "https://vjit.ac.in/wp-content/uploads/2024/09/Coding-club.jpg",
      title: "Hackathons",
      desc: "Showcase your skills and compete with the brightest minds in our annual hackathons.",
    },
    {
      img: "https://srmrmp.edu.in/wp-content/uploads/2023/11/SFMW15-scaled.jpg",
      title: "Seminars",
      desc: "Gain insights from industry professionals in technology and innovation through our seminars.",
    },
    {
      img: "https://srmrmp.edu.in/wp-content/uploads/2023/11/IMG-20230324-WA0018.jpg",
      title: "Leadership Activities",
      desc: "Build your leadership skills with team-building activities and mentorship programs.",
    },
  ];

  const gallery = [
    "https://dost.iitm.ac.in/common/images/nicUpload/856ac991306458c7ea94fcc7762abdc470a7f43b5c1111e6d73f151aa72fb1cb_1.png",
    "https://www.itmgoi.in/assets2/images/club/20230525_153315.jpg",
    "https://www.itmgoi.in/assets2/images/club/4.%20Makers%20Lab+Mentor_Anurag%20Mondal_09Mar2017.jpg",
    "https://resources.itmuniversity.ac.in/newweb/images/420x320_d.jpg",
  ];

  const teamMembers = [
    {
      name: "Harsh Singh",
      role: "Team Leader",
      image: "https://pixahive.com/wp-content/uploads/2020/12/Smart-boy-243721-pixahive.jpg",
    },
    {
      name: "Aryan Patel",
      role: "Frontend Developer",
      image: "https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.jpg?s=612x612&w=0&k=20&c=YQaYjmbPGpJ0DXxGSTLHFPWsBKjBsAmR_l-XHYt2vHU=",
    },
    {
      name: "Neha Sharma",
      role: "Backend Developer",
      image: "https://media.istockphoto.com/id/1157950835/photo/indian-university-student-stock-images.jpg?s=612x612&w=0&k=20&c=1j3NlsDmHDW9MNEL8VszfZS7k-9AijEv82ib63QSLII=",
    },
    {
      name: "Riya Gupta",
      role: "UI/UX Designer",
      image: "https://static.vecteezy.com/system/resources/thumbnails/047/579/127/small_2x/beautiful-female-indian-college-girl-in-lecture-hall-photo.jpeg",
    },
  ];


  return (
    <>
      <section className="relative bg-cover bg-center h-[60vh] md:h-[80vh]"
        style={{ backgroundImage: "url('https://www.rknec.edu/wp-content/uploads/2023/12/robo18-1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative flex flex-col justify-center items-center text-center h-full text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Tech Club</h1>
          <p className="text-lg md:text-xl font-light max-w-3xl">
            Empowering innovation, fostering teamwork, and creating a brighter technological future.
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
              <div
                key={index}
                className="bg-white shadow-md rounded-md overflow-hidden mx-4"
              >
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{activity.desc}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        <section className="py-12 px-6 bg-white">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Team Members
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
                className="relative bg-gray-50  shadow-md rounded-md flex flex-col items-center mx-4"
              >
                <img
                  src={member.image || "https://via.placeholder.com/300"}
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


        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Photo Gallery
          </h2>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            itemClass="px-4" // Adds spacing between cards
            containerClass="gap-x-4" // Ensures smooth layout
          >
            {gallery.map((img, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
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

export default TechClubDetails;
