import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AdmissionPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    dob: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, course, dob, address } = formData;
    if (name && email && phone && course && dob && address) {
      console.log("Form submitted", formData);
      navigate('/join');
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="bg-gray-50">
      <motion.header
        className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 text-white py-20 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Welcome to Our Admissions Portal
        </h1>
        <p className="mt-4 text-xl">Fill out the form below to apply for admission.</p>

      </motion.header>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us for Your Future?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "World-Class Faculty",
                description: "Learn from the best in the industry with years of experience and academic excellence.",
                icon: "👨‍🏫",
              },
              {
                title: "Modern Infrastructure",
                description: "Experience cutting-edge facilities designed to enhance learning and growth.",
                icon: "🏛️",
              },
              {
                title: "Global Placements",
                description: "Access top internships and job opportunities at leading organizations worldwide.",
                icon: "🌍",
              },
            ].map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-8 bg-white shadow-lg rounded-lg transform transition-transform duration-300 ${hoveredCard === index ? "scale-105 shadow-2xl" : ""}`}
              >
                <div className="text-5xl">{card.icon}</div>
                <h3 className="text-2xl font-bold mt-4">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          Admission Form
        </h2>
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col">
                <label htmlFor="phone" className="font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dob" className="font-semibold text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <div className="flex flex-col">
                <label htmlFor="course" className="font-semibold text-gray-700">Course Applying For</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                >
                  <option value="">Select a course</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Management">Management</option>
                  <option value="Design">Design</option>
                  <option value="Science">Science</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="address" className="font-semibold text-gray-700">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                  rows="4"
                  placeholder="Enter your address"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <motion.button
                type="submit"
                className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Steps to Apply
          </h2>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
            {[
              {
                step: "Step 1",
                title: "Register Online",
                description: "Fill out the online application form with your personal and academic details.",
              },
              {
                step: "Step 2",
                title: "Submit Documents",
                description: "Upload all necessary documents such as transcripts, ID proofs, and photographs.",
              },
              {
                step: "Step 3",
                title: "Pay Fees",
                description: "Complete the payment for application processing and secure your spot.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-lg font-bold text-yellow-400">
                  {step.step}
                </h3>
                <h4 className="text-xl font-semibold mt-2">{step.title}</h4>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "How do I apply for admission?",
              answer: "You can apply through our online admission portal by filling out the form above.",
            },
            {
              question: "What documents are required?",
              answer: "You will need your academic certificates, ID proof, and passport-sized photographs.",
            },
            {
              question: "Is there an entrance exam?",
              answer: "Yes, depending on the course you are applying for, an entrance exam may be required.",
            },
            {
              question: "When will the classes begin?",
              answer: "Classes for the new batch will start in the month of July.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdmissionPage;
