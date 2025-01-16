// "use client"

// import { useState } from "react";
// import Swal from "sweetalert2";

// export default function Home() {
//   const [searchId, setSearchId] = useState("");
//   const [passengerData, setPassengerData] = useState(null);
//   const [formData, setFormData] = useState({
//     pName: "",
//     pEmail: "",
//     pPhone: "",
//     pAltPhone: "",
//     pIdCard: "",
//   });

//   const handleSearchChange = (e) => {
//     setSearchId(e.target.value);
//   };

//   const handleUpdateChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const fetchPassengerDetails = (id) => {
//     // Mocking passenger data based on ID
//     // Replace this with an API call to fetch passenger data
//     if (id === "123456") {
//       return {
//         pName: "John Doe",
//         pEmail: "john.doe@example.com",
//         pPhone: "1234567890",
//         pAltPhone: "0987654321",
//         pIdCard: "123456",
//       };
//     } else {
//       return null;
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();

//     const passenger = fetchPassengerDetails(searchId);

//     if (!passenger) {
//       Swal.fire({
//         icon: "error",
//         title: "Not Found",
//         text: `No passenger found with ID ${searchId}.`,
//       });
//       return;
//     }

//     setPassengerData(passenger);
//     setFormData(passenger);
//     Swal.fire({
//       icon: "success",
//       title: "Passenger Found",
//       text: `Passenger details for ID ${searchId} have been loaded.`,
//     });
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();

//     // Add validations here if necessary
//     Swal.fire({
//       icon: "success",
//       title: "Passenger Updated",
//       text: `Passenger details have been successfully updated!`,
//     });

//     setPassengerData(null);
//     setFormData({
//       pName: "",
//       pEmail: "",
//       pPhone: "",
//       pAltPhone: "",
//       pIdCard: "",
//     });
//     setSearchId("");
//   };

// // ======================================================================
//   const handleDeleteBus = async (e) => {
//     e.preventDefault();
//     alert(id);
//     await axios.delete('/api/passenger', { data: { id: id } });
//     Swal.fire('Success', 'Passenger deleted successfully!', 'success');
//     resetForm();
// };
// // ========================================================================

//   const handleDelete = (idCard) => {
//     // Replace with an API call to delete passenger by ID card
//     Swal.fire({
//       title: "Are you sure?",
//       text: `You are about to delete passenger with ID Card: ${idCard}`,
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Deleted!", "The passenger has been deleted.", "success");
//         setPassengerData(null);
//       }
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-red-600 text-center mb-8">Passenger Management</h1>

//       {/* Search Form */}
//       <form
//         onSubmit={handleSearchSubmit}
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
//       >
//         <h2 className="text-2xl font-semibold text-red-900 mb-4">Search Passenger by ID</h2>
//         <div>
//           <label className="block text-gray-700 text-sm font-bold mb-2">Passenger ID</label>
//           <input
//             type="text"
//             value={searchId}
//             onChange={handleSearchChange}
//             placeholder="Enter Passenger ID"
//             className="w-full border rounded-lg px-3 py-2"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//         >
//           Search Passenger
//         </button>
//       </form>

//       {/* Update Form */}
//       {passengerData && (
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
//           <h2 className="text-2xl font-semibold text-red-900 mb-4">Update Passenger</h2>
//           <form onSubmit={handleUpdateSubmit}>
//             <div className="grid grid-cols-1 gap-4">
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="pName"
//                   value={formData.pName}
//                   onChange={handleUpdateChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
//                 <input
//                   type="email"
//                   name="pEmail"
//                   value={formData.pEmail}
//                   onChange={handleUpdateChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
//                 <input
//                   type="text"
//                   name="pPhone"
//                   value={formData.pPhone}
//                   onChange={handleUpdateChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-700 text-sm font-bold mb-2">Alt Phone</label>
//                 <input
//                   type="text"
//                   name="pAltPhone"
//                   value={formData.pAltPhone}
//                   onChange={handleUpdateChange}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//             </div>
//             <div className="flex items-center justify-between mt-4">
//               <button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Update Passenger
//               </button>
//               <button
//                 type="button"
//                 onClick={() => handleDelete(formData.pIdCard)}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Delete Passenger
//               </button>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Home() {
    const [searchId, setSearchId] = useState("");
    const [passengerData, setPassengerData] = useState(null);
    const [allPassengers, setAllPassengers] = useState([]);
    const [formData, setFormData] = useState({
        pName: "",
        pEmail: "",
        pPhone: "",
        pAltPhone: "",
        pIdCard: "",
    });

    useEffect(() => {
        const fetchPassengers = async () => {
            try {
                const response = await axios.get("/api/passenger");

                if (response.status === 200) {
                    setAllPassengers(response.data);
                } else {
                    throw new Error("No data found");
                }
            } catch (error) {
                console.error("Error fetching passengers:", error.message);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to fetch passenger data. Please try again later.",
                });
            }
        };

        fetchPassengers();
    }, []);

    const handleSearchChange = (e) => {
        setSearchId(e.target.value);
    };

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        // Find passenger by ID from the fetched data
        const passenger = allPassengers.find(
            (passenger) => passenger.pIdCard === searchId
        );


        if (!passenger) {
            Swal.fire({
                icon: "error",
                title: "Not Found",
                text: `No passenger found with ID ${searchId}.`,
            });
            return;
        }

        setPassengerData(passenger);
        setFormData(passenger);
        Swal.fire({
            icon: "success",
            title: "Passenger Found",
            text: `Passenger details for ID ${searchId} have been loaded.`,
        });
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/passenger", formData);

            Swal.fire({
                icon: "success",
                title: "Passenger Updated",
                text: "Passenger details have been successfully updated!",
            });

            setPassengerData(null);
            setFormData({
                pName: "",
                pEmail: "",
                pPhone: "",
                pAltPhone: "",
                pIdCard: "",
            });
            setSearchId("");
        } catch (error) {
            console.error("Error updating passenger:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to update passenger details. Please try again later.",
            });
        }
    };

    const handleDelete = (idCard) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You are about to delete passenger with ID Card: ${idCard}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                // Make an API call to delete the passenger by ID
                Swal.fire("Deleted!", "The passenger has been deleted.", "success");
                setPassengerData(null);
            }
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-red-600 text-center mb-8">Passenger Management</h1>

            {/* Search Form */}
            <form
                onSubmit={handleSearchSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
            >
                <h2 className="text-2xl font-semibold text-red-900 mb-4">Search Passenger by ID</h2>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Passenger ID</label>
                    <input
                        type="text"
                        value={searchId}
                        onChange={handleSearchChange}
                        placeholder="Enter Passenger ID"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    Search Passenger
                </button>
            </form>

            {/* Update Form */}
            {passengerData && (
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
                    <h2 className="text-2xl font-semibold text-red-900 mb-4">Update Passenger</h2>
                    <form onSubmit={handleUpdateSubmit}>
                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="pName"
                                    value={formData.pName}
                                    onChange={handleUpdateChange}
                                    className="w-full border rounded-lg px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="pEmail"
                                    value={formData.pEmail}
                                    onChange={handleUpdateChange}
                                    className="w-full border rounded-lg px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                                <input
                                    type="text"
                                    name="pPhone"
                                    value={formData.pPhone}
                                    onChange={handleUpdateChange}
                                    className="w-full border rounded-lg px-3 py-2"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">Alt Phone</label>
                                <input
                                    type="text"
                                    name="pAltPhone"
                                    value={formData.pAltPhone}
                                    onChange={handleUpdateChange}
                                    className="w-full border rounded-lg px-3 py-2"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Update Passenger
                            </button>
                            <button
                                type="button"
                                onClick={() => handleDelete(formData.pIdCard)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Delete Passenger
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

