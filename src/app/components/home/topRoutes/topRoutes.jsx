// import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';
// import { FaWifi, FaUtensils, FaTv, FaBolt } from 'react-icons/fa'; // Import specific icons

// // Reusable Option Component
// const Option = ({ icon, label }) => {
//   return (
//     <span className="flex items-center gap-2">
//       {icon} {label}
//     </span>
//   );
// };

// const TopRoutes = ({ departure, arrival, timeTravel, fare }) => {
//   return (
//     <>
//       {/* ======================================================================================================= */}
//       <div className="w-[450px] bg-gray-200 shadow-md overflow-hidden border-2 ">
//         <div className="p-6">
//           {/* Route Details */}
//           <div className="flex justify-between items-center ">
//             <div className="">
//               <p className="text-gray-500 text-center">From</p>
//               <h2 className="text-xl font-semibold text-gray-800">{departure}</h2>
//             </div>
//             <div className="flex items-center  mt-[28px]">
//               <span className="mx-2 text-gray-500">---</span>
//               <p className="text-gray-700">{timeTravel}</p>
//               <span className="mx-2 text-gray-500">---</span>
//             </div>
//             <div>
//               <p className="text-gray-500 text-center">To</p>
//               <h2 className="text-xl font-semibold text-gray-800">{arrival}</h2>
//             </div>
//           </div>
//           {/* Options Section */}
//           <div className="my-4 flex justify-between text-sm text-gray-600 border-1 border-solid">
//             <Option className="m-2" icon={<FaWifi />} label="Internet" />
//             <Option icon={<FaUtensils />} label="Snacks" />
//             <Option icon={<FaTv />} label="TV" />
//             <Option icon={<FaBolt />} label="Charging" />
//           </div>
//           {/* Price and Button */}
//           <div className="flex justify-between items-center mt-4">
//             <p className="text-lg font-bold text-gray-800">{fare}</p>
//             <button className="bg-red-600 border-2 border-red-600 text-white px-4 py-2 rounded-sm shadow font-bold hover:bg-white hover:text-red-600 duration-300">
//               {/* <FontAwesomeIcon icon={faHandPointRight} />  */}
//               Reserve Seat
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* ======================================================================================================= */}
//     </>
//   );
// };

// export default TopRoutes;

import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { FaWifi, FaUtensils, FaTv, FaBolt } from 'react-icons/fa'; // Import specific icons

// Reusable Option Component
const Option = ({ icon, label }) => {
  return (
    <span className="flex items-center gap-2">
      {icon} {label}
    </span>
  );
};

// Static routes data
const staticRoutes = [
  { departure: "Karachi", arrival: "Lahore", timeTravel: "12 hrs", fare: "3000" },
  { departure: "Lahore", arrival: "Islamabad", timeTravel: "6 hrs", fare: "2500" },
  { departure: "Karachi", arrival: "Multan", timeTravel: "8 hrs", fare: "2800" },
  { departure: "Islamabad", arrival: "Peshawar", timeTravel: "4 hrs", fare: "2000" },
  { departure: "Lahore", arrival: "Faisalabad", timeTravel: "3 hrs", fare: "1500" },
  { departure: "Karachi", arrival: "Rawalpindi", timeTravel: "14 hrs", fare: "3500" },
  { departure: "Islamabad", arrival: "Multan", timeTravel: "7 hrs", fare: "2700" },
  { departure: "Karachi", arrival: "Quetta", timeTravel: "16 hrs", fare: "4000" },
  { departure: "Lahore", arrival: "Sialkot", timeTravel: "2 hrs", fare: "1000" },
  { departure: "Karachi", arrival: "Hyderabad", timeTravel: "5 hrs", fare: "1800" }
];

const TopRoutes = () => {
  return (
    <div className="flex flex-wrap justify-start gap-6">
      {staticRoutes.map((route, index) => (
        <div key={index} className="w-[450px] bg-gray-200 shadow-md overflow-hidden border-2 mb-6">
          <div className="p-6">
            {/* Route Details */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-center">From</p>
                <h2 className="text-xl font-semibold text-gray-800">{route.departure}</h2>
              </div>
              <div className="flex items-center mt-[28px]">
                <span className="mx-2 text-gray-500">---</span>
                <p className="text-gray-700">{route.timeTravel}</p>
                <span className="mx-2 text-gray-500">---</span>
              </div>
              <div>
                <p className="text-gray-500 text-center">To</p>
                <h2 className="text-xl font-semibold text-gray-800">{route.arrival}</h2>
              </div>
            </div>

            {/* Options Section */}
            <div className="my-4 flex justify-between text-sm text-gray-600 border-1 border-solid">
              <Option className="m-2" icon={<FaWifi />} label="Internet" />
              <Option icon={<FaUtensils />} label="Snacks" />
              <Option icon={<FaTv />} label="TV" />
              <Option icon={<FaBolt />} label="Charging" />
            </div>

            {/* Price and Button */}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-bold text-gray-800">PKR {route.fare}</p> {/* Display price with "PKR" */}
              <Link href="/pages/buses">
                <button className="bg-red-600 border-2 border-red-600 text-white px-4 py-2 rounded-sm shadow font-bold hover:bg-white hover:text-red-600 duration-300">
                  <FontAwesomeIcon icon={faHandPointRight} /> Reserve Seat
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopRoutes;
