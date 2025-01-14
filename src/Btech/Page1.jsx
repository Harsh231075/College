import React from 'react';
import { useNavigate } from 'react-router-dom';
function Page1() {
  const navigate = useNavigate();
  const admission = () => {
    navigate('/admission');
  }
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16 w-full max-w-5xl">

          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Shape Your Future with B.Tech Excellence
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Transform your passion for engineering into a successful career with
              our comprehensive B.Tech programs.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button onClick={admission}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition">
                Apply Now
              </button>
              {/* <button className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded transition">
                Check Eligibility
              </button> */}
            </div>
          </div>


          <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Quick Eligibility Check
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="font-bold">Class 12th</p>
                <p>Minimum 60% in PCM</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="font-bold">JEE Main</p>
                <p>Valid Score Required</p>
              </div>
              <div className="bg-gray-700 rounded-lg p-4">
                <p className="font-bold">Admission Process</p>
                <p>Merit-based Selection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
