import React from 'react';
import { useNavigate } from 'react-router';

function Doctor({ doctor }) {
  const navigate = useNavigate();

  const bookMeeting = () => {
    navigate('/appointment', {
      state: {
        doctorId: doctor._id,
        doctorName: doctor.name,
      },
    });
  };

  return (
    <div
      className="w-[340px] bg-gradient-to-br from-[#f1fffd] to-[#e9fafa] text-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer transform hover:scale-[1.01]"
    >
      <h2 className="text-2xl font-semibold mb-1">{doctor.name}</h2>
      <div className="text-sm text-gray-600 mb-2 font-medium">{doctor.speciality}</div>
      <div className="text-sm mb-2">Experience: {doctor.experience} years</div>
      <div className="text-sm mb-2">Distance: {Math.floor(doctor.distance) % 20 + 1} km</div>

      <div className="text-sm mb-4">
        Address: {doctor.address}
        </div>
      <div className="flex justify-center">
        <button
          onClick={bookMeeting}
          className="mt-2 bg-white text-teal-600 border border-teal-200 px-4 py-2 rounded-full hover:bg-teal-50 transition duration-200"
        >
          Book Meeting
        </button>
      </div>
    </div>
  );
}

export default Doctor;
