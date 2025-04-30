import React, { useState } from 'react'
import BookingDetails from './BookingDetails'
import { FaUser } from "react-icons/fa";
import EditProfileModal from './EditProfileModal';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const userId = user ? user._id : null;

    const [modal, setModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);
    if (!user) {
        return (
            <div className="flex items-center h-screen w-full justify-center gap-2">
                <h1 className='text-2xl font-bold text-center'>Please login to view your profile</h1>
            </div>
        )
    }
    const closeModal = () => {
        setModal(false)
    }
    const handleEditProfile = () => {
        setModal(!modal)
    }


    return (
        <div className="flex items-center h-screen w-full justify-center gap-2 bg-blue-200">
            <div className='sm:flex flex-row  gap-3 w-full justify-center '>
                <div className="max-w-xs">
                    <div className="bg-white shadow-xl h-full rounded-lg py-3 flex sm:block">
                        <div className="photo-wrapper p-2 items-center grid place-items-center">
                            {
                                user && user.image ? (
                                    <img className="w-32 h-32 rounded-full mx-auto" src={user.image} alt={user.name} />
                                ) : (
                                    <FaUser className=' w-15 h-15 sm:w-32 sm:h-32 ' />
                                )
                            }
                        </div>
                        <div className="p-2">
                            <h3 className="text-center sm:text-xl text-md text-gray-900 font-medium leading-8">{user.name}</h3>
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
                                        <td className="px-2  text-gray-500 font-semibold">Phone</td>
                                        <td className="px-2 ">
                                            {
                                                user.phone ? user.phone : 'N/A'
                                            }
                                            <br />

                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">
                                            {
                                                user.email ? user.email : 'N/A'
                                            }
                                            <br /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='flex items-center justify-between gap-2'>
                                <div className='cursor-pointer' onClick={handleEditProfile}>
                                    <p className='text-blue-500 text-[10px] text-center hover:text-blue-900'>Edit Profile</p>
                                </div>
                                <div>
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem('user')
                                            navigate('/login')
                                        }}
                                        className='bg-blue-400 rounded-xl px-2 py-1 text-white cursor-pointer'>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BookingDetails />
            </div>
            {
                modal && <EditProfileModal closeModal={closeModal} />
            }
        </div>
    )
}

export default UserProfile