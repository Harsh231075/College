import React from "react";

const steps = [
  {
    id: 1,
    title: "Counseling",
    description:
      "Register for counseling to begin your admission process. Fill out the required details and submit your preferences.",
    image: "https://t3.ftcdn.net/jpg/01/10/06/06/360_F_110060693_XXn4sI6AcoB7XT1ZRh5bzOA9swsoAymX.jpg",
  },
  {
    id: 2,
    title: "Merit List & Seat Allotment",
    description:
      "Based on your scores, a merit list will be published. Seats will be allocated according to your rank and preferences.",
    image: "https://cache.careers360.mobi/media/article_images/2024/6/22/Gujarat-University-merit-list.jpg",
  },
  {
    id: 3,
    title: "Reporting to College",
    description:
      "Once the seat is allotted, report to the assigned college within the given timeline with all required documents.",
    image: "https://w7.pngwing.com/pngs/1007/888/png-transparent-lincoln-county-school-district-report-card-north-carolina-wesleyan-college-information-school-school-purple-violet-logo.png",
  },
  {
    id: 4,
    title: "Fee Payment",
    description:
      "Complete your admission by paying the required fees and confirming your seat. Keep the receipt for future reference.",
    image: "https://cdn1.vectorstock.com/i/1000x1000/32/00/college-fees-concept-icon-vector-33783200.jpg",
  },
];

const AdmissionProcess = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-12">
        Admission Process
      </h2>
      <div className="max-w-5xl mx-auto relative">
        <div className="border-l-4 border-blue-600 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="mb-12 pl-8 relative flex items-center space-x-6"
            >

              <div className="flex-shrink-0">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-24 h-24 rounded-full shadow-lg border-2 border-blue-600"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>

              {index !== steps.length - 1 && (
                <div className="absolute top-28 left-8 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;
