import React, { useEffect, useState } from 'react'
import { bookedSlots } from '../../APIs/bookingApi'

const BookingDetails = () => {
    const [bookingData, setBookingData] = useState([])

    useEffect(() => {
        const getAllBooking = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'))
                const { data } = await bookedSlots()
                console.log(data, '-------------booked data-----')
                setBookingData(data?.bookings || []) // Ensure bookingData is always an array
            } catch (error) {
                console.error('Error fetching booking data:', error)
                setBookingData([]) // Fallback to empty array in case of error
            }
        }
        getAllBooking()
    }, [])

    return (
        <div className="max-w-screen-lg border-0">
            <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="p-2">
                    <h2 className='font-bold text-xl'>Booking Details</h2>
                </div>
                <div className="p-2">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        NO:
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Destination
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Invoice
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b text-gray-600 border-gray-200 hover:bg-gray-600 hover:text-white">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-gray-100">
                                        1
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-gray-100">
                                        London
                                    </th>
                                    <td className="px-6 py-4">
                                        10-10-2025
                                    </td>
                                    <td className="px-6 py-4">
                                        12.50 pm
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 hover:text-white hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b text-gray-600 border-gray-200 hover:bg-gray-600 hover:text-white">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-gray-100">
                                        2
                                    </th>
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-gray-100">
                                        London
                                    </th>
                                    <td className="px-6 py-4">
                                        10-10-2025
                                    </td>
                                    <td className="px-6 py-4">
                                        12.50 pm
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 hover:text-white hover:underline">View</a>
                                    </td>
                                </tr>
                                {bookingData.length > 0 ? bookingData.map((booking) => (
                                    <tr key={booking._id} className="bg-white border-b text-gray-600 border-gray-200 hover:bg-gray-600 hover:text-white">
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-gray-100">
                                            {booking._id} {/* Using _id as booking id */}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap hover:text-gray-100">
                                            {booking?.destination} {/* Assuming destination is a property of booking */}
                                        </th>
                                        <td className="px-6 py-4">
                                            {new Date(booking?.date).toLocaleDateString()} {/* Formatting date */}
                                        </td>
                                        <td className="px-6 py-4">
                                            {new Date(booking?.date).toLocaleTimeString()} {/* Extracting time */}
                                        </td>
                                        <td className="px-6 py-4">
                                            {booking?.price} {/* Showing the price */}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <a href="#" className="font-medium text-blue-600 hover:text-white hover:underline">View</a>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr className="bg-white border-b border-gray-200 hover:bg-gray-600 hover:text-white">
                                        <th colSpan="100%" className="text-center px-6 py-8 font-medium whitespace-nowrap text-gray-500 hover:text-white">
                                            No Booking Found
                                        </th>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails
