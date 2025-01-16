// "use client"

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import correct Font Awesome icon
// import Link from 'next/link';
// import Image from 'next/image';
// import login_bus from '@/app/assets/images/bg/bg-1.png';
// import logo from '@/app/assets/images/logo/logo.png';

// const Login = () => {
//   return (
//     <>
//       <div className=''>

//         <div className="flex fixed items-start  border-1 border-white">
//           <Image className="rounded-full m-2" src={logo} alt="Logo" width={50} />
//         </div>


//         <div
//           style={{ backgroundImage: `url(${login_bus.src})` }}
//           className="bg-cover h-screen flex justify-around items-center text-white"
//         >



//           <div className="m-2 md:mt-[100px] md:ml-[700px] flex flex-col w-[450px] md:w-[550px] border-1 border-white">

//             {/* Icon */}
//             <FontAwesomeIcon className="text-white text-9xl" icon={faUserCircle} />

//             {/* Form */}
//             <div className="h-[400px]">
//               <form className="flex flex-col justify-center items-center mt-[30px]">
//                 {/* Email Input */}
//                 <input
//                   type="email"
//                   placeholder="Email or Username"
//                   className=" mb-2  p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
//                   required
//                 />
//                 {/* <br /> */}
//                 {/* Password Input */}
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className=" mb-2  p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
//                   required
//                 />
//                 <br />
//                 {/* Remember Me */}
//                 <div className="  mb-2 flex justify-center items-center">
//                   <input type="checkbox" /> &nbsp;
//                   <p className="text-white">Remember me</p>
//                   <Link className="ml-[105px] text-white" href="#">
//                     Forgot Password?
//                   </Link>
//                 </div>
//                 {/* <br /> */}
//                 {/* Login Button */}
//                 <div className=' mb-2 '>
//                   <Link href="/pages/home">
//                     <button className="text-black border-4 border-solid border-white bg-white p-[8px] mr-[10px] rounded-lg hover:text-[#f0ead2] hover:bg-transparent font-bold transition-all duration-400 w-[150px]">
//                       Login
//                     </button>
//                   </Link>
//                 </div>
//                 <br />
//                 {/* Signup Link */}
//                 <div className="flex  mb-2 ">
//                   <p className="text-white">Don't have an account?</p>&nbsp;
//                   <Link className="text-white hover:text-blue-400 font-bold" href="/pages/signup">
//                     <u>Signup</u>
//                   </Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;



"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import login_bus from '@/app/assets/images/bg/bg-1.png';
import logo from '@/app/assets/images/logo/logo.png';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('userData')); // Get stored user data

    // Admin credentials
    const adminCredentials = {
      email: 'admin@example.com', // Admin email
      password: 'adminpassword',  // Admin password
    };

    console.log("Stored User:", storedUser); // Log the stored user data
    console.log("Entered Email:", loginData.email, "Entered Password:", loginData.password); // Log the entered credentials

    if (storedUser) {
      // Check if the entered credentials match the stored user credentials
      if (storedUser.email === loginData.email && storedUser.password === loginData.password) {
        // If the user is an admin
        if (loginData.email === adminCredentials.email && loginData.password === adminCredentials.password) {
          Swal.fire({
            icon: 'success',
            title: 'Admin Login Successful',
            text: 'Redirecting to admin dashboard...',
          }).then(() => {
            window.location.href = '/pages/admin'; // Redirect to admin page
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Redirecting to home page...',
          }).then(() => {
            window.location.href = '/pages/home'; // Redirect to home page
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Invalid email or password',
          text: 'Please check your credentials and try again.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'No user data found',
        text: 'Please sign up first.',
      });
    }
  };


  return (
    <div className="">

      <div className="flex fixed items-start border-1 border-white">
        <Image className="rounded-full m-2" src={logo} alt="Logo" width={50} />
      </div>

      <div
        style={{ backgroundImage: `url(${login_bus.src})` }}
        className="bg-cover h-screen flex justify-around items-center text-white"
      >
        <div className="m-2 md:mt-[100px] md:ml-[700px] flex flex-col w-[450px] md:w-[550px] border-1 border-white">
          <FontAwesomeIcon className="text-white text-9xl" icon={faUserCircle} />

          <div className="h-[400px]">
            <form className="flex flex-col justify-center items-center mt-[30px]" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                placeholder="Email or Username"
                value={loginData.email}
                onChange={handleInputChange}
                className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleInputChange}
                className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
                required
              />
              <div className="mb-2 flex justify-center items-center">
                <input type="checkbox" /> &nbsp;
                <p className="text-white">Remember me</p>
                <Link className="ml-[105px] text-white" href="#">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="text-black border-4 border-solid border-white bg-white p-[8px] mr-[10px] rounded-lg hover:text-[#f0ead2] hover:bg-transparent font-bold transition-all duration-400 w-[150px]">
                Login
              </button>
              {/* Signup Link */}
              <div className="flex  mt-2 ">
                <p className="text-white">Don't have an account?</p>&nbsp;
                <Link className="text-white hover:text-blue-400 font-bold" href="/pages/signup">
                  <u>Signup</u>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
