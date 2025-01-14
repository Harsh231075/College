import React from 'react';
import { Link } from 'react-router-dom';

const FeePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <section className="relative bg-cover bg-center h-[500px]" style={{ backgroundImage: 'url(banner2.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl font-bold">College Fee Structure & Scholarships</h1>
          <p className="text-xl mb-4">Discover our courses, fees, and scholarships</p>
        </div>
      </section>

      <main className="container mx-auto py-8 px-4">
        <section id="fees" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Courses and Fees</h2>
          <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-4">Course</th>
                <th className="border border-gray-300 p-4">Fee (Per Year)</th>
                <th className="border border-gray-300 p-4">Scholarship Available</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-4">B.Tech</td>
                <td className="border border-gray-300 p-4">&#8377; 1,00,000</td>
                <td className="border border-gray-300 p-4">Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">Law</td>
                <td className="border border-gray-300 p-4">&#8377; 80,000</td>
                <td className="border border-gray-300 p-4">Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">B.Sc</td>
                <td className="border border-gray-300 p-4">&#8377; 50,000</td>
                <td className="border border-gray-300 p-4">No</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">BCA</td>
                <td className="border border-gray-300 p-4">&#8377; 60,000</td>
                <td className="border border-gray-300 p-4">Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-4">MBA</td>
                <td className="border border-gray-300 p-4">&#8377; 1,50,000</td>
                <td className="border border-gray-300 p-4">Yes</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="scholarships" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Scholarships</h2>
          <p className="mb-4">We offer various scholarships based on academic excellence, financial need, and other criteria. Below are the types of scholarships available:</p>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative">
                <img src="https://staticimg.amarujala.com/assets/images/2024/10/05/scholarship-chhataravatata-sakalrashapa-student_ffe67cf5f8ea1b9797e68cc40cbaeb54.jpeg" alt="Government Scholarship" className="rounded shadow w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Link to='/goverment'><span className="text-white text-lg font-bold">Government Scholarship</span> </Link>
                </div>
              </div>
              <div className="relative">
                <img src="https://scholarshiplearn.com/wp-content/uploads/2022/06/Sports-Scholarship-in-India-2022-23-min.jpg" alt="College Scholarship" className="rounded shadow w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Link to='/collegeSholarship'>  <span className="text-white text-lg font-bold">College Scholarship</span></Link>
                </div>
              </div>
              {/* <div className="relative">
                <img src="https://cdn.cdnparenting.com/articles/2018/12/20165146/Scholarship-Exams-for-Class-1-2-and-3.webp" alt="Merit-based Scholarship" className="rounded shadow w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Merit-based Scholarship</span>
                </div>
              </div> */}
              <div className="relative">
                <img src="https://www.edumate.tv/wp-content/uploads/2020/06/Return_of_Sports-min.jpg" alt="Sports Achievement Scholarship" className="rounded shadow w-full h-full" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Link to='/sportSholarship'>   <span className="text-white text-lg font-bold">Sports Achievement Scholarship</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://storage.googleapis.com/educrib/verticals/images/schools.webp" alt="Campus" className="rounded shadow w-full" />
            <img src="https://sageuniversity.in/assets/life8sage/audi/audi2.jpg" alt="Library" className="rounded shadow w-full" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default FeePage;
