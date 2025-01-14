import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaBuilding, FaBriefcase } from "react-icons/fa";

function StatisticsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-indigo-600">
          Our Achievements at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="relative bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="graduate.jpg"
              alt="Over 10,000 successful graduates"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
              <FaGraduationCap className="text-5xl text-blue-400 mb-2 transform hover:text-blue-500 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold">10,000+</h3>
              <p>Successful Graduates</p>
            </div>
          </div>


          <div className="relative bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="faculty.jpg"
              alt="500+ expert faculty members"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
              <FaChalkboardTeacher className="text-5xl text-green-400 mb-2 transform hover:text-green-500 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold">500+</h3>
              <p>Expert Faculty Members</p>
            </div>
          </div>


          <div className="relative bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="infra.jpg"
              alt="20+ world-class campuses"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
              <FaBuilding className="text-5xl text-purple-400 mb-2 transform hover:text-purple-500 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold">20+</h3>
              <p>World-Class Campuses</p>
            </div>
          </div>


          <div className="relative bg-white shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
            <img
              src="placement.jpeg"
              alt="Over 8,000 global placements"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
              <FaBriefcase className="text-5xl text-yellow-400 mb-2 transform hover:text-yellow-500 transition-colors duration-300" />
              <h3 className="text-2xl font-semibold">8,000+</h3>
              <p>Global Placements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
