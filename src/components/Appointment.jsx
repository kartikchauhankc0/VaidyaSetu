import { useLocation } from "react-router";
import { useState } from 'react';
import useGetSlots from '../hooks/useGetSlots.js'
import Slot from './Slot.jsx'

function Appointment() {
  // const doctor = 'Harshit'
  const location = useLocation();
  const { doctorName, doctorId } = location.state || {};
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const slots = useGetSlots(doctorId, date);

  console.log('DoctorId:' , doctorId);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#8af2e7] to-white p-6 flex justify-center items-center">
      <div className="w-full max-w-lg p-6 rounded-3xl shadow-xl bg-gradient-to-b from-[#ffffff] to-[#8af2e7]">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Book Your Appointment</h1>

        
          <div className="block text-lg font-medium text-gray-900">
            Doctor : {doctorName}
          </div>

          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-900">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-2 w-full p-2 rounded-lg border border-gray-300"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-900"> Chooose Slot</label>
            {
              slots.map((slot) =>{
                return (
                  <Slot slot = {slot} doctorId = {doctorId} date = {date}/>
                )
              })
            }
          </div>


          
        
      </div>
    </div>
  );
}

export default Appointment;