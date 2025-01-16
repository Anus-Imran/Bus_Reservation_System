// import React from 'react'
// import herobg from '@/app/assets/images/bg/herobg.png'
// import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRightArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

// const Hero = () => {
//     return (

//         <>
//             <div className='border-1 border-red-600'>
//                 <div>
//                     <p className='text-2xl font-bold text-red-700 text-center mt-[20px]'>Get Your Bus Tickets</p>
//                     <p className='text-center text-6xl font-bold mt-[50px] animate-bounce'>Find Best Bus For You !</p>
//                 </div>
//                 {/* ================================================= */}

//                 <div className="container border-1 border-red-500 h-fit p-1 card mt-10 flex justify-around items-center">

//                     <div className="border-1 shadow-custom-gray shadow-lg rounded-lg border-red-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:flex">
//                         {/* ------------------------- */}
//                         <div className="border-1 border-blue-500 flex justify-around w-[400px] md:w-[600px]">

//                             {/* box 1 */}
//                             {/* ======================================================== */}
//                             <div className='border-1 p-2 border-black w-[200px] md:w-[250px]'>
//                                 <select className='p-[10px] border-[1px] border-solid border-gray-300 w-[100%] bg-transparent rounded-lg outline-none' name="" id="">
//                                     <option defaultValue="">City 1</option>
//                                     <option defaultValue="">City 1</option>
//                                     <option defaultValue="">City 1</option>
//                                     <option defaultValue="">City 1</option>
//                                 </select>
//                             </div>
//                             {/* ======================================================== */}
//                             <div className='border-1 px-3 border-black p-1 rounded-lg w-[43px] flex justify-center items-center'>
//                                 <FontAwesomeIcon className='p-3 h-2 md:p-3 md:text-[15px] text-white rounded-lg bg-red-600' icon={faArrowRightArrowLeft} />
//                             </div>
//                             {/* ======================================================== */}
//                             <div className='border-1 p-2 border-black flex justify-center items-center w-[200px]  md:w-[250px]'>

//                                 <select className='p-[10px] border-[1px] border-solid border-gray-300 w-[100%] bg-transparent rounded-lg outline-none' name="" id="">
//                                     <option defaultValue="">City 1</option>
//                                     <option defaultValue="">City 1</option>
//                                     <option defaultValue="">City 1</option>
//                                     <option defaultValue="">City 1</option>
//                                 </select>

//                             </div>
//                             {/* ======================================================== */}


//                         </div>
//                         {/* ------------------------- */}
//                         <div className="border-1 border-blue-500 md:flex justify-between md:justify-start items-center w-[100%]  md:w-[600px]">

//                             {/* box 2 */}
//                             <div className=''>
//                                 <input className='p-[10px] border-[1px] border-solid border-gray-300 rounded-lg bg-transparent w-[100%] md:w-[450px] outline-none' type="date" name="" id="" />
//                             </div>
//                             <div className='text-center my-5 md:my-0 md:pl-3'>
//                                 <button className='p-[10px] border-[2px] border-solid border-red-600 rounded-lg text-white bg-red-600 font-bold hover:bg-transparent hover:text-red-600 transition-colors duration-400'>
//                                     <FontAwesomeIcon icon={faSearch} /> &nbsp; Search
//                                 </button>
//                             </div>

//                         </div>
//                         {/* ------------------------- */}
//                     </div>
//                 </div >

//                 {/* ================================================= */}
//                 <div>
//                     {/* <Image src={herobg} alt='herobg'/> */}
//                 </div>
//             </div >
//             <div className='border-1 border-red-600 flex justify-start items-center  flex-col h-[200px] md:h-[100vh] bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${herobg.src})` }}>
//             </div >

//         </>
//     )
// }

// export default Hero




import React from 'react'
import herobg from '@/app/assets/images/bg/herobg.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    // Static routes data
    const staticRoutes = [
        { departure: "Karachi", arrival: "Lahore" },
        { departure: "Lahore", arrival: "Islamabad" },
        { departure: "Karachi", arrival: "Multan" },
        { departure: "Islamabad", arrival: "Peshawar" },
        { departure: "Lahore", arrival: "Faisalabad" },
        { departure: "Karachi", arrival: "Rawalpindi" },
        { departure: "Islamabad", arrival: "Multan" },
        { departure: "Karachi", arrival: "Quetta" },
        { departure: "Lahore", arrival: "Sialkot" },
        { departure: "Karachi", arrival: "Hyderabad" }
    ];

    return (
        <>
            <div className='border-1 border-red-600'>
                <div>
                    <p className='text-2xl font-bold text-red-700 text-center mt-[20px]'>Get Your Bus Tickets</p>
                    <p className='text-center text-6xl font-bold mt-[50px] animate-bounce'>Find Best Bus For You !</p>
                </div>
                {/* ================================================= */}

                <div className="container border-1 border-red-500 h-fit p-1 card mt-10 flex justify-around items-center">
                    <div className="border-1 shadow-custom-gray shadow-lg rounded-lg border-red-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:flex">
                        {/* ------------------------- */}
                        <div className="border-1 border-blue-500 flex justify-around w-[400px] md:w-[600px]">

                            {/* From Select */}
                            <div className='border-1 p-2 border-black w-[200px] md:w-[250px]'>
                                <select className='p-[10px] border-[1px] border-solid border-gray-300 w-[100%] bg-transparent rounded-lg outline-none'>
                                    <option value="">Select Departure</option>
                                    {staticRoutes.map((route, index) => (
                                        <option key={index} value={route.departure}>{route.departure}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Icon */}
                            <div className='border-1 px-3 border-black p-1 rounded-lg w-[43px] flex justify-center items-center'>
                                <FontAwesomeIcon className='p-3 h-2 md:p-3 md:text-[15px] text-white rounded-lg bg-red-600' icon={faArrowRightArrowLeft} />
                            </div>

                            {/* To Select */}
                            <div className='border-1 p-2 border-black flex justify-center items-center w-[200px]  md:w-[250px]'>
                                <select className='p-[10px] border-[1px] border-solid border-gray-300 w-[100%] bg-transparent rounded-lg outline-none'>
                                    <option value="">Select Arrival</option>
                                    {staticRoutes.map((route, index) => (
                                        <option key={index} value={route.arrival}>{route.arrival}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* ------------------------- */}

                        <div className="border-1 border-blue-500 md:flex justify-between md:justify-start items-center w-[100%]  md:w-[600px]">
                            {/* Date Picker */}
                            <div className=''>
                                <input className='p-[10px] border-[1px] border-solid border-gray-300 rounded-lg bg-transparent w-[100%] md:w-[450px] outline-none' type="date" />
                            </div>

                            {/* Search Button */}
                            <div className='text-center my-5 md:my-0 md:pl-3'>
                                <button className='p-[10px] border-[2px] border-solid border-red-600 rounded-lg text-white bg-red-600 font-bold hover:bg-transparent hover:text-red-600 transition-colors duration-400'>
                                    <FontAwesomeIcon icon={faSearch} /> &nbsp; Search
                                </button>
                            </div>
                        </div>
                        {/* ------------------------- */}
                    </div>
                </div>
            </div>

            {/* Background Image */}
            <div className='border-1 border-red-600 flex justify-start items-center  flex-col h-[200px] md:h-[100vh] bg-contain bg-center bg-no-repeat' style={{ backgroundImage: `url(${herobg.src})` }}>
            </div>
        </>
    );
}

export default Hero;
