import { useEffect, useState } from "react";

function useGetDoctors(userId, selectedSpecialization){
    
    const doctorsList = [
        {
          doctorId: "DOC001",
          doctorName: "Dr. Emily Carter",
          specialization: "Cardiology",
          YOP: 2015,
          address: {
            street: "123 Health Blvd",
            city: "New York",
            state: "NY",
            zipCode: "10001"
          }
        },
        {
          doctorId: "DOC002",
          doctorName: "Dr. James Smith",
          specialization: "Neurology",
          YOP: 2012,
          address: {
            street: "456 Brain St",
            city: "Los Angeles",
            state: "CA",
            zipCode: "90001"
          }
        },
        {
          doctorId: "DOC003",
          doctorName: "Dr. Sophia Johnson",
          specialization: "Pediatrics",
          YOP: 2018,
          address: {
            street: "789 Kids Lane",
            city: "Chicago",
            state: "IL",
            zipCode: "60601"
          }
        },
        {
          doctorId: "DOC004",
          doctorName: "Dr. William Brown",
          specialization: "Orthopedics",
          YOP: 2010,
          address: {
            street: "321 Bone Rd",
            city: "Houston",
            state: "TX",
            zipCode: "77001"
          }
        },
        {
          doctorId: "DOC005",
          doctorName: "Dr. Olivia Davis",
          specialization: "Dermatology",
          YOP: 2016,
          address: {
            street: "654 Skin Ave",
            city: "Phoenix",
            state: "AZ",
            zipCode: "85001"
          }
        },
        {
          doctorId: "DOC006",
          doctorName: "Dr. Benjamin Wilson",
          specialization: "Oncology",
          YOP: 2011,
          address: {
            street: "987 Hope Blvd",
            city: "Philadelphia",
            state: "PA",
            zipCode: "19019"
          }
        },
        {
          doctorId: "DOC007",
          doctorName: "Dr. Mia Martinez",
          specialization: "Gynecology",
          YOP: 2017,
          address: {
            street: "246 Women St",
            city: "San Antonio",
            state: "TX",
            zipCode: "78201"
          }
        },
        {
          doctorId: "DOC008",
          doctorName: "Dr. Daniel Anderson",
          specialization: "Psychiatry",
          YOP: 2013,
          address: {
            street: "135 Mind Rd",
            city: "San Diego",
            state: "CA",
            zipCode: "92101"
          }
        },
        {
          doctorId: "DOC009",
          doctorName: "Dr. Isabella Thomas",
          specialization: "Ophthalmology",
          YOP: 2014,
          address: {
            street: "753 Vision Dr",
            city: "Dallas",
            state: "TX",
            zipCode: "75201"
          }
        },
        {
          doctorId: "DOC010",
          doctorName: "Dr. Lucas Taylor",
          specialization: "Urology",
          YOP: 2009,
          address: {
            street: "159 Kidney Ln",
            city: "San Jose",
            state: "CA",
            zipCode: "95101"
          }
        }
      ];
      
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
      if(selectedSpecialization.length == 0){
        fetch(`https://vaidyasetu.onrender.com/api/doctor?userId=${userId}`)
        .then((res) => res.json())
        .then((res) => setDoctors(res))
      }
      else{
        fetch(`https://vaidyasetu.onrender.com/api/doctor?userId=${userId}&speciality=${selectedSpecialization}`)
        .then((res) => res.json())
        .then((res) => setDoctors(res))
      }

    }, [selectedSpecialization]) 

    return doctors;
}

export default useGetDoctors;