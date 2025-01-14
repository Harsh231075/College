import React from 'react';

function ResearchInnovation() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">Research & Innovation</h1>
      <p className="text-xl text-center text-gray-700 mb-12">
        Pioneering breakthrough research across multiple disciplines
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Technology & AI Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-07/11/full/1626023772-9613.jpg?im=FeatureCrop,size=(826,465)"
            alt="Technology & AI"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <h2 className="ml-4 text-2xl font-semibold text-indigo-600">Technology & AI</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Leading research in artificial intelligence, machine learning, and robotics.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>15 Active Projects</li>
              <li>23 Publications</li>
            </ul>
          </div>
        </div>

        {/* Health & Medicine Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="https://entrepreneurhandbook.co.uk/wp-content/uploads/2018/08/Student-business-ideas-1.jpg.webp"
            alt="Health & Medicine"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="https://entrepreneurhandbook.co.uk/wp-content/uploads/2018/08/Student-business-ideas-1.jpg.webp"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0 9 9 0 0118 0"
                />
              </svg>
              <h2 className="ml-4 text-2xl font-semibold text-green-600">Health & Medicine</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Innovating solutions for healthcare challenges through groundbreaking research.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>10 Active Projects</li>
              <li>15 Publications</li>
            </ul>
          </div>
        </div>

        {/* Sustainability Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFznHzFelLlt8nOutZzAzET0IivW0PGL3nvQ&s"
            alt="Sustainability"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m-3-3H9"
                />
              </svg>
              <h2 className="ml-4 text-2xl font-semibold text-yellow-600">Sustainability</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Researching sustainable practices and technologies for a better future.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>8 Active Projects</li>
              <li>12 Publications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchInnovation;
