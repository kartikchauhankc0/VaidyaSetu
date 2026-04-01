import React from 'react';

function Notification() {
  const notifications = [
    {
      id: 1,
      message: 'Dr. Raj Sharma has accepted your appointment request.',
      time: 'Just now',
      type: 'success',
    },
    {
      id: 2,
      message: 'Dr. Alisha Verma has declined your appointment request.',
      time: '10 minutes ago',
      type: 'error',
    },
    {
      id: 1,
      message: 'Dr. Raj Sharma has accepted your appointment request.',
      time: 'Just now',
      type: 'success',
    },
    {
      id: 2,
      message: 'Dr. Alisha Verma has declined your appointment request.',
      time: '10 minutes ago',
      type: 'error',
    },
    {
      id: 2,
      message: 'Dr. Alisha Verma has declined your appointment request.',
      time: '10 minutes ago',
      type: 'error',
    },
    {
      id: 1,
      message: 'Dr. Raj Sharma has accepted your appointment request.',
      time: 'Just now',
      type: 'success',
    },
    {
      id: 2,
      message: 'Dr. Alisha Verma has declined your appointment request.',
      time: '10 minutes ago',
      type: 'error',
    },
  ];
  return (
    <div>Notifications</div>
  )
  // return (
  //   <div className="min-h-screen bg-gradient-to-b from-[#8af2e7] to-white p-6 flex justify-center items-center">
  //     <div className="w-full max-w-4xl p-6 rounded-3xl shadow-xl bg-white">
  //       <h1 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h1>
  //       {notifications.length === 0 ? (
  //         <p className="text-gray-700">No new notifications at the moment.</p>
  //       ) : (
  //         <ul className="space-y-4">
  //           {notifications.map((note) => (
  //             <li
  //               key={note.id}
  //               className={p-4 rounded-lg border ${
  //                 note.type === 'success'
  //                   ? 'border-green-500 bg-green-100 text-green-800'
  //                   : 'border-red-500 bg-red-100 text-red-800'
  //               }}
  //             >
  //               <p className="font-medium">{note.message}</p>
  //               <p className="text-sm text-gray-600">{note.time}</p>
  //             </li>
  //           ))}
  //         </ul>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default Notification;