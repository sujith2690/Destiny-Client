import React, { useState } from 'react'

const BookingDetails = () => {
    const [bookingData, setBookingData] = useState([])


    return (
        <div className="max-w-  border-0">
            <div className="bg- shadow-xl rounded-lg py-3">
                <div className="p-2">
                    <h2 className='font-bold text-xl'>Booking Details</h2>
                </div>
                <div className="p-2">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        NO:
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Destination
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Time
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Invoice
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b text-gray-600  border-gray-200  hover:bg-gray-600 hover:text-white">
                                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap hover:text-gray-100 ">
                                        1
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap hover:text-gray-100 ">
                                        London
                                    </th>
                                    <td class="px-6 py-4">
                                        10-10-2025
                                    </td>
                                    <td class="px-6 py-4">
                                        12.50 pm
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 hover:text-white hover:underline">View</a>
                                    </td>
                                </tr>
                                <tr class="bg-white border-b text-gray-600  border-gray-200  hover:bg-gray-600 hover:text-white">
                                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap hover:text-gray-100 ">
                                        2
                                    </th>
                                    <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap hover:text-gray-100 ">
                                        London
                                    </th>
                                    <td class="px-6 py-4">
                                        10-10-2025
                                    </td>
                                    <td class="px-6 py-4">
                                        12.50 pm
                                    </td>
                                    <td class="px-6 py-4">
                                        $2999
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 hover:text-white hover:underline">View</a>
                                    </td>
                                </tr>
                                {
                                    bookingData.length > 0 ? bookingData?.map((booking, index) => (
                                        <tr key={index} class="bg-white border-b text-gray-600  border-gray-200  hover:bg-gray-600 hover:text-white">
                                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap hover:text-gray-100 ">
                                                {index + 1}
                                            </th>
                                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap hover:text-gray-100 ">
                                                {booking?.destination}
                                            </th>
                                            <td class="px-6 py-4">
                                                {booking?.date}
                                            </td>
                                            <td class="px-6 py-4">
                                                {booking?.time}
                                            </td>
                                            <td class="px-6 py-4">
                                                {booking?.price}
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <a href="#" class="font-medium text-blue-600 hover:text-white hover:underline">View</a>
                                            </td>
                                        </tr>
                                    )) :

                                        <tr class="bg-white border-b border-gray-200 hover:bg-gray-600 hover:text-white">
                                            <th colspan="100%" class="text-center px-6 py-8 font-medium whitespace-nowrap text-gray-500 hover:text-white">
                                                No Booking Found
                                            </th>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingDetails