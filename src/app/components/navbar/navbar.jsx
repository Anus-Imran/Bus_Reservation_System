// "use client"

// import React, { useState } from 'react';
// import Link from 'next/link';
// // import Style from "./navbar.module.css"
// import logo from "@/app/assets/images/logo/logo.png";
// import Image from 'next/image';


// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-[#a83030] text-white shadow-lg">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}

//         <div className={`flex text-2xl font-bold ${isOpen ? 'hidden' : ''} md:flex `}>
//           <Image src={logo} width={50} alt="logo" className="rounded-full h-[50px]" />
//           {/* <Link href="/">Bus Mate</Link> */}
//         </div>

//         {/* Hamburger Menu */}
//         <div className="lg:hidden">
//           <button
//             className="focus:outline-none text-white hover:text-gray-300"
//             onClick={toggleMenu}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Nav Links */}
//         <div
//           className={`lg:flex lg:items-center lg:gap-6 ${isOpen ? "block" : "hidden"
//             }`}
//         >





//           {/* <Link href="/dashboard" className="w-[100px] text-center block lg:inline-block px-3 py-2 rounded hover:bg-blue-500">Dashboard</Link>
//           <Link href="/contact" className="w-[100px] text-center  block lg:inline-block px-3 py-2 rounded hover:bg-blue-500">Contact Us</Link>
//           <Link href="/about" className="w-[100px] text-center  block lg:inline-block px-3 py-2 rounded hover:bg-blue-500">About Us</Link>
//           <Link href="/login" className="w-[100px] text-center  block lg:inline-block px-3 py-2 rounded hover:bg-red-500">Logout</Link> */}





//           {/* ======================================= */}
//           {[
//             { label: "Home", href: "/pages/home" },
//             { label: "Buses", href: "/pages/buses" },
//             { label: "Contact us", href: "/pages/contact" },
//             { label: "Admin", href: "/pages/dashboard" },
//           ].map((item, index) => (
//             <li style={{ listStyleType: 'none' }} key={index}>
//               <Link href={item.href}>
//                 <button className="transition-all duration-600 text-center m-[5px] lg:m-[0px] w-[120px] py-2 px-4 rounded-lg text-sm font-medium text-black bg-slate-100 hover:bg-red-400 hover:text-white">
//                   {item.label}
//                 </button>
//               </Link>
//             </li>
//           ))}
//           {/* ======================================= */}

//           <li style={{ listStyleType: 'none' }} >
//             <Link href="/pages/about">
//               <button className="transition-all duration-600 text-center m-[5px] lg:m-[0px] w-[120px] py-2 px-4 rounded-lg text-sm font-medium text-black bg-slate-100 hover:bg-red-400 hover:text-white">
//                 Logout
//               </button>
//             </Link>
//           </li>

//           {/* ======================================= */}

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2'; // Import SweetAlert2
import logo from "@/app/assets/images/logo/logo.png";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle Logout with SweetAlert
  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'No, keep me logged in',
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform logout action, like clearing user data or redirecting
        Swal.fire('Logged out!', 'You have been logged out.', 'success');
        // You can add actual logout code here, e.g., clearing local storage or redirecting
      }
    });
  };

  return (
    <nav className="bg-[#a83030] text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className={`flex text-2xl font-bold ${isOpen ? 'hidden' : ''} md:flex `}>
          <Image src={logo} width={50} alt="logo" className="rounded-full h-[50px]" />
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            className="focus:outline-none text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`lg:flex lg:items-center lg:gap-6 ${isOpen ? "block" : "hidden"}`}
        >
          {[{ label: "Home", href: "/pages/home" },
          { label: "Buses", href: "/pages/buses" },
          { label: "Contact us", href: "/pages/contact" },
          { label: "Admin", href: "/pages/dashboard" },
          ].map((item, index) => (
            <li style={{ listStyleType: 'none' }} key={index}>
              <Link href={item.href}>
                <button className="transition-all duration-600 text-center m-[5px] lg:m-[0px] w-[120px] py-2 px-4 rounded-lg text-sm font-medium text-black bg-slate-100 hover:bg-red-400 hover:text-white">
                  {item.label}
                </button>
              </Link>
            </li>
          ))}

          <li style={{ listStyleType: 'none' }}>
            <Link href="/pages/login">
              <button
                onClick={handleLogout}
                className="transition-all duration-600 text-center m-[5px] lg:m-[0px] w-[120px] py-2 px-4 rounded-lg text-sm font-medium text-black bg-slate-100 hover:bg-red-400 hover:text-white"
              >
                Logout
              </button>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
