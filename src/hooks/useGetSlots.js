import { useEffect, useState } from "react";

function useGetSlots(doctorId, date){
    
    const timeSlots = [
        { startTime: '2:00', endTime: '2:30', status: false },
        { startTime: '2:30', endTime: '3:00', status: false },
        { startTime: '3:00', endTime: '3:30', status: false },
        { startTime: '3:30', endTime: '4:00', status: false },
        { startTime: '4:00', endTime: '4:30', status: false },
        { startTime: '4:30', endTime: '5:00', status: false },
      ];
      
    const [slots,setSlots] = useState([]);

    useEffect(()=>{
        fetch(`https://vaidyasetu.onrender.com/api/appointment?doctorId=${doctorId}`)
        .then((res) => res.json())
        .then((res) => setSlots(res))

    }, [doctorId,date]) 

    console.log(slots)

    const appts = []
    slots?.appointments?.forEach( (obj) => {
      const crrTime = obj.timeslot.split('T')
      if(crrTime[0] == date){
        const current_time = crrTime[1].split(':');
        let hr = current_time[0];
        

        const to_push = hr + ":" + current_time[1];

        appts.push(to_push);
      }
    })

    console.log(appts)

    for(let i=0;i<6;i++){
      if( appts.includes( `0${timeSlots[i].startTime}`)){
        timeSlots[i].status = false;
      }
      else{
        timeSlots[i].status = true;
      }
    }
    

    return timeSlots;
}

export default useGetSlots;