import React, {useContext,useState} from 'react';
import AuthenticationContext from '../context/AuthenticationContext';

function Slot({ slot , doctorId , date }) {
  const { startTime, endTime, status } = slot;
  const {userId} = useContext(AuthenticationContext)

  const [st,setst] = useState(status)

  console.log("userId --",userId)
  console.log("doctorId --",doctorId)
  console.log("date --",date)
  // "2025-05-12T10:00:00.000Z"
  //  2025-05-17T4:30:00.000Z
  const timeslot = `${date}T0${startTime}:00.000Z`
  console.log("timeSlot --",timeslot)

  const bookAppointment = async () => {
    alert(`Appointment Booked for ${startTime} - ${endTime}`);
    // https://vaidyasetu.onrender.com/api/appointment?doctorId=${doctorId}
    // https://vaidyasetu.onrender.com/api/appointment

    try{
      await fetch('https://vaidyasetu.onrender.com/api/appointment/',
        {
          method : 'POST',
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify({
            userId,
            doctorId,
            timeslot
            })
        }


      )

      setst(false);

    }catch(err){
      console.log(err)
    }

  };



  return (
    <div
      className="flex justify-between items-center mb-4 p-4 rounded-xl bg-white shadow-md transition transform hover:shadow-lg hover:scale-[1.02] h-[50px]"
    >
      <div className="text-gray-800 font-semibold">
        {startTime} PM - {endTime} PM
      </div>
      <button
        onClick={bookAppointment}
        disabled={!status}
        className={`w-[140px] px-4 py-2 rounded-md font-semibold text-white transition duration-200 text-center
          ${st
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-rose-400 cursor-not-allowed'}`}
      >
        {st ? 'Book' : 'Not Available'}
      </button>
    </div>
  );
}

export default Slot;
