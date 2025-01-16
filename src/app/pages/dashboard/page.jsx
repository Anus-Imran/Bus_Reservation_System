import Link from "next/link";
import React from "react";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Main Content */}
            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-700">Total Bookings</h2>
                            <p className="mt-2 text-3xl font-bold text-blue-600">1,234</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-700">Buses Available</h2>
                            <p className="mt-2 text-3xl font-bold text-green-600">56</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-lg font-medium text-gray-700">Revenue</h2>
                            <p className="mt-2 text-3xl font-bold text-yellow-600">$45,678</p>
                        </div>
                    </div>

                    {/* Reservation Table */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold text-gray-800">Recent Reservations</h2>
                        <div className="mt-4">
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Name</th>
                                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Bus</th>
                                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Date</th>
                                        <th className="py-2 px-4 text-left text-sm font-medium text-gray-600">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 text-gray-700">Anus Imran</td>
                                        <td className="py-2 px-4 text-gray-700">Bus 102</td>
                                        <td className="py-2 px-4 text-gray-700">2024-12-29</td>
                                        <td className="py-2 px-4 text-green-600">Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-gray-700">Alriyan Saleem</td>
                                        <td className="py-2 px-4 text-gray-700">Bus 205</td>
                                        <td className="py-2 px-4 text-gray-700">2024-12-30</td>
                                        <td className="py-2 px-4 text-yellow-600">Pending</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-gray-700">M. Fahad</td>
                                        <td className="py-2 px-4 text-gray-700">Bus 303</td>
                                        <td className="py-2 px-4 text-gray-700">2024-12-28</td>
                                        <td className="py-2 px-4 text-red-600">Cancelled</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Actions Section */}
                    <div className="mt-8 flex space-x-4">
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">
                            <Link href="/pages/adminpassenger">
                                Manage Passengers
                            </Link>
                        </button>
                        <Link href="/pages/admin">
                            <button className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-700">
                                Manage Buses
                            </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
