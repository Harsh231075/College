import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">About Our College</h1>
        <p className="mt-4 text-xl text-gray-600">
          We are committed to providing high-quality education with a focus on holistic development.
        </p>
      </div>


      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our History</h2>
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2">
            <p className="text-lg text-gray-600">
              Founded in 1990, our college has been at the forefront of providing innovative and practical education
              to students across various disciplines. With a focus on academic excellence and research, our college
              has built a legacy of success. Over the years, we have been consistently ranked among the top educational
              institutions in the region.
            </p>
            <p className="mt-6 text-lg text-gray-600">
              The college is well-known for its state-of-the-art infrastructure, exceptional faculty, and a vibrant
              campus life. We believe in empowering our students with the skills they need to succeed in the modern world.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://www.iitsystem.ac.in/themes/bfd/assets/image/slider/iit-bombay.jpg"
              alt="College History"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>


      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Achievements</h2>
        <ul className="list-disc pl-6 text-lg text-gray-600 space-y-4">
          <li>Ranked among the top 10 colleges for Computer Science in the country.</li>
          <li>More than 5000 successful alumni working globally.</li>
          <li>Top placement records in both national and international firms.</li>
          <li>Multiple awards in academic excellence and research.</li>
          <li>State-of-the-art infrastructure with modern labs and classrooms.</li>
        </ul>
      </section>


      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Campus Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <img
              src="https://home.iitd.ac.in/images/gallery/phone/g6.jpg"
              alt="Campus 1"
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          </div>
          <div>
            <img
              src="https://campus.iitgn.ac.in/gallery/academic_area/data1/images/central_samvad_in_the_academic_spine.jpg"
              alt="Campus 2"
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          </div>
          <div>
            <img
              src="https://campus.iitgn.ac.in/gallery/academic_area/data1/images/inside_building_5__labs_on_1st_and_2nd_floors,_offices_on_3rd_and_4th_floors.jpg"
              alt="Campus 3"
              className="w-full h-64 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
