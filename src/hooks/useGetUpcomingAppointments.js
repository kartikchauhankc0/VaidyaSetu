import { useEffect, useState } from "react";

function useGetUpcomingAppointments(doctorId, date){
    
    const userAppointments = [
        {
          doctorName: "Dr. Priya Sharma",
          speciality: "Cardiologist",
          date: "2025-05-10",
          time: "10:00 AM",
        },
        {
          doctorName: "Dr. Anil Mehta",
          speciality: "Dermatologist",
          date: "2025-05-12",
          time: "02:30 PM",
        },
        {
          doctorName: "Dr. Kavita Rao",
          speciality: "Neurologist",
          date: "2025-05-15",
          time: "11:00 AM",
        },
        {
          doctorName: "Dr. Rajat Verma",
          speciality: "Orthopedic Surgeon",
          date: "2025-05-18",
          time: "09:00 AM",
        },
        {
          doctorName: "Dr. Sneha Kapoor",
          speciality: "Pediatrician",
          date: "2025-05-20",
          time: "04:00 PM",
        },
        {
          doctorName: "Dr. Mohan Iyer",
          speciality: "ENT Specialist",
          date: "2025-05-22",
          time: "01:00 PM",
        }
      ];
      

    const [appointments,Appointments] = useState(userAppointments);

    // useEffect(()=>{
    //     fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
    //     .then((res) => res.json())
    //     .then((res) => setData(res['rates']))

    // }, [currency]) 

    return appointments;
}

export default useGetUpcomingAppointments;