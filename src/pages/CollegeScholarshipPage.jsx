
import React from 'react';

const CollegeScholarshipPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            'url(https://st4.depositphotos.com/12722406/24939/i/450/depositphotos_249398572-stock-photo-group-graduates-expressing-delight-front.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
            Rewarding Academic Excellence
          </h2>
          <p className="text-xl font-light mb-8">
            Discover scholarships tailored to your achievements, from academics to extracurriculars.
          </p>
          <a
            href="#categories"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Explore Scholarships
          </a>
        </div>
      </section>


      <section id="criteria" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Eligibility Criteria</h3>
          <ul className="space-y-4 text-lg">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>1.</strong> High performance in JEE or equivalent entrance exams.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>2.</strong> Exceptional 12th-grade scores (e.g., 90%+ in board exams).
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>3.</strong> Winning recognized competitions or events at state/national level.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>4.</strong> Maintaining a high CGPA (e.g., 9.0+) during college studies.
            </li>
          </ul>
        </div>
      </section>

      <section id="categories" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Scholarship Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:shadow-xl">
              <img
                src="https://www.shutterstock.com/image-vector/academic-excellence-top-performing-education-600nw-2308759929.jpg"
                alt="Academic Excellence"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">Academic Excellence</h4>
                <p className="text-gray-600">
                  Scholarships for top scorers in JEE, 12th boards, or equivalent exams.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:shadow-xl">
              <img
                src="https://www.sageeducation.ae/admin/blog/young-activists-taking-action.jpg"
                alt="Extracurricular Achievements"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Extracurricular Achievements
                </h4>
                <p className="text-gray-600">
                  For students who excel in sports, arts, or other extracurricular fields.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:shadow-xl">
              <img
                src="https://zohairansari.com/wp-content/uploads/2021/10/At-home-extracurricular-activities-for-college-applications.png"
                alt="High CGPA"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">High CGPA</h4>
                <p className="text-gray-600">
                  For maintaining a CGPA of 9.0 or above during college.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition duration-300 hover:shadow-xl">
              <img
                src="https://lh7-us.googleusercontent.com/l5yuI2ZOfGX0ZyN1_glrYawSQYTHj7RTMc1lbD23LDbR2TwDZNVvYALm4t08XUOAH7R3VFx6Wjpx18pNwHpcqT3ghqjbs_sFGKmuO6ePn9z5dA8hSKlfMZEO9SgL8HBbvEiaTHak-OLVeU5rkmwqGsU"
                alt="Competition Winners"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  Competition Winners
                </h4>
                <p className="text-gray-600">
                  Recognizing achievements in state or national-level events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="students" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Featured Students</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <img src="https://www.cmrit.ac.in/wp-content/uploads/2021/07/eca.jpeg" alt="Student 1" className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-xl font-bold">Bhawana joshi</h4>
              <p className="text-gray-600">Achieved 95% in 12th boards and received an Academic Excellence scholarship.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <img src="https://www.sriaurobindoinstitute.org/educational/tffs/2019/special-awards-2019/gallery/006.jpg" alt="Student 2" className="w-full h-48  object-center rounded-md mb-4" />
              <h4 className="text-xl font-bold"> Amit sahu </h4>
              <p className="text-gray-600">Excelled in state-level sports and awarded a Sports Excellence scholarship.</p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <img src="https://www.sriaurobindoinstitute.org/educational/tffs/2018/special-awards-2018/gallery/011.jpg" alt="Student 3" className="w-full h-48 object-center rounded-md mb-4" />
              <h4 className="text-xl font-bold">Neha singh </h4>
              <p className="text-gray-600">Maintained a CGPA of 9.5 and earned a High CGPA scholarship.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeScholarshipPage;
