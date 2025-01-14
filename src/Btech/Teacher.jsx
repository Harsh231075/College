import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const branches = [
  { name: 'Computer Science', HOD: 'Dr. Anikt Pawar', photo: 'https://saitm.ac.in/blog/wp-content/uploads/2024/07/0J1A2430-4-1024x683.jpg' },
  { name: 'Electronics', HOD: 'Dr. Aman Gupta', photo: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgpkKJSRLOS2zda9VFfWH3NDEUlmCFijYOtyQQ6XCwvdi_bNZDy2Qr5mJvrNsdJWR7SFZaadWfnCiM5YxyN46bReA4cKhFIvij_uVb7tpKGN47R6-W2W3jlCg42WMUZVpgE6WTDLh8dVHM/w580-h326/17%25281%2529.jpg' },
  { name: 'Mechanical', HOD: 'Dr. Sujeet Choudary', photo: 'https://takshshila.org/wp-content/uploads/2021/05/9U0A4032-600x600.jpg' },

];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Teacher = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">B.Tech Branch HOD</h1>
      <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
        {branches.map((branch, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={branch.photo}
              alt={`${branch.name} HOD`}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{branch.name}</h2>
              <p className="text-gray-700">HOD: {branch.HOD}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Teacher;
