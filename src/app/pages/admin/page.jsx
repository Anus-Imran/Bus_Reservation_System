"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AdminPanel = () => {

    const [id, setId] = useState("");
    // ======================================================================
    const [buses, setBuses] = useState([]);
    // ======================================================================
    const [busname, setbusname] = useState("");
    const [busNo, setBusNo] = useState("");
    const [busFare, setBusFare] = useState("");
    const [departureCity, setDepartureCity] = useState("");
    const [arrivalCity, setArrivalCity] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    // ======================================================================

    // Reset Form
    const resetForm = () => {
        setbusname("");
        setBusNo("");
        setBusFare("");
        setDepartureCity("");
        setArrivalCity("");
        setDepartureTime("");
    };

    // Add New Bus
    const handleAddBus = async (event) => {
        event.preventDefault();
        try {
            const newBus = {
                busname,
                busNo,
                busFare,
                dprtrCity: departureCity,
                arvlCity: arrivalCity,
                dprtrTme: departureTime,
            };
            const response = await axios.post("/api/bus", newBus); // Backend API
            setBuses([...buses, response.data]);
            resetForm();
            Swal.fire("Success", "Bus added successfully!", "success");
        } catch (error) {
            Swal.fire("Error", "Failed to add the bus. Please try again.", "error");
        }
    };

    // Delete Bus
    const handleDeleteBus = async (e) => {
        e.preventDefault();
        alert(id);
        await axios.delete('/api/bus', { data: { id: id } });
        Swal.fire('Success', 'Bus deleted successfully!', 'success');
        resetForm();
    };

    // Update Bus
    const handleUpdateBus = async (e) => {
        e.preventDefault();

        await axios.patch('/api/bus', {
            id,
            busname,
            busNo,
            busFare,
            dprtrCity: departureCity,
            arvlCity: arrivalCity,
            dprtrTme: departureTime,
        });
        Swal.fire('Success', 'User updated successfully!', 'success');
        resetForm();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">

            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                    Admin Panel - Bus Management System
                </h1>

                {/* Add Bus Form */}
                <form onSubmit={handleAddBus} className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Add New Bus
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Bus Name"
                            value={busname}
                            onChange={(e) => setbusname(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Bus Number"
                            value={busNo}
                            onChange={(e) => setBusNo(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Fare"
                            value={busFare}
                            onChange={(e) => setBusFare(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Departure City"
                            value={departureCity}
                            onChange={(e) => setDepartureCity(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Arrival City"
                            value={arrivalCity}
                            onChange={(e) => setArrivalCity(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="time"
                            value={departureTime}
                            onChange={(e) => setDepartureTime(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button

                        type="submit"
                        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                        Add Bus
                    </button>
                </form>



                {/* =========================================================== */}
                {/* Bus Table */}
                <div className="overflow-x-auto">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                        Admin Panel - Bus Management System
                    </h1>

                    {/* Add Bus Form */}
                    <form onSubmit={handleDeleteBus} className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Delete Bus
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Bus ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />

                        </div>
                        <button

                            type="submit"
                            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Delete Bus
                        </button>
                    </form>

                </div>
                {/* =========================================================== */}





                {/* =========================================================== */}
                {/* Bus Table */}
                <div className="overflow-x-auto">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
                        Admin Panel - Bus Management System
                    </h1>

                    {/* Add Bus Form */}
                    <form onSubmit={handleUpdateBus} className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Update Bus
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Bus ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Bus Name"
                                value={busname}
                                onChange={(e) => setbusname(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Bus Number"
                                value={busNo}
                                onChange={(e) => setBusNo(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Fare"
                                value={busFare}
                                onChange={(e) => setBusFare(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Departure City"
                                value={departureCity}
                                onChange={(e) => setDepartureCity(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Arrival City"
                                value={arrivalCity}
                                onChange={(e) => setArrivalCity(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <input
                                type="time"
                                value={departureTime}
                                onChange={(e) => setDepartureTime(e.target.value)}
                                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button

                            type="submit"
                            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600"
                        >
                            Update Bus
                        </button>
                    </form>

                </div>
                {/* =========================================================== */}








            </div>
        </div >
    );
};

export default AdminPanel;
