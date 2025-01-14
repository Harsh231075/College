
import React from 'react';

const ScholarshipPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            "url('https://www.universityofcalifornia.edu/sites/default/files/styles/sfmc_image/public/news/images/2023/college-students-campus-uc.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 bg-opacity-70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
            Empowering Your Education Journey
          </h2>
          <p className="text-xl font-light mb-8">
            Avail government scholarships for BTech, BCA, MBA, and Law programs to support your education.
          </p>
        </div>
      </section>


      <section id="eligibility" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Eligibility Criteria</h3>
          <ul className="space-y-4 text-lg">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>1.</strong> Must belong to reserved caste categories (SC/ST/OBC).
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>2.</strong> Annual family income should be less than ₹2,50,000 for SC/ST and ₹1,00,000 for OBC.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>3.</strong> Must be enrolled in a recognized program such as BTech, BCA, MBA, or Law.
            </li>
          </ul>
        </div>
      </section>
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">Scholarship Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-black rounded-lg shadow-md text-center text-white relative overflow-hidden">
              <img src="https://d2w7l1p59qkl0r.cloudfront.net/article/wp-content/uploads/2023/09/04193238/Scholarships-for-Graduate-Students.jpg" alt="BTech" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">BTech</h4>
                <p>For a ₹1,00,000 annual fee:</p>
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>SC/ST: ₹50,000 scholarship</li>
                  <li>OBC: ₹25,000 scholarship</li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-black rounded-lg shadow-md text-white text-center relative overflow-hidden">
              <img src="https://en-media.thebetterindia.com/uploads/2022/10/NMMSS-2022-1666877734.jpg" alt="BCA" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">BCA</h4>
                <p>For a ₹1,00,000 annual fee:</p>
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>SC/ST: ₹50,000 scholarship</li>
                  <li>OBC: ₹25,000 scholarship</li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-black rounded-lg shadow-md text-white text-center relative overflow-hidden">
              <img src="https://images.shiksha.com/mediadata/images/articles/1718625684phpoqtfQj.jpeg" alt="MBA" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">MBA</h4>
                <p>For a ₹1,00,000 annual fee:</p>
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>SC/ST: ₹50,000 scholarship</li>
                  <li>OBC: ₹25,000 scholarship</li>
                </ul>
              </div>
            </div>
            <div className="p-6 bg-black rounded-lg text-white shadow-md text-center relative overflow-hidden">
              <img src="https://grantunity.com/wp-content/uploads/2023/04/Law-Students.png" alt="Law" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">Law</h4>
                <p>For a ₹1,00,000 annual fee:</p>
                <ul className="list-disc list-inside mt-2 text-left">
                  <li>SC/ST: ₹50,000 scholarship</li>
                  <li>OBC: ₹25,000 scholarship</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="apply" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold text-center mb-8">How to Apply</h3>
          <ol className="space-y-4 text-lg">
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>Step 1:</strong> Visit the official scholarship portal.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>Step 2:</strong> Register with your personal and educational details.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>Step 3:</strong> Upload the required documents such as caste certificate, income certificate, and academic records.
            </li>
            <li className="p-4 bg-gray-100 rounded-lg shadow">
              <strong>Step 4:</strong> Submit your application and note the reference number for future use.
            </li>
          </ol>
        </div>
      </section>

    </div>
  );
};

export default ScholarshipPage;
