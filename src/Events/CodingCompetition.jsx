import React from "react";

const CodingCompetition = () => {
  const winners = [
    {
      year: "2023",
      first: "Team CodeMasters",
      second: "Team Debuggers",
      third: "Team StackOverflow",
    },
    {
      year: "2022",
      first: "Team AlgoRangers",
      second: "Team ByteForce",
      third: "Team SyntaxErrors",
    },
    {
      year: "2021",
      first: "Team CyberKnights",
      second: "Team DevHustlers",
      third: "Team CodeBreakers",
    },
  ];

  const photos = [
    "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2024/01/SJBIT-Inter-College-Coding-Competition1.jpeg?resize=1024%2C682&ssl=1",
    "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/5fd5c9618c231_rc-previous-year-1.png?d=600x600",
    "https://www.masaischool.com/blog/content/images/wordpress/2021/07/Masai-School-Admissions-Students.jpeg",
    "https://lh3.googleusercontent.com/proxy/n1g6pTfmxCtds4X3OqZQfvNdAI-VzALjesG4T2jk2fJjWrQourgbRXpp_u1IZSPijtrxxItSWBapO0QHBzmxpUl_JT7vrYKBcrYOMgd-DO7CiG07sUyAj3QMPibqvg",
    'https://silicon.ac.in/wp-content/uploads/2022/09/Code-4-Odisha_28-Aug.jpg',
    'https://startupodisha.gov.in/wp-content/uploads/2023/01/Code-4-Odisha-5.jpeg'
  ];

  return (
    <div className="bg-gray-100">

      <section
        className="relative bg-[url('https://news.itmo.ru/images/news/big/p4755.jpg')] bg-cover bg-center bg-no-repeat text-white h-[80vh] flex items-center justify-center"
      >

        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        <div className="relative text-center px-6 z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">
            National Coding Championship
          </h1>
          <p className="text-xl mb-6 font-light">
            Compete with the best coders across the country. Showcase your skills in
            algorithms, data structures, and problem-solving.
          </p>
          <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold text-gray-900 transition">
            Register Now
          </button>
        </div>
      </section>


      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-bold text-gray-800 mb-12">
            Competition Details
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-semibold mb-4">Team Size</h3>
              <p className="text-lg">
                Compete in teams of up to <span className="font-bold">4 members</span>. Solo participants are also welcome.
              </p>
            </div>


            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-semibold mb-4">Levels</h3>
              <p className="text-lg">
                <span className="font-bold">3 Stages:</span> Qualifiers, Semi-finals, and Grand Finale.
              </p>
            </div>


            <div className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow-xl rounded-lg p-8 transform hover:scale-105 transition duration-300">
              <h3 className="text-3xl font-semibold mb-4">Format</h3>
              <p className="text-lg">
                Competitive coding platform-based challenges with live leaderboards.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 px-6">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-extrabold text-blue-800 mb-12">Prize Money</h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

            <div className="relative bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white font-bold text-xl px-6 py-2 rounded-full shadow-md">
                Winner
              </div>
              <p className="text-4xl font-extrabold text-gray-700 mt-8">₹2,00,000</p>
              <p className="text-lg text-gray-600 mt-2">Grand prize for the champion!</p>
            </div>


            <div className="relative bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-500 text-white font-bold text-xl px-6 py-2 rounded-full shadow-md">
                2nd Place
              </div>
              <p className="text-4xl font-extrabold text-gray-700 mt-8">₹1,00,000</p>
              <p className="text-lg text-gray-600 mt-2">Reward for the runner-up.</p>
            </div>


            <div className="relative bg-white shadow-lg rounded-xl p-8 transform hover:scale-105 transition duration-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-gray-800 font-bold text-xl px-6 py-2 rounded-full shadow-md">
                3rd Place
              </div>
              <p className="text-4xl font-extrabold text-gray-700 mt-8">₹50,000</p>
              <p className="text-lg text-gray-600 mt-2">Prize for the second runner-up.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-gradient-to-r from-gray-100 to-gray-50">
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12">
            Year-Wise Winners
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {winners.map((winner) => (
              <div
                key={winner.year}
                className="relative bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transform hover:scale-105 transition duration-300"
              >
                {/* Year Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-bold text-xl px-6 py-2 rounded-full shadow-md">
                  {winner.year}
                </div>

                {/* Winner Details */}
                <div className="mt-8 text-left">
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    🏆 <strong>1st Place:</strong> {winner.first}
                  </p>
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    🥈 <strong>2nd Place:</strong> {winner.second}
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    🥉 <strong>3rd Place:</strong> {winner.third}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Photo Gallery */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Event ${index + 1}`}
                className="rounded-lg shadow-md w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodingCompetition;
