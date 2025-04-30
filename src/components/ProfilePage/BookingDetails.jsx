import React, { useEffect, useState } from 'react';
import { bookedSlots } from '../../APIs/bookingApi';
import { useUser } from '../../context/UserContext';

const BookingDetails = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const [bookingData, setBookingData] = useState([]);
    const userId = user ? user._id : null;  

    useEffect(() => {
        const getAllBooking = async () => {
            try {
                const { data } = await bookedSlots();
                setBookingData(data?.bookings || []);
            } catch (error) {
                console.error('Error fetching booking data:', error);
                setBookingData([]);
            }
        };
        getAllBooking();
    }, []);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
                    <tr>
                        <th scope="col" className="px-4 py-3">NO:</th>
                        <th scope="col" className="px-4 py-3">Name</th>
                        <th scope="col" className="px-4 py-3">Email</th>
                        <th scope="col" className="px-4 py-3">Date</th>
                        <th scope="col" className="px-4 py-3">Members</th>
                        <th scope="col" className="px-4 py-3">Amount</th>
                        {/* <th scope="col" className="px-4 py-3">Invoice</th> */}
                    </tr>
                </thead>
                <tbody>
                    {bookingData.length > 0 ? bookingData.map((booking, i) => (
                        <tr key={i} className="bg-white  hover:bg-gray-100 text-gray-700">
                            <td className="px-4 py-3">{i + 1}</td>
                            <td className="px-4 py-3">{booking.name}</td>
                            <td className="px-4 py-3">{booking.email}</td>
                            <td className="px-4 py-3 text-center">{new Date(booking.date).toLocaleDateString()}</td>
                            <td className="px-4 py-3 text-center">{booking.people}</td>
                            <td className="px-4 py-3 text-center">₹{booking.amount}</td>
                            {/* <td className="px-4 py-3  text-center">
                                <a href="#" className="text-blue-600 hover:underline">View</a>
                            </td> */}
                        </tr>
                    )) : (
                        <tr className="bg-white border-b">
                            <td colSpan="7" className="text-center px-4 py-6 text-gray-500">
                                No Booking Found
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>

    );
};

export default BookingDetails;
