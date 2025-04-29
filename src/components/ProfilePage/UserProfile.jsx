import React, { useState } from 'react'
import BookingDetails from './BookingDetails'
import { FaUser } from "react-icons/fa";

const UserProfile = () => {
    const userData = localStorage.getItem('user');
    const user = userData ? JSON.parse(userData) : null;
    const userId = user ? user._id : null;
    console.log(userId, 'userId');


    if (!user) {
        return (
            <div className="flex items-center h-screen w-full justify-center gap-2">
                <h1 className='text-2xl font-bold'>Please login to view your profile</h1>
            </div>
        )
    }


    return (
        <div className="flex items-center h-screen w-full justify-center gap-2">
            <div className='md:flex gap-3'>
                <div className="max-w-xs">
                    <div className="bg-white shadow-xl h-full rounded-lg py-3">
                        <div className="photo-wrapper p-2 items-center grid place-items-center">
                            {
                                user && user.image ? (
                                    <img className="w-32 h-32 rounded-full mx-auto" src={user.image} alt={user.name} />
                                ) : (
                                    <FaUser className='w-32 h-32 ' />
                                )
                            }

                            {/* <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" /> */}
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user.name}</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>{user.email}</p>
                            </div>
                            <table className="text-xs my-3">
                                <tbody>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                        <td className="px-2 py-2">
                                            {
                                                user.address ? user.address : 'N/A'
                                            }
                                            <br />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 py-2">
                                            {
                                                user.phone ? user.phone : 'N/A'
                                            }
                                            <br />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">{
                                            user.email ? user.email : 'N/A'
                                        }
                                            <br /></td>
                                    </tr>
                                </tbody></table>

                            {/* <div className="text-center my-3">
                                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">Edit Profile</a>
                            </div> */}
                        </div>
                    </div>
                </div>
                <BookingDetails />
            </div>
        </div>
    )
}

export default UserProfile