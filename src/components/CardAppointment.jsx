import React from 'react'

function CardAppointment({
    appointment
}) {
  return (
    <div className= 'bg-[#8af2e7]'>
        <div className='flex w-[100%] justify-between items-center mb-4 '>
            <div>{appointment.doctorName}</div>
            <div>{appointment.speciality}</div>
        </div>
        <div className='flex w-[100%] justify-between items-center mb-4'>
            <div>{appointment.date}</div>
            <div>{appointment.time}</div>
        </div>
    </div>
  )
}

export default CardAppointment
