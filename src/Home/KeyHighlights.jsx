import React from "react";
import { FaGraduationCap, FaChalkboardTeacher, FaBuilding, FaGlobe } from "react-icons/fa";

function KeyHighlights() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white shadow-xl rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <FaGraduationCap className="text-blue-600 text-6xl mx-auto mb-4 hover:text-yellow-500 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              100+ Programs
            </h3>
            <p className="text-gray-500">
              Explore a wide variety of undergraduate and postgraduate programs.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <FaChalkboardTeacher className="text-green-600 text-6xl mx-auto mb-4 hover:text-red-500 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Expert Faculty
            </h3>
            <p className="text-gray-500">
              Learn from industry-leading experts with years of experience.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <FaBuilding className="text-purple-600 text-6xl mx-auto mb-4 hover:text-orange-500 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Modern Infrastructure
            </h3>
            <p className="text-gray-500">
              Experience world-class facilities and cutting-edge technology.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-8 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300">
            <FaGlobe className="text-yellow-600 text-6xl mx-auto mb-4 hover:text-pink-500 transition-colors duration-300" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Global Opportunities
            </h3>
            <p className="text-gray-500">
              Access internships and placements with top global companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyHighlights;
