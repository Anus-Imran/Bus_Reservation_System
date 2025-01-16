"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// --------------------------------------------------------
import bus1 from "../../assets/images/buses/bus_1.png"
import bus2 from "../../assets/images/buses/bus_2.png"
import bus3 from "../../assets/images/buses/bus_3.png"
import bus4 from "../../assets/images/buses/bus_4.png"
import bus5 from "../../assets/images/buses/bus_5.png"
import bus6 from "../../assets/images/buses/bus_6.png"
import bus7 from "../../assets/images/buses/bus_7.png"
import axios from 'axios';
// --------------------------------------------------------

const Buses = () => {

  const busImages = [
    bus1,
    bus2,
    bus3,
    bus4,
    bus5,
    bus6,
    bus7,
  ];

  


  const [dbbus, setdbBus] = useState([]);

  // ==========================================================================================

  useEffect(() => {
    Loadingbuses();
  }, []);

  // ==========================================================================================
  const Loadingbuses = async () => {
    const response = await axios.get("/api/bus");

    console.log(response.data)

    setdbBus(response.data)

  }
  // ==========================================================================================


  return (
    <>
      {/* ============================================================================================================================== */}


      {/* ===================================================================================== */}

      <p className='my-[40px] text-3xl font-bold text-center'>
        Our <span className='text-red-600'>Transport</span>
      </p>

      {/* ===================================================================================== */}


      <section className="text-gray-600 body-font border-2 text-center px-5 py-12 mx-auto">
        <div className="flex flex-wrap justify-center -m-4">
          {/* ==========================================*/}
          {dbbus.map((item, i) => (
            <div
              key={item.id}
              className="border-1 border-gray-500 lg:w-1/4 md:w-1/3 sm:w-1/3 p-4 w-full shadow-lg m-5 rounded-lg"
            >

              <Link href={`/pages/buses/${item.id}`}>
                <Image
                  alt={item.busname}
                  className="m-auto w-[400px] h-[200px] shadow-stone-300 shadow-sm  rounded-lg hover:shadow-lg"
                  src={busImages[i % busImages.length]}
                  width={500}
                  height={500}
                  priority
                />
              </Link>

              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {item.busname}
                  </h2>
                </div>
                {/* ------------ */}
                <div>
                  <h2 className="text-gray-900 title-font text-lg font-medium flex">
                    37 <p className='text-red-600 ml-1'>Passengers</p>
                  </h2>
                </div>
              </div>
            </div>
            // {/* ==========================================*/ }
          ))}
        </div>
      </section>


      {/* ===================================================================================== */}



      {/* ============================================================================================================================== */}
    </>
  );
};

export default Buses;
