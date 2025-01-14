import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Our college is committed to academic excellence, fostering innovation, and empowering students to achieve their goals in Link dynamic and inclusive environment.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/admission" className="hover:text-blue-400">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-400">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-blue-400">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>📍 123 College Road, City, State</li>
              <li>📞 +123 456 7890</li>
              <li>📧 info@college.edu</li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-red-500 transition"
              >
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>


        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 College Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
