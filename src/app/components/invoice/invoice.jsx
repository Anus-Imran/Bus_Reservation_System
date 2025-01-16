

"use client";

import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import download from 'downloadjs';

const Invoice = () => {
    const invoiceRef = useRef(null);

    const handleDownload = async () => {
        if (invoiceRef.current === null) {
            return;
        }

        try {
            // Capture the entire content of the invoice using html2canvas
            const canvas = await html2canvas(invoiceRef.current, {
                useCORS: true,
                scrollX: 0,
                scrollY: -window.scrollY, // This ensures it captures the entire page
                width: invoiceRef.current.scrollWidth,
                height: invoiceRef.current.scrollHeight,
            });

            // Convert canvas to image URL
            const dataUrl = canvas.toDataURL('image/png');
            // Download the image
            download(dataUrl, "full-bus-mate-invoice.png");
        } catch (error) {
            console.error("Error while downloading the invoice", error);
        }
    };

    return (
        <div className="min-h-screen bg-red-500 py-10 px-5">
            <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden" ref={invoiceRef}>
                {/* Header Section */}
                <div className="text-center py-6 bg-red-600 text-white">
                    <h1 className="text-3xl font-bold">Bus Mate Service</h1>
                    <p className="text-sm">Invoice Report</p>
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-2 divide-x-2 divide-dashed divide-gray-300">
                    {/* Passenger Details */}
                    <div className="p-6">
                        <h2 className="text-lg font-bold mb-4 text-red-600">Passenger Details</h2>
                        <p><strong>Name:</strong> John Doe</p>
                        <p><strong>Contact:</strong> +123 456 7890</p>
                        <p><strong>Email:</strong> johndoe@example.com</p>
                        <p><strong>Seat Number:</strong> 12A</p>
                    </div>

                    {/* Company Details */}
                    <div className="p-6">
                        <h2 className="text-lg font-bold mb-4 text-red-600">Company Details</h2>
                        <p><strong>Company Name:</strong> BusMate</p>
                        <p><strong>Address:</strong> 123 Main Street, Cityville</p>
                        <p><strong>Contact:</strong> +987 654 3210</p>
                        <p><strong>Email:</strong> support@gtech.com</p>
                    </div>
                </div>

                {/* Bus Details Section */}
                <div className="p-6 border-t border-dashed border-gray-300">
                    <h2 className="text-lg font-bold mb-4 text-red-600">Bus Details</h2>
                    <p><strong>Total Fare:</strong> $150</p>
                    <p><strong>Number of Seats:</strong> 40</p>
                    <p><strong>Bus Number:</strong> G1234</p>
                </div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-6">
                <button
                    onClick={handleDownload}
                    className="px-6 py-2 bg-white text-red-600 font-bold rounded-lg shadow-md hover:bg-red-100"
                >
                    Download Invoice
                </button>
            </div>
        </div>
    );
};

export default Invoice;
