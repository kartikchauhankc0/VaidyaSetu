import React from 'react';

function DoctorProfile() {
  return (
    <div className="max-w-md mx-auto mt-8 bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700">
      <h1 className="text-2xl font-bold text-teal-400 mb-4">Doctor's Profile</h1>
      <p className="mb-2"><span className="text-teal-300 font-medium">Name:</span> Dr. Jane Doe</p>
      <p className="mb-2"><span className="text-teal-300 font-medium">Specialization:</span> General Medicine</p>
      <p className="mb-2"><span className="text-teal-300 font-medium">Experience:</span> 15 Years</p>
      <p><span className="text-teal-300 font-medium">Contact:</span> 123-456-7890</p>
    </div>
  );
}

export default DoctorProfile;
