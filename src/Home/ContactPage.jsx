import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your Email.js credentials
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const USER_ID = "your_user_id";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        () => {
          setStatus("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setStatus("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">
        Contact Us
      </h2>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Enter the subject"
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Write your message here..."
              className="w-full mt-2 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p className={`mt-4 text-center font-semibold ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
