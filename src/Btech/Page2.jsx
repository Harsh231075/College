import React from "react";

function Page2() {
  const eligibilityData = [
    {
      title: "Academic Requirements",
      description: [
        "Minimum 60% aggregate in PCM",
        "12th from recognized board",
        "Mathematics as compulsory subject",
      ],
      icon: "https://thumbs.dreamstime.com/b/academic-requirements-blue-gradient-concept-icon-employee-training-higher-education-assistance-graduation-degree-abstract-idea-277494651.jpg",
    },
    {
      title: "Entrance Exam Requirements",
      description: [
        "Valid JEE Main Score",
        "Minimum percentile: 75",
        "All India Rank under 150000",
      ],
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWuMXIDUn1mCe0fH8qtpfVczdLAVE_N-ggA&s",
    },
    {
      title: "Additional Requirements",
      description: [
        "Age: Below 25 years",
        "Valid ID Proof",
        "Medical Fitness Certificate",
      ],
      icon: "https://usersnap.com/blog/wp-content/uploads/2014/12/web-development-requirement-engineering-header-1280x720.jpg",
    },
  ];

  return (
    <div className="bg-gray-100  py-12 px-6">

      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Eligibility Criteria
        </h1>
        <p className="text-lg text-gray-600">
          Check if you meet the requirements for B.Tech admission
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {eligibilityData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-between p-6 w-full h-full"
          >

            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="w-20 h-20 mb-4"
            />

            {/* Title Section */}
            <h2 className="text-lg font-semibold text-gray-800 text-center mb-3">
              {item.title}
            </h2>

            {/* Description Section */}
            <ul className="list-disc text-gray-600 text-sm text-left pl-5">
              {item.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page2;
