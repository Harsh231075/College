import React from 'react';
import CollegeClubsPage from './CollegeClubsPage';
import CollegeEventsPage from './CollegeEventsPage';

const AcademicPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to College Academic Portal</h1>
          <p className="text-xl">Find all the academic details, schedules, and updates here.</p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section id="timetable" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Course-wise Timetable</h2>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-indigo-200">
                <th className="border border-gray-300 p-4">Course</th>
                <th className="border border-gray-300 p-4">Day</th>
                <th className="border border-gray-300 p-4">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">BTECH</td>
                <td className="border border-gray-300 p-4">Monday - Friday</td>
                <td className="border border-gray-300 p-4">9:00 AM - 4:00 AM</td>
              </tr>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">MBA</td>
                <td className="border border-gray-300 p-4">Monday - Friday</td>
                <td className="border border-gray-300 p-4">10:00 AM - 4:00 PM</td>
              </tr>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">BCA</td>
                <td className="border border-gray-300 p-4">Monday - Thursday</td>
                <td className="border border-gray-300 p-4">10:00 AM - 3:00 PM</td>
              </tr>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">BSC</td>
                <td className="border border-gray-300 p-4">Monday-Thurday</td>
                <td className="border border-gray-300 p-4">10:00 AM - 3:00 PM</td>
              </tr>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">LAW</td>
                <td className="border border-gray-300 p-4">Monday-Friday</td>
                <td className="border border-gray-300 p-4">10:00 AM - 4:00 PM</td>
              </tr>

            </tbody>
          </table>
        </section>

        <section id="busSchedule" className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Bus Schedule</h2>
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-indigo-200">
                <th className="border border-gray-300 p-4">Route</th>
                <th className="border border-gray-300 p-4">Pickup Time</th>
                <th className="border border-gray-300 p-4">Drop-off Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">Route 1</td>
                <td className="border border-gray-300 p-4">7:00 AM</td>
                <td className="border border-gray-300 p-4">3:30 PM</td>
              </tr>
              <tr className="hover:bg-indigo-100 transition ease-in-out duration-300">
                <td className="border border-gray-300 p-4">Route 2</td>
                <td className="border border-gray-300 p-4">8:30 AM</td>
                <td className="border border-gray-300 p-4">4:30 PM</td>
              </tr>

            </tbody>
          </table>
        </section>
        <CollegeClubsPage></CollegeClubsPage>
        <CollegeEventsPage></CollegeEventsPage>
      </main>

    </div>
  );
};

export default AcademicPage;
