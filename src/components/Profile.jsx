import React, {useContext} from 'react';
import useGetUpcomingAppointments from '../hooks/useGetUpcomingAppointments';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useLocation } from 'react-router';
import AuthenticationContext from '../context/AuthenticationContext';

function Profile() {
  const { state } = useLocation();
  const doctorName = state?.doctorName || 'John Doe'; // Fallback to 'John Doe' if not found
  const upcomingAppointments = useGetUpcomingAppointments();
  const {logout,email} = useContext(AuthenticationContext);

  console.log(email);

  return (
    <div className="grid grid-cols-3 gap-4 bg-gradient-to-b from-[#8af2e7] to-white p-4 h-[100vh]">
      {/* Left section: Appointments */}
      <div className="col-span-2 bg-white/80 bg-gradient-to-br from-white to-teal-50 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Appointments</h2>

        <div className="grid grid-cols-2 gap-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.date}
              className="bg-gradient-to-br from-white to-teal-100 border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-xl hover:border-teal-400 transform hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-lg font-bold text-teal-700 mb-3">{appointment.doctorName || 'Dr. Smith'}</h3>

              <div className="flex items-center text-sm text-gray-700 font-medium mb-1">
                <Calendar className="w-4 h-4 mr-2 text-teal-500" />
                {appointment.date}
              </div>

              <div className="flex items-center text-sm text-gray-700 font-medium mb-1">
                <Clock className="w-4 h-4 mr-2 text-teal-500" />
                {appointment.time}
              </div>

              <div className="flex items-center text-sm text-gray-700 font-medium mb-3">
                <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                {appointment.speciality || 'Clinic A'}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Right section: Profile card */}
      <div className="col-span-1 max-w-4xl w-full bg-white shadow-lg rounded-3xl overflow-hidden h-full">
        <div className="bg-teal-500 p-8 text-center">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h2 className="text-3xl text-white font-semibold mt-4">{email.split('@')[0]}</h2> {/* Dynamically set the name */}
          <p className="text-white text-lg">Software Developer</p> {/* Update this based on profession if needed */}
        </div>

        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 text-lg">Email</p>
            <p className="text-gray-600 font-medium">{email}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 text-lg">Age</p>
            <p className="text-gray-600 font-medium">21</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800 text-lg">Location</p>
            <p className="text-gray-600 font-medium">Ghaziabad</p>
          </div>
        </div>


        <div className="bg-teal-500 p-4 text-center text-white rounded-b-3xl">
          {/* <p>&copy; 2025 VaidyaSetu. All rights reserved.</p> */}
          <button onClick={logout} className="p-2 text-white font-medium bg-red-500 rounded-xl">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
