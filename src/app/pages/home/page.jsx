"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faMoneyCheck, faHandHoldingDollar, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Hero from '@/app/components/home/hero/hero';
import TopRoutes from '@/app/components/home/topRoutes/topRoutes';
import { busRoutes } from '@/app/assets/docs/routes';
import Footer from '@/app/components/footer/footer';

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      {/* ===================================================================================== */}

      <p className='my-[40px] text-3xl font-bold text-center'>
        Our <span className='text-red-600'>Services</span>
      </p>

      {/* ================================================= */}

      <div className="container border-1 border-red-500 h-fit p-5 card mt-2 flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* --------------------------------------- */}
          <div className="border-1 border-blue-500">
            {/* box 1 */}
            <div className='p-[20px] rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300 hover:border-gray-300 transition-all duration-300'>
              <p className='text-2xl font-bold flex justify-center items-center'>
                <FontAwesomeIcon className='bg-gray-400 p-[10px] rounded-lg text-black' icon={faMoneyCheck} /> &nbsp;
                Secure Payment
              </p><br />
              <p className='text-center'>
                Integrate Secure Payment Gateways For Users To <br /> Pay For Their Tickets.
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="border-1 border-blue-500">
            {/* box 2 */}
            <div className='p-[20px] rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300 hover:border-gray-300 transition-all duration-300'>
              <p className='text-2xl font-bold flex justify-center items-center'>
                <FontAwesomeIcon className='bg-gray-400 p-[10px] rounded-lg text-black' icon={faHandHoldingDollar} /> &nbsp;
                Refund Policy
              </p><br />
              <p className='text-center'>
                Offer Options For The Users To Purchase Refundable <br /> Tickets With Clear Terms.
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
          <div className="border-1 border-blue-500">
            {/* box 3 */}
            <div className='p-[20px] rounded-sm cursor-pointer bg-gray-200 hover:bg-gray-300 hover:border-gray-300 transition-all duration-300'>
              <p className='text-2xl font-bold flex justify-center items-center'>
                <FontAwesomeIcon className='bg-gray-400 p-[10px] rounded-lg text-black' icon={faHeadset} /> &nbsp;
                24/7 Support
              </p><br />
              <p className='text-center'>
                Get Assistance Anytime Through Live Chat, Email, <br /> or Phone Support.
              </p>
            </div>
          </div>
          {/* --------------------------------------- */}
        </div>
      </div>

      {/* ================================================= */}

      <p className='my-[40px] text-3xl font-bold text-center'>
        Top <span className='text-red-600'>Routes</span>
      </p>

      <div className='flex justify-center items-center h-fit '>
        <div className="container border-1 border-red-500 h-fit p-5 card mt-2 flex justify-around items-center ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {busRoutes.map((v, i) => (
              <div key={i} className="border-1 border-blue-500">
                <TopRoutes
                  departure={v.departure}
                  arrival={v.arrival}
                  timeTravel={v.timeTravel}
                  fare={v.fare}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


