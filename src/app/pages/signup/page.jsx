// "use client"

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import correct Font Awesome icon
// import Link from 'next/link';
// import Image from 'next/image';
// import login_bus from '@/app/assets/images/bg/bg-1.png';
// import logo from '@/app/assets/images/logo/logo.png';

// const Signup = () => {
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



//           <div className="m-2 md:mt-[10px] md:ml-[700px] flex flex-col w-[450px] md:w-[550px] border-1 border-white">

//             {/* Icon */}
//             <FontAwesomeIcon className="text-white text-9xl" icon={faUserCircle} />

//             {/* Form */}
//             <div className="h-[400px]">
//               <form className="flex flex-col justify-center items-center mt-[30px]">
//                 {/* Email Input */}
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
//                   required
//                 />
//                 {/* <br /> */}
//                 <input
//                   type="text"
//                   placeholder="last Name"
//                   className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
//                   required
//                 />
//                 {/* <br /> */}
//                 <input
//                   type="email"
//                   placeholder="Email or Username"
//                   className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
//                   required
//                 />
//                 {/* <br /> */}
//                 {/* Password Input */}
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
//                   required
//                 />
//                 {/* <br /> */}
//                 {/* Remember Me */}
//                 <div className=" mb-2 flex justify-center items-center">
//                   <input type="checkbox" /> &nbsp;
//                   <p className="text-white ml-2">Agree to our privacy policy</p>
//                 </div>
//                 {/* <br /> */}
//                 {/* Login Button */}
//                 <div className='mb-2 '>
//                   <Link href="/pages/home">
//                     <button className="text-black border-4 border-solid border-white bg-white p-[8px] mr-[10px] rounded-lg hover:text-[#f0ead2] hover:bg-transparent font-bold transition-all duration-400 w-[150px]">
//                       Signup
//                     </button>
//                   </Link>
//                 </div>
//                 {/* <br /> */}
//                 {/* Signup Link */}
//                 <div className="flex mb-2 ">
//                   <p className="text-white">Already have an account?</p>&nbsp;
//                   <Link className="text-white hover:text-blue-400 font-bold" href="/pages/login">
//                     <u>login</u>
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

// export default Signup;


"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import login_bus from '@/app/assets/images/bg/bg-1.png';
import logo from '@/app/assets/images/logo/logo.png';
import { useRouter } from 'next/router'; // Import useRouter for redirection

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const router = useRouter(); // Use Router for redirection

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store user data in local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Sign up successful!');
    
    // Redirect to the login page after signup
    router.push('/pages/login');
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
        <div className="m-2 md:mt-[10px] md:ml-[700px] flex flex-col w-[450px] md:w-[550px] border-1 border-white">
          <FontAwesomeIcon className="text-white text-9xl" icon={faUserCircle} />

          <div className="h-[400px]">
            <form className="flex flex-col justify-center items-center mt-[30px]" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userData.firstName}
                onChange={handleInputChange}
                className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userData.lastName}
                onChange={handleInputChange}
                className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userData.email}
                onChange={handleInputChange}
                className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handleInputChange}
                className="mb-2 p-[10px] w-[400px] rounded-lg outline-none bg-white border-2 border-white text-black"
                required
              />
              <div className=" mb-2 flex justify-center items-center">
                <input type="checkbox" /> &nbsp;
                <p className="text-white ml-2">Agree to our privacy policy</p>
              </div>
              <Link href="/pages/login">
                <button type="submit" className="text-black border-4 border-solid border-white bg-white p-[8px] mr-[10px] rounded-lg hover:text-[#f0ead2] hover:bg-transparent font-bold transition-all duration-400 w-[150px]">
                  Signup
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
