import React from "react";
import { motion } from "framer-motion";

const leadership = [
  {
    name: "Dr. Amit Sharma",
    position: "Director",
    details: "Dr. Amit Sharma has over 25 years of experience in academic leadership and has been instrumental in driving excellence in education.",
    imageUrl: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?cs=srgb&dl=pexels-rdne-7092613.jpg&fm=jpg",
  },
  {
    name: "Prof. Kavita Singh",
    position: "Principal of Law",
    details: "Prof. Kavita Singh specializes in educational management and research, with a focus on holistic student development.",
    imageUrl: "https://t4.ftcdn.net/jpg/09/99/75/59/360_F_999755937_TGIL1Clf4UkGlEWRzos7KgGa4k0Fh9Bc.jpg",
  },
  {
    name: "Dr. Rajesh Kumar",
    position: "Principle of Btech",
    details: "Dr. Rajesh Kumar has a Ph.D. in Artificial Intelligence and has published over 50 research papers in international journals.",
    imageUrl: "https://www.livelaw.in/h-upload/2024/10/13/565641-professor-gn-saibaba.jpg",
  },
  {
    name: "Dr. Priya Mehta",
    position: "Principle of Bca",
    details: "Dr. Priya Mehta has over 15 years of experience in mechanical design and robotics, with several patents to her name.",
    imageUrl: "https://api.research.unsw.edu.au/sites/default/files/images/profile/headshot_colour.PNG",
  },
  {
    name: "Dr. Rohan Das",
    position: "Principle of MBA",
    details: "Dr. Rohan Das is an expert in strategic management and has been a guest speaker at global business conferences.",
    imageUrl: "https://stjohns.edu.lk/wp-content/uploads/2022/12/Principals-Photo-1024x692.jpg",
  },
  {
    name: "Dr. Ankit baghel",
    position: "Principal of BSc ",
    details: "Dr. Ankit baghel is a renowned academician in the field of Science with over 15 years of experience. He has contributed significantly to research in Physics and has been an advocate for advancing STEM education for women.",
    imageUrl: "https://www.ngmc.org/wp-content/uploads/2024/05/final-copy.jpg"
  }

];

const FaclityPage = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">Leadership & Facilities</h1>
        <p className="mt-4 text-xl text-gray-600">
          Meet our dedicated leadership team and explore the world-class facilities that make our college unique.
        </p>
      </div>


      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={leader.imageUrl}
                alt={leader.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-800">{leader.name}</h3>
                <p className="text-lg text-gray-600">{leader.position}</p>
                <p className="mt-2 text-gray-500">{leader.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Our Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://www.msruas.ac.in/assets/frontend/school-of-law/images/library-img2.webp"
              alt="Library"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Library</h3>
              <p className="mt-2 text-gray-500">
                Our library offers a vast collection of books, journals, and digital resources to support your learning journey.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://vaishno.edu.in//downloads/other/n51c81432b09c6.jpg"
              alt="Labs"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Labs</h3>
              <p className="mt-2 text-gray-500">
                Fully-equipped labs with state-of-the-art technology for practical learning and research.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://www.utp.edu.my/PublishingImages/Pages/The-University/About-Us/Campus%20Life/Sports-and-Recreation-Facillities/collage.jpg"
              alt="Sports Facilities"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">Sports Facilities</h3>
              <p className="mt-2 text-gray-500">
                World-class sports facilities including a gymnasium, football field, and indoor games.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FaclityPage;
