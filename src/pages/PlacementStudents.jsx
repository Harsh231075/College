import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const students = [
  {
    id: 1,
    name: "Harsh Singh",
    photo: "https://i.pinimg.com/550x/f1/79/3e/f1793e26bd3372a59d97ecfe18732749.jpg",
    package: "12 LPA",
    company: "Google",
    year: "2023",
  },
  {
    id: 2,
    name: "Rahul Verma",
    photo: "https://images.unsplash.com/photo-1690037901153-7fd75205941a?fm=jpg",
    package: "10 LPA",
    company: "Microsoft",
    year: "2024",
  },
  {
    id: 3,
    name: "Priya Sharma",
    photo: "https://media.istockphoto.com/id/1029797636/photo/school-girl-stock-image.jpg?s=612x612&w=0&k=20&c=vTO9wMeghrSTzTrKNvv_vBmjF7yJMMPA-coFg3bab2w=",
    package: "9 LPA",
    company: "Amazon",
    year: "2022",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const PlacementStudents = () => {
  return (
    <div className=" py-10">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12">Placement Students</h1>
      <Carousel
        responsive={responsive}
        className="px-5 md:px-10"
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        transitionDuration={500}
      >
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl mx-4 my-6 p-4"
          >
            <div className="relative rounded-xl overflow-hidden mb-6">
              <img
                src={student.photo}
                alt={student.name}
                className="w-full h-48 object-center rounded-xl transform transition-all duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold">{student.name}</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{student.name}</h2>
              <p className="text-gray-600 text-sm mb-2">Package: <span className="font-medium">{student.package}</span></p>
              <p className="text-gray-600 text-sm mb-2">Company: <span className="font-medium">{student.company}</span></p>
              <p className="text-gray-600 text-sm">Year of Passout: <span className="font-medium">{student.year}</span></p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PlacementStudents;
