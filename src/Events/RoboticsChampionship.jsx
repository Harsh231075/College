import React from "react";

const RoboticsChampionship = () => {
  const winners = [
    {
      year: "2023",
      first: "Team AlphaBots",
      second: "Team MechaStars",
      third: "Team RoboMasters",
    },
    {
      year: "2022",
      first: "Team RoboWarriors",
      second: "Team SteelMinds",
      third: "Team CircuitBreakers",
    },
    {
      year: "2021",
      first: "Team AI Geniuses",
      second: "Team CodeBots",
      third: "Team RoboTech",
    },
  ];

  const photos = [
    "https://analyticsindiamag.com/wp-content/uploads/2019/05/first-nevada-robotics-robots_MEDIUM.jpg",
    "https://image.pbs.org/poster_images/assets/36_OGiHxG6.jpg",
    "https://www.jayroboticsclub.in/wp-content/uploads/2013/08/rc-3.jpg",
    "https://cdn.prod.website-files.com/5c75568c33fbe0230afcc8c6/627b9500f04024278c784c65_Bez%20tytu%C5%82u.jpg",
    'https://static.toiimg.com/thumb/msid-111741257,width-1280,height-720,imgsize-91080,resizemode-72,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
    'https://static.toiimg.com/thumb/imgsize-23456,msid-111738696,width-600,resizemode-4/111738696.jpg'
  ];

  return (
    <div className="bg-gray-100">

      <section
        className="relative bg-[url('https://i0.wp.com/roboticsindia.live/wp-content/uploads/2021/08/robo2.jpg?fit=1920%2C1280&ssl=1')] bg-cover bg-center bg-no-repeat text-white h-[80vh] flex items-center justify-center"
      >

        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative text-center px-6 z-10">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">
            Robotics Championship
          </h1>
          <p className="text-lg mb-6 font-light max-w-xl mx-auto">
            Experience the ultimate battle of innovation and technology in the
            National Robotics Championship.
          </p>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition transform hover:scale-105">
            Register Now
          </button>
        </div>
      </section>


      <section className="relative bg-gradient-to-r from-purple-50 via-gray-100 to-blue-50 py-16 px-8">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
            Competition Details
          </h2>


          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            The <span className="font-semibold text-purple-600">Robotics Championship</span> is an annual
            <span className="font-semibold"> national-level competition</span> held in
            <span className="text-blue-600"> July–August</span>. It brings together the brightest minds in robotics
            to demonstrate their <span className="font-semibold">innovation</span>, <span className="font-semibold">programming</span>, and
            <span className="font-semibold"> engineering prowess</span>. Exciting challenges await to test skills and teamwork.
          </p>


          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-left">
            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-trophy"></i>
                </span>
                <span className="text-lg">
                  <strong className="text-blue-600">National-level competition</strong> with regional qualifiers.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-users"></i>
                </span>
                <span className="text-lg">
                  <strong>Team size:</strong> 3–5 members.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-tasks"></i>
                </span>
                <span className="text-lg">
                  Task difficulty progressively increases as the competition advances.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-award"></i>
                </span>
                <span className="text-lg">
                  <strong className="text-green-600">Generous prizes</strong> for winners and runners-up.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-calendar-alt"></i>
                </span>
                <span className="text-lg">
                  Event duration: <strong className="text-purple-500">July–August</strong>.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-purple-100 via-pink-50 to-purple-50 py-16 px-6">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-extrabold text-purple-800 mb-12">
            Prize Money
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white font-bold text-lg px-6 py-3 rounded-full shadow-md">
                Winner
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mt-6 mb-4">₹1,00,000</h3>
              <p className="text-gray-600 text-lg">For the champion of the contest!</p>
            </div>

            <div className="relative bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-400 text-white font-bold text-lg px-6 py-3 rounded-full shadow-md">
                2nd Place
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mt-6 mb-4">₹50,000</h3>
              <p className="text-gray-600 text-lg">For the brilliant runner-up.</p>
            </div>

            <div className="relative bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white font-bold text-lg px-6 py-3 rounded-full shadow-md">
                3rd Place
              </div>
              <h3 className="text-4xl font-bold text-gray-800 mt-6 mb-4">₹25,000</h3>
              <p className="text-gray-600 text-lg">For the creative challenger.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-extrabold text-gray-800 mb-12">
            Year-Wise Winners
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {winners.map((winner) => (
              <div
                key={winner.year}
                className="relative bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
              >

                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white font-semibold text-sm px-4 py-2 rounded-full shadow-lg">
                  {winner.year}
                </div>


                <div className="pt-8">
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>1st:</strong> {winner.first}
                  </p>
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>2nd:</strong> {winner.second}
                  </p>
                  <p className="text-lg text-gray-700">
                    <strong>3rd:</strong> {winner.third}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Photo Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Event ${index + 1}`}
                className="rounded-lg shadow-md w-full h-60 object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoboticsChampionship;
