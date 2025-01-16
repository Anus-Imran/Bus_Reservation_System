"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { GiSteeringWheel } from 'react-icons/gi';
import { MdOutlineChair } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from 'react-icons/ri';
import busSeatData from "@/app/assets/docs/busesdata.js"
import { LuArmchair } from "react-icons/lu";

// --------------------------------------------------------
import bus1 from "../../../assets/images/buses/bus_1.png"
import bus2 from "../../../assets/images/buses/bus_2.png"
import bus3 from "../../../assets/images/buses/bus_3.png"
import bus4 from "../../../assets/images/buses/bus_4.png"
import bus5 from "../../../assets/images/buses/bus_5.png"
import bus6 from "../../../assets/images/buses/bus_6.png"
import bus7 from "../../../assets/images/buses/bus_7.png"
// --------------------------------------------------------

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Amenities from "@/app/components/amenities/amenities";
import Link from "next/link";
import ToggleButton from "@/app/components/toggleButton/toggleButton";
import ReservationPolicy from "@/app/components/reservationPolicy/reservationPolicy";
import axios from "axios";


function Page() {

  const busImages = [
    bus1,
    bus2,
    bus3,
    bus4,
    bus5,
    bus6,
    bus7,
  ];


  // =================================================================================

  const [selectedSeats, setSelectedSeats] = useState([]);


  const [showError, setShowError] = useState(false);




  const handleSeatClick = (seatId) => {
    //if thr seat is already booked , ignore the click or disable it

    const selectedSeats = busSeatData.find((seat) => seat.id === seatId);

    if (selectedSeats.status === "booked") {
      return; // do nothing
    };

    setSelectedSeats((prevSelectedSeats) => {
      // check if the seat is already selected

      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId); //vice versa or deselect
      } else {
        // show the error if more than 10 seats are selected 
        if (prevSelectedSeats.length >= 10) {
          setShowError(true);
          alert("YOU CAN SELECT ONLY 10 SEATS .")
          return prevSelectedSeats; //Do not select the seat more than 10
        } else {
          return [...prevSelectedSeats, seatId];
        }
      }
    })

  };

  const getSeatName = (seat) => {
    if (seat.status === "booked") {
      return 'text-red-600 cursor-not-allowed' //bookes seat unavailable
    } if (selectedSeats.includes(seat.id)) {
      return 'text-yellow-600 cursor-pointer' //selected seat
    }
    return 'text-neutral-500 cursor-pointer' //available seat
  }

  // =================================================================================



  const { slug } = useParams() || {};

  const [dbItem, setdbItem] = useState({});

  useEffect(() => {
    LoadingBus();
  }, []);

  const LoadingBus = async () => {
    try {
      const response = await axios.get("/api/bus");

      if (response.status === 200) {
        const selectedItem = response.data.find((item) => item.id == slug);
        setdbItem(selectedItem || {}); // Fallback to an empty object if no item is found
      } else {
        alert("Failed to load items");
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      alert("An error occurred while loading items.");
    }
  };


  return (

    <section className="text-gray-600 body-font overflow-hidden flex justify-center items-center">
      <div className="container px-5 py-6 mx-auto flex justify-center items-center">
        <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">

          <div className="border-1 border-black flex flex-col justify-between">
            <Image
              className="md:w-[550px] md:h-[300px] w-[400px] object-cover object-center rounded-sm"
              src={bus1}
            />
            <div className="border-1 py-4 px-2 md:mt-9 border-black flex justify-between">
              <div className="w-[20%] md:w-[30%]">
                <p className="font-bold text-black">From</p>
                <input className="w-full p-[1px] md:w-[90%]  md:text-md   rounded-lg  border-1 border-gray-500" type="text" disabled value={dbItem.dprtrCity} />
              </div>
              <div className="w-[30%]  md:w-[20%]  text-[10px] lg:text-[12px] flex justify-center items-center border-2 border-dashed border-gray-600 py-1 px-1 rounded-full">
                {dbItem.dprtrTme}
              </div>
              <div className="w-[20%]  md:w-[30%] text-right">
                <p className="font-bold text-black">To</p>
                <input className="w-[100%] md:text-md rounded-lg  text-right border-1 border-gray-500" type="text" disabled value={dbItem.arvlCity} />
              </div>
            </div>
            <div className="w-full space-y-2">
              <div className="w-full flex items-center justify-between">
                <h1 className="text-lg text-neutral-600 font-medium">
                  Selected Seats
                </h1>

                <div className="bg-red-600 rounded-sm py-0.5 px-1.5 text-xs text-white font-bold uppercase">Non-Refundable</div>
              </div>

              {
                selectedSeats.length > 0
                  ?
                  <div className="w-full flex items-center gap-x-3">
                    {selectedSeats.map((seatId) => {
                      return (
                        <div key={seatId} className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold">
                          {seatId}
                        </div>

                      )
                    })}
                  </div>
                  :
                  <div className="w-full flex items-center gap-x-3">
                    <p className="text-sm text-neutral-500 font-normal">No Seat Selected</p>
                  </div>
              }



            </div>
          </div>

          {/* ============================================================================== */}
          <div className="border-1 border-black  lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {/* ----------------------------------- */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BUS NAME
            </h2>
            {/* ----------------------------------- */}
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {dbItem.busname}
            </h1>
            {/* ----------------------------------- */}
            <div className="flex mt-1 items-center pb-5 border-b-2 border-gray-100 mb-2">
              <FaStar style={{ color: "gold", fontSize: "24px" }} />
              <FaStar style={{ color: "gold", fontSize: "24px" }} />
              <FaStar style={{ color: "gold", fontSize: "24px" }} />
              <FaStar style={{ color: "gold", fontSize: "24px" }} />
              <FaStarHalfAlt style={{ color: "gold", fontSize: "24px" }} />
            </div>
            {/* ----------------------------------- */}

            {/* ----------------------------------- */}










            {/* <div className="border-1 my-2  border-black h-fit">
              <div className="border-2 border-gray-300">
                <h1 className="font-bold text-center">Click on available seats to reserve your seat .</h1>
                <div className="border-2 border-red-700 flex">
                  <div>
                      <Image className="h-[20px] w-[100px]" src={staring_img} />
                  </div>
                  <div className="rounded-lg p-2 seats flex flex-wrap">

                    {
                      (() => {
                        let elements = [];
                        for (let i = 0; i < selectedItem.capacity; i++) {
                          elements.push(
                            <LuArmchair key={i} style={{ color: "black", fontSize: "24px", margin: "5px" }} className="-rotate-90 scale-x-110" />
                          );
                        }
                        return elements;
                      })()
                    }

                  </div>
                </div>
              </div>
            </div> */}





            <div className="w-full grid grid-cols-5 gap-10">
              <div className="col-span-3 w-[650px] flex items-center justify-center shadow-sm rounded-xl p-4">
                <div className="w-full space-y-7 border-2 border-gray-300 p-[10px]">
                  <p className="text-base text-neutral-600 font-medium text-center">
                    Click on the available seats to reserve your seat .
                  </p>

                  {/* seat layout */}

                  <div className="w-full flex items-stretch gap-x-1.5">
                    <div className="w-10 h-fit">
                      <GiSteeringWheel className="text-3xl mt-4  text-red-600 -rotate-90" />
                    </div>

                    {/* seat row */}
                    <div className="flex flex-col items-center border-l-2 border-dashed pl-7">

                      <div className="flex-1 space-y-1">
                        {/* first row */}
                        <div className="w-[33vw] h-auto grid grid-cols-9 gap-x-5">
                          {busSeatData.slice(0, 9).map((seat) => (
                            <div
                              key={seat.id}
                              onClick={() => handleSeatClick(seat.id)}
                              className={`flex cursor-pointer w-[40px] h-[40px] ${getSeatName(seat)}`}
                            >
                              <h6 className="font-bold text-[13px]">{seat.id}</h6>
                              <LuArmchair className="scale-x-125 -rotate-90" />
                            </div>
                          ))}
                        </div>


                        {/* second row */}
                        <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                          <div className="w-[33vw] h-auto grid grid-cols-9 gap-x-5">
                            {busSeatData.slice(9, 18).map((seat) => (
                              <div
                                key={seat.id}
                                onClick={() => handleSeatClick(seat.id)}
                                className={`flex cursor-pointer w-[40px] h-[40px] ${getSeatName(seat)}`}
                              >
                                <h6 className="font-bold text-[13px]">{seat.id}</h6>
                                <LuArmchair className="scale-x-125 -rotate-90" />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* third row */}
                        <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                          <div className="w-[33vw] h-auto grid grid-cols-10 gap-x-5">
                            <div className="col-span-9"></div>
                            {busSeatData.slice(18, 19).map((seat) => (
                              <div
                                key={seat.id}
                                onClick={() => handleSeatClick(seat.id)}
                                className={`flex cursor-pointer w-[40px] h-[40px] ${getSeatName(seat)}`}
                              >
                                <h6 className="font-bold text-[13px]">{seat.id}</h6>
                                <LuArmchair className="scale-x-125 -rotate-90" />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* fourth row */}
                        <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                          <div className="w-[33vw] h-auto grid grid-cols-9 gap-x-5">
                            {busSeatData.slice(19, 28).map((seat) => (
                              <div
                                key={seat.id}
                                onClick={() => handleSeatClick(seat.id)}
                                className={`flex cursor-pointer w-[40px] h-[40px] ${getSeatName(seat)}`}
                              >
                                <h6 className="font-bold text-[13px]">{seat.id}</h6>
                                <LuArmchair className="scale-x-125 -rotate-90" />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* fifth row */}
                        <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                          <div className="w-[33vw] h-auto grid grid-cols-9 gap-x-5">
                            {busSeatData.slice(28, 37).map((seat) => (
                              <div
                                key={seat.id}
                                onClick={() => handleSeatClick(seat.id)}
                                className={`flex  cursor-pointer w-[40px] h-[40px] ${getSeatName(seat)}`}
                              >
                                <h6 className="font-bold text-[13px]">{seat.id}</h6>
                                <LuArmchair className="scale-x-125 -rotate-90" />
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* reservation info */}

                  <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-5">
                    <div className="flex items-center gap-x-2">
                      <MdOutlineChair className="text-xl text-neutral-500 -rotate-90" />
                      <p className="text-sm text-neutral-500 font-medium">
                        Available
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <MdOutlineChair className="text-xl text-red-600 -rotate-90" />
                      <p className="text-sm text-neutral-500 font-medium">
                        Booked
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <MdOutlineChair className="text-xl text-yellow-600 -rotate-90" />
                      <p className="text-sm text-neutral-500 font-medium">
                        Selected
                      </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <RiMoneyRupeeCircleLine className="text-xl text-neutral-500 -rotate-90" />
                      <p className="text-sm text-neutral-500 font-medium">
                        NRP. {dbItem.busFare}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>









            {/* ----------------------------------- */}


            <div className="flex ml-[22px] w-[40vw]">
              <button className="flex ml-auto text-white border-2 border-red-600 bg-red-600 hover:text-red-600 font-bold transition-all duration-300 hover:bg-transparent py-2 px-6 rounded-sm">
                <Link href="/pages/reservation">
                  Proceed to checkout
                </Link>
              </button>
            </div>

            {/* ----------------------------------- */}

          </div>
          <p className="leading-relaxed text-justify">
            {/* This is the description for {selectedItem.name}. Add any relevant
              details here. */}
            Your trusted companion for fast, reliable, and comfortable city travel. With modern amenities and punctual service, City Express ensures a smooth journey every time. Explore the city with ease—choose City Express!
            Your trusted companion for fast, reliable, and comfortable city travel. With modern amenities and punctual service, City Express ensures a smooth journey every time. Explore the city with ease—choose City Express!&nbsp;
            <span className="font-semibold"><Link href="#">Want to see more about the bus ?</Link></span>
          </p>

          {/* button  */}

          <div className="w-full text-center flex items-center justify-center gap-6 flex-col mt-[10px]">
            <ToggleButton buttonText={"See Bus Details"} buttonTextHidden={"Hide Bus Deatils"}>
              <div className="w-full space-y-10">

                {/* reservation policy and amenities  */}

                <div className="w-full grid grid-cols-7 gap-20">

                  {/* ameities  */}

                  <Amenities />

                  {/* reservation policy  */}

                  <ReservationPolicy />

                </div>

              </div>
            </ToggleButton>
          </div>


          {/* ============================================================================== */}
        </div>
      </div>

    </section>
  );
}

export default Page;
