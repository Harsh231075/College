import React from "react";
import { motion } from "framer-motion";
import PlacementStudents from "./PlacementStudents";

function PlacementPage() {
  return (
    <div className="bg-gray-50">

      <motion.header
        className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700 text-white py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Empowering Careers with Excellence
        </h1>
        <p className="mt-4 text-xl">
          Connecting students to top companies and preparing them for their dream roles.
        </p>
      </motion.header>


      <section className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Placement Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Top Recruiters",
              text: "Leading companies like Google, Microsoft, and Amazon hire from our campus.",
              img: "https://www.acem.org.in/pagres/our_top_recruiters-1.JPG",
            },
            {
              title: "Comprehensive Training",
              text: "Skill development programs tailored for technical and soft skills enhancement.",
              img: "https://www.rheinhuette.de/fileadmin/_processed_/c/c/csm_Header-Schulungen_774bc4dc45.jpg",
            },
            {
              title: "Global Opportunities",
              text: "We ensure students achieve placements not only in India but across the globe.",
              img: "https://20countries.com/wp-content/uploads/global-investment-opportunities.jpg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-4 text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Our Placement Process
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {[
            {
              step: 1,
              title: "Pre-Placement Training",
              text: "Workshops on resume building, interview preparation, and technical skills.",
            },
            {
              step: 2,
              title: "On-Campus Drives",
              text: "Companies conduct recruitment drives to select the best talent.",
            },
            {
              step: 3,
              title: "Placement Success",
              text: "Students receive offers and begin their professional journey.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex items-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full">
                {item.step}
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <PlacementStudents />

      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Testimonials from Alumni
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Ankit ",
              title: "Software Engineer at Google",
              text: "The placement support was phenomenal. The training and opportunities provided were beyond expectations.",
              img: "https://static.vecteezy.com/system/resources/previews/012/535/040/non_2x/casual-business-man-working-on-desktop-computer-in-modern-open-plan-startup-office-interior-selective-focus-free-photo.jpg",
            },
            {
              name: "Vijay",
              title: "Data Scientist at Microsoft",
              text: "The rigorous pre-placement training gave me the confidence to excel in interviews.",
              img: "https://static.vecteezy.com/system/resources/thumbnails/045/782/404/small/bangladeshi-male-software-developer-at-work-photo.jpg",
            },
            {
              name: "Abhishek",
              title: "Analyst at Amazon",
              text: "Securing my dream job was made easy with the campus placement programs.",
              img: "https://static.vecteezy.com/system/resources/previews/052/323/449/non_2x/indian-programmer-smiling-at-the-office-while-working-on-code-on-computer-screen-photo.jpeg",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic">{`"${testimonial.text}"`}</p>
              <p className="mt-4 font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default PlacementPage;
