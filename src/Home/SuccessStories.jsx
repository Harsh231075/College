import React from 'react';

function SuccessStories() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-indigo-600">
            Student Success Stories
          </h2>
          <p className="text-lg text-center mb-10 text-gray-700">
            Hear from our proud alumni and current students about their transformative journeys
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Jatin Sharma",
                program: "Computer Science, '23",
                quote:
                  "This program has truly transformed my career. I got a job offer even before graduating!",
                image:
                  "https://oidigitalinstitute.com/wp-content/uploads/2022/07/pexels-padmathilaka-wanigasekara-7616706-1024x683.jpg",
                initials: "JS",
                bg: "bg-blue-600",
              },
              {
                name: "Aarohi Singh",
                program: "Data Science, '22",
                quote:
                  "Thanks to the mentorship and guidance, I secured a role at one of the top tech companies in India!",
                image:
                  "https://media.istockphoto.com/id/1222372717/photo/indian-young-girl-stock-images.jpg?s=612x612&w=0&k=20&c=OYtnDHPUcBMzT_CYBKETl1_f5DFOCHfXo3hY0R9pinM=",
                initials: "AS",
                bg: "bg-green-600",
              },
              {
                name: "Bhavesh Mehta",
                program: "Web Development, '21",
                quote:
                  "The supportive community here helped me land my first freelance project within months!",
                image:
                  "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
                initials: "BM",
                bg: "bg-red-600",
              },
            ].map((story, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
              >
                <img
                  src={story.image}
                  alt={`${story.name}'s Photo`}
                  className="w-full h-48 object-cover transition-transform transform group-hover:scale-105 duration-300"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div
                      className={`${story.bg} rounded-full p-3 mr-4 flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-xl">
                        {story.initials}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold">{story.name}</h3>
                      <p className="text-gray-500">{story.program}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-6 h-6 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26.95.69l-1.519 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.9"
                      />
                    </svg>
                    <p className="text-gray-800 ml-2">{story.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

export default SuccessStories;
