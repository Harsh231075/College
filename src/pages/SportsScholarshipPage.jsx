
import React from 'react';

const SportsScholarshipPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            "url('https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide9.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
            Recognizing Sports Excellence
          </h2>
          <p className="text-xl font-light mb-8">
            Celebrating students excelling in sports at national and international levels with exclusive scholarships.
          </p>
          <a
            href="#sports-scholarships"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="criteria" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Eligibility Criteria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 flex justify-center items-center bg-blue-100 text-blue-600 rounded-full mr-6">

                <img src='https://presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png' className='w-full h-full' />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  National Achievements
                </h4>
                <p className="text-gray-600">
                  Achievements in national-level competitions in any recognized sport.
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 flex justify-center items-center bg-green-100 text-green-600 rounded-full mr-6">
                <img src='https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/98057f86-e9b5-4374-91a6-80a12f0a30be/9a5dd6f5-28fe-4d26-b3ce-eea7141e1b30.png' className='w-full h-full' />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  International Representation
                </h4>
                <p className="text-gray-600">
                  Representation in international sports competitions.
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 flex justify-center items-center bg-yellow-100 text-yellow-600 rounded-full mr-6">
                <img src='https://www.techniajz.com/techniajz/assets/uploads/blog_images/2ed25e9b7f8f3955b88285cda0e37deb.jpg' className='w-full h-full' />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  State-Level Champions
                </h4>
                <p className="text-gray-600">
                  Consistent performance in state-level championships.
                </p>
              </div>
            </div>

            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 flex justify-center items-center bg-purple-100 text-purple-600 rounded-full mr-6">
                <img src='https://t3.ftcdn.net/jpg/02/78/42/76/360_F_278427683_zeS9ihPAO61QhHqdU1fOaPk2UClfgPcW.jpg' className='w-full h-full' />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Active Participation
                </h4>
                <p className="text-gray-600">
                  Participation in inter-college or inter-university events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Scholarship Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

            <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="https://wp-media.learningally.org/wp-content/uploads/2024/06/26100430/AdobeStock_724728527-scaled.jpeg"
                alt="National Achievers"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold">National Achievers</h4>
                <p className="mt-2 text-sm">
                  Scholarships for students who have excelled at national-level sports
                  events.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="https://plus.unsplash.com/premium_photo-1661868906940-5d8443acf49e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR8ZW58MHx8MHx8fDA%3D"
                alt="International Representation"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold">International Representation</h4>
                <p className="mt-2 text-sm">
                  For students representing the country in international competitions.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="https://media.cnn.com/api/v1/images/stellar/prod/220901162946-01-sports-fun-wellness-top-card-stock.jpg?c=original"
                alt="State-Level Champions"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold">State-Level Champions</h4>
                <p className="mt-2 text-sm">
                  Recognizing outstanding performance in state-level sports events.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img
                src="https://mariancollege.org/wp-content/uploads/2023/03/IMG_9681-edited-2.jpg"
                alt="College Sports Stars"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-75 group-hover:opacity-90 transition duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <h4 className="text-2xl font-bold">College Sports Stars</h4>
                <p className="mt-2 text-sm">
                  For active participants in inter-college or inter-university events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="students" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Featured Athletes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src="https://islamiahcollege.edu.in/download/photos/c_0912241710215430.jpg"
                  alt="Karan Sharma"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h4 className="text-white text-lg font-semibold">Karan Sharma</h4>
                  <p className="text-gray-300 text-sm">
                    Gold Medalist in National-Level Badminton Championship
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src="https://suncoastcc.qld.edu.au/wp-content/uploads/SCC-Swim-Sec-18.jpg"
                  alt="Jane Smith"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h4 className="text-white text-lg font-semibold">Shivam pandey</h4>
                  <p className="text-gray-300 text-sm">
                    Represented India in International Swimming Competition
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src="https://t3.ftcdn.net/jpg/04/76/17/70/360_F_476177047_XHsk4GWUeHF5g8YJao1CkWAVBOFpeBZV.jpg"
                  alt="Sam Wilson"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h4 className="text-white text-lg font-semibold">Yashraj</h4>
                  <p className="text-gray-300 text-sm">
                    State-Level Football Champion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SportsScholarshipPage;
