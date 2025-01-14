import React from "react";

const ArtsAndDesignContest = () => {
  const winners = [
    {
      year: "2023",
      first: "Arya Sharma",
      second: "Meera Kapoor",
      third: "Rohan Das",
    },
    {
      year: "2022",
      first: "Sneha Joshi",
      second: "Aarav Mehta",
      third: "Kavya Singh",
    },
  ];

  const galleryPhotos = [
    "https://static.toiimg.com/thumb/msid-71840923,width-1280,height-720,resizemode-4/71840923.jpg",
    "https://i.ytimg.com/vi/ArxlkW5eCAc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfRHXCdtLNT9f8M9OWfxiA9BdepA",
    "https://ldce.ac.in/upload/gallery/177/rang-amaizi-zUjlQpTREb.jpg",
    "https://www.phcer.ac.in/wp-content/uploads/2023/01/trash-to-art-competition-2023.jpg",
    "https://pbs.twimg.com/media/FHiy3KBVUAQh7fY.jpg",
    'https://bloximages.newyork1.vip.townnews.com/tdtnews.com/content/tncms/assets/v3/editorial/b/fd/bfd883c2-8597-11ee-969e-a30d21da01db/6557e7bfeccdc.image.jpg?resize=435%2C500'
  ];

  return (
    <div className="bg-gray-50">

      <section
        className="relative bg-[url('https://www.shutterstock.com/image-vector/illustration-famous-indian-monument-landmark-260nw-1360934000.jpg')] bg-cover bg-center bg-no-repeat text-white h-[80vh] flex items-center justify-center"
      >

        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        <div className="relative text-center px-6 z-10">
          <h1 className="text-6xl font-extrabold mb-4 animate-pulse">
            Arts & Design Contest
          </h1>
          <p className="text-xl mb-6 font-light">
            Unleash your creativity and showcase your artistic brilliance in a
            competition filled with colors and imagination!
          </p>
          {/* <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full font-semibold text-gray-900 transition">
            Register Now
          </button> */}
        </div>
      </section>



      <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 py-16 px-6">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-extrabold text-gray-900 mb-10">
            Contest Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-white shadow-xl rounded-xl p-10 transform transition-all hover:scale-105 hover:shadow-2xl hover:opacity-90 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center -mt-8">
                <i className="fas fa-leaf text-teal-600 text-2xl">1</i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Theme</h3>
              <p className="text-gray-700 mb-4">
                Express your ideas around <span className="font-semibold text-teal-600">"Nature and Humanity"</span> through any art medium.
              </p>
              <img
                src="https://onetreeplanted.org/cdn/shop/articles/taking_photo_of_forest_on_smartphone_1800x.jpg?v=1661785399"
                alt="Nature"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-xl rounded-xl p-10 transform transition-all hover:scale-105 hover:shadow-2xl hover:opacity-90 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center -mt-8">
                <i className="fas fa-palette text-blue-600 text-2xl">2</i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h3>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Digital Art</span>, Painting, Sketching, and <span className="font-semibold">3D Design</span>.
              </p>
              <img
                src="https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202410/6717593042d4b-co-225004676-16x9.jpg"
                alt="Art"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-xl rounded-xl p-10 transform transition-all hover:scale-105 hover:shadow-2xl hover:opacity-90 relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center -mt-8">
                <i className="fas fa-calendar-alt text-red-600 text-2xl">3</i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Event Date</h3>
              <p className="text-gray-700 mb-4">Organized between July and August</p>
              <p className="text-gray-700 font-semibold">Final Date: October 30, 2025</p>
              <img
                src="https://i.pinimg.com/736x/31/b1/5f/31b15f1d9169fd0be91a14b091040818.jpg"
                alt="Event"
                className="w-full h-32 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>



      <section className="bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-300 py-20 px-8">
        <div className="container mx-auto text-center">

          <h2 className="text-5xl font-extrabold text-gray-900 mb-16">
            Prize Money
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg py-3 mb-6">
                <h3 className="text-3xl font-semibold">Winner</h3>
              </div>
              <p className="text-4xl font-semibold text-gray-800">₹1,50,000</p>
            </div>


            <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg py-3 mb-6">
                <h3 className="text-3xl font-semibold">2nd Place</h3>
              </div>
              <p className="text-4xl font-semibold text-gray-800">₹75,000</p>
            </div>


            <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg py-3 mb-6">
                <h3 className="text-3xl font-semibold">3rd Place</h3>
              </div>
              <p className="text-4xl font-semibold text-gray-800">₹50,000</p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 py-20 px-8">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h2 className="text-5xl font-extrabold text-gray-900 mb-12">
            Year-Wise Winners
          </h2>

          {/* Winners Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {winners.map((winner, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
              >
                {/* Year Header */}
                <div className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg py-3 mb-6">
                  <h3 className="text-3xl font-semibold">{winner.year}</h3>
                </div>

                {/* Winner Details */}
                <p className="text-lg text-gray-700 mb-3">
                  <strong className="text-blue-500">1st:</strong> {winner.first}
                </p>
                <p className="text-lg text-gray-700 mb-3">
                  <strong className="text-green-500">2nd:</strong> {winner.second}
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="text-yellow-500">3rd:</strong> {winner.third}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Artwork ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-60 object-center  hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtsAndDesignContest;
