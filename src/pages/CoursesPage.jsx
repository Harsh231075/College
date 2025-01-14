import React from "react";
import { Link, useNavigate } from "react-router-dom";

const courses = [
  {
    id: "btech-computer-science",
    title: "B.Tech in Computer Science",
    description:
      "A 4-year undergraduate program focusing on computer systems, programming, and software development.",
    imageUrl: "/BTECH.png",
    details: "The B.Tech in Computer Science program equips students with the skills needed to excel in the IT industry, from software development to systems engineering."
  },
  {
    id: "mba-marketing",
    title: "MBA in Marketing",
    description:
      "A 2-year postgraduate program that prepares students for leadership roles in the business world.",
    imageUrl: "/mba.png",
    details: "The MBA in Marketing focuses on strategic marketing, consumer behavior, branding, and digital marketing. Learn how to manage marketing campaigns and grow brands."
  },
  {
    id: "bca-computer-applications",
    title: "BCA in Computer Applications",
    description:
      "A 3-year undergraduate program that prepares students for the dynamic field of IT and software development.",
    imageUrl: "/bca.webp",
    details: "The BCA program offers a deep dive into programming languages, database management, and network security to prepare students for IT careers."
  },
  {
    id: "bsc-data-science",
    title: "B.Sc in Data Science",
    description:
      "A 3-year undergraduate program focusing on data analysis, programming, and statistical methods.",
    imageUrl: "/bsc.webp",
    details: "This program covers statistical analysis, machine learning, and data visualization, preparing students for a career in data science and analytics."
  },
  {
    id: "llb-law",
    title: "LLB in Law",
    description:
      "A 5-year integrated law program designed to prepare students for a successful legal career.",
    imageUrl: "/law.webp",
    details: "The LLB program covers subjects like Constitutional Law, Criminal Law, Family Law, and International Law, providing students with a solid foundation in legal practice."
  }
];

function CoursesPage() {
  const navigate = useNavigate();
  const handleNavigation = (id) => {
    console.log(id);
    navigate(`/course-details/${id}`);
  };

  return (
    <div className="bg-gray-50">

      <section
        className="relative bg-cover bg-center h-[500px]"
        style={{ backgroundImage: 'url(https://pbs.twimg.com/media/EHORIA4UUAACIxy.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Explore Our Academic Programs
          </h1>
          <p className="mt-4 text-xl">
            Offering a wide range of undergraduate and postgraduate programs to help you build a successful career.
          </p>

        </div>
      </section>


      <section id="courses" className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-8">
          Available Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{course.title}</h3>
                <p className="mt-4 text-gray-600">{course.description}</p>
                <button
                  onClick={() => handleNavigation(course.id)}
                  className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CoursesPage;
