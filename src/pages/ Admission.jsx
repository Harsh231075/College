import React, { useState } from "react";
import { motion } from "framer-motion";

function Admission() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {!isSubmitted ? (
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-4">
            College Admission Portal
          </h2>
          <p className="text-lg text-center text-gray-600 mb-8">
            Click the button below to submit your application.
          </p>
          <div className="flex justify-center">
            <motion.button
              onClick={handleSubmit}
              className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Submit Application
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Congratulations!
          </h2>
          <p className="text-lg text-gray-600">
            Your application has been submitted successfully.
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Our college team will contact you soon. Thank you for choosing us!
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default Admission;
