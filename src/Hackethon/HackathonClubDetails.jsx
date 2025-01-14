import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const HackathonClubDetails = () => {
  const activities = [
    {
      img: "https://media.licdn.com/dms/image/v2/D5612AQGCYBhOv-rr-A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1705982532248?e=2147483647&v=beta&t=yKLZeKcG9wWNXrm8Zpo4FeG4xFSrb2ualPqc7J0Cjpg",
      title: "24-Hour Coding Challenge",
      desc: "Compete with the best minds and solve problems in a limited time frame.",
    },
    {
      img: "https://media.hackerearth.com/blog/wp-content/uploads/2016/05/top-10-things-hackathon.jpg",
      title: "Team Building",
      desc: "Work in teams to brainstorm, collaborate, and create innovative projects.",
    },
    {
      img: "https://www.ivybusiness.iastate.edu/files/2024/11/Photo-of-2024-Hackathon-2160x807-1.jpg",
      title: "Tech Talks",
      desc: "Industry experts share insights and experiences to inspire participants.",
    },
    {
      img: "https://www.sistec.ac.in/assets/upload/events-images/11.jpg",
      title: "Prize Distribution",
      desc: "Celebrate your victory with amazing prizes and recognition.",
    },
  ];

  const gallery = [
    "https://happenings.lpu.in/wp-content/uploads/2024/10/smart-india-hackathon-3-scaled.jpg",
    "https://i.ytimg.com/vi/9SXmhCaXkzI/maxresdefault.jpg",
    "https://media.licdn.com/dms/image/v2/D5622AQHmx1OTFIlvRg/feedshare-shrink_800/feedshare-shrink_800/0/1728147529797?e=2147483647&v=beta&t=IFDn1Tii1OZf4rBO7jwEDmCaZjr0NagHZI9oxoLzvAE",
    "https://ggits.org/wp-content/uploads/2022/09/safezone.png",
  ];

  const teamMembers = [
    {
      name: "Yash",
      role: "Hackathon Coordinator",
      image: "https://media.istockphoto.com/id/1158958655/photo/university-student-stock-images.jpg?s=612x612&w=0&k=20&c=ORWc0SEjkOGvKN1hnPH8-3R9lESVcbi6w0gxa7GQzY4=",
    },
    {
      name: "Avantika",
      role: "Sponsorship Manager",
      image: "https://thumbs.dreamstime.com/b/college-student-laptop-pretty-female-indian-using-lecture-room-41038142.jpg",
    },
    {
      name: "Sumaiya",
      role: "Logistics Lead",
      image: "https://media.istockphoto.com/id/578811140/photo/smiling-female-young-college-student-of-indian-ethnicity.jpg?s=612x612&w=0&k=20&c=mKt7yQEkKJWSvT87-6q64_LhSSICnZ1Isq6nJMx_ceg=",
    },
    {
      name: "Sumit",
      role: "Marketing Head",
      image: "https://static.vecteezy.com/system/resources/thumbnails/006/859/348/small_2x/young-boy-indian-student-portrait-photo.jpg",
    },
  ];

  const upcomingEvents = [
    {
      date: "March 20, 2025",
      title: "Spring Hackathon 2025",
      description: "An exciting 24-hour coding challenge with a focus on sustainability.",
      image: "https://miro.medium.com/v2/resize:fit:1196/1*j9w5ZMFpK5HEMzuKFe7zZA.png"
    },
    {
      date: "July 15, 2025",
      title: "AI and Data Science Hackathon",
      description: "Explore the world of AI and Data Science through hands-on projects.",
      image: "https://cdn.prod.website-files.com/670cbf146221ee06c3cdd761/670f55bc84525c8a63641f79_data%20science%20hackathon.png"
    },
  ];

  const pastWinners = [
    {
      teamName: "Code Crusaders",
      year: "2024",
      project: "Smart City App",
      image: "https://www.veltech.edu.in/wp-content/uploads/2023/09/DSC_9512.jpg",
    },
    {
      teamName: "Tech Titans",
      year: "2023",
      project: "AI-Powered Healthcare",
      image: "https://media.licdn.com/dms/image/v2/D5622AQG1U9Vs2KVORg/feedshare-shrink_800/feedshare-shrink_800/0/1731137444688?e=2147483647&v=beta&t=4Istgg6AO5CAT05FiaXcJd5btgcXWQZPlWJvO1CjnWg",
    },
  ];

  return (
    <>
      <section
        className="relative bg-cover bg-center h-[60vh] md:h-[80vh]"
        style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/04/86/75/48/360_F_486754889_oUlE8eUmEgQ8k3R6OmIf1K9TUrhyYEfn.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative flex flex-col justify-center items-center text-center h-full text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Hackathon Club</h1>
          <p className="text-lg md:text-xl font-light max-w-3xl">
            Unleash your coding skills and collaborate with like-minded innovators.
          </p>
          {/* <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition">
            Join Now
          </button> */}
        </div>
      </section>

      <div className="bg-gray-50 min-h-screen">

        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">
            Hackathon Activities
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


        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">
            Upcoming Events
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Event Image */}
                <img
                  src={event.image || "https://via.placeholder.com/400x200"}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                {/* Event Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">{event.description}</p>
                  </div>
                  {/* Event Date */}
                  <div className="mt-4">
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-medium py-1 px-3 rounded-full">
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="py-16 px-6 bg-gray-50">
          <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">
            Past Hackathon Winners
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {pastWinners.map((winner, index) => (
              <div
                key={index}
                className="w-full max-w-sm flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >

                <img
                  src={winner.image || "https://via.placeholder.com/300"}
                  alt={`${winner.teamName} Team`}
                  className="h-48 w-full object-center"
                />

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {winner.teamName} <span className="text-gray-500 text-sm">({winner.year})</span>
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{winner.project}</p>
                  </div>
                  <a
                    href={winner.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Visit Project &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>



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
            Hackathon Moments
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
                  alt={`Hackathon ${index + 1}`}
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

export default HackathonClubDetails;
