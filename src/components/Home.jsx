import React, { useState,useContext } from 'react';
import Doctor from './Doctor.jsx';
import useGetDoctors from '../hooks/useGetDoctors.js';
import AuthenticationContext from '../context/AuthenticationContext';

function Home() {
  const {userId} = useContext(AuthenticationContext)
  console.log("userId",userId)
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const doctors = useGetDoctors(userId, selectedSpecialization);
  console.log(doctors)

  const handleFilter = (specialization) => {
    setSelectedSpecialization(specialization);
  };

  // const filteredDoctors = selectedSpecialization
  //   ? doctors.filter((doctor) => doctor.specialization === selectedSpecialization)
  //   : doctors;

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start p-6"
      style={{
        background: 'linear-gradient(to bottom right, #8af2e7, #c7f7f1)', // Gradient background
      }}
    >
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-6 bg-white/60 px-4 py-2 rounded-lg shadow-lg">
        Welcome to Vaidya Setu
      </h1>

      {/* Filter Section */}
      <div className="mb-6 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <label
          htmlFor="specialization"
          className="block text-gray-800 text-lg font-semibold mb-4 text-center"
        >
          Filter by Specialization
        </label>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            id="specialization"
            onChange={(e) => handleFilter(e.target.value)}
            className="w-[180px] h-[44px] rounded-full px-4 text-gray-700 bg-[#c7f7f1] border border-teal-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-200"
          >
            <option value="">Select Specialization</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Physician">Physician</option>
            <option value="Neurology">Neurology</option>
            <option value="Allergy">Allergy</option>
          </select>
        </div>

        {/* Specialization Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {['Physician', 'Neurology', 'Pediatrics', 'Cardiology', 'Dermatology'].map((spec) => (
            <button
              key={spec}
              onClick={() => handleFilter(spec)}
              className={`px-4 py-2 rounded-full ${selectedSpecialization === spec ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-800'} font-medium border border-teal-400 hover:bg-teal-300 transition-all duration-200 shadow-sm`}
            >
              {spec}
            </button>
          ))}

          <button
            onClick={() => handleFilter('')}
            className="px-4 py-2 rounded-full bg-red-500 text-white font-medium border border-red-400 hover:bg-red-400 transition-all duration-200 shadow-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Doctor Cards */}
      <div className="flex flex-wrap justify-center gap-4 bg-white/60 p-4 rounded-xl">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))
        ) : (
          <div className="text-gray-600 text-lg mt-4">No doctors found.</div>
        )}
      </div>
    </div>
  );
}

export default Home;
