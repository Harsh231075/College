import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("translate-y-0");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-800 via-purple-700 to-purple-800 shadow-lg text-white z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <Link to="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DRRtt6s9M_1yE4ZLXz4lgDOHUo17NPGXqQ&s"
            alt="rkgit-logo"
            className="h-12 w-12 sm:h-14 sm:w-14 rounded-lg"
          />
        </Link>


        <nav
          ref={navRef}
          className="fixed inset-x-0 top-0 z-10 flex flex-col items-center gap-6 md:bg-none bg-gradient-to-b from-purple-900 to-purple-700 p-8 text-white transform -translate-y-full transition-transform duration-500 ease-in-out md:static md:translate-y-0 md:flex-row md:gap-8 md:bg-transparent md:p-0"
        >
          {[
            "Home",
            "Courses",
            "Faculty",
            "Facilities",
            "Placement",
            "Admission",
            "Academics",
            "Fee",
            "About",
            "Gallery",
          ].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="text-lg font-medium hover:text-yellow-400 hover:scale-105 transition-transform duration-300"
            >
              {item}
            </Link>
          ))}

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl text-white md:hidden"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={showNavbar}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
