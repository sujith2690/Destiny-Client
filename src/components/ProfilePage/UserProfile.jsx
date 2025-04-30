import React, { useEffect, useState } from 'react';
import BookingDetails from './BookingDetails';
import { FaUser } from "react-icons/fa";
import EditProfileModal from './EditProfileModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../Redux/Features/userSlice';
import { getUser } from '../../APIs/userApi';
// import { persistor } from '../../Redux/app/store';

const UserProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [userData, setUserData] = useState(null);
    const [modal, setModal] = useState(false);

    const userId = useSelector((state) => state.user.userDetails?._id);
    const accessToken = useSelector((state) => state.user.accessToken);

    // Redirect if not logged in
    useEffect(() => {
        if (!userId) {
            navigate('/login');
        }
    }, [userId]);

    const fetchUserData = async () => {
        try {
            const { data } = await getUser();
            setUserData(data.User);
            console.log(data.User, '------------data.User')
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };
    useEffect(() => {
        if (userId) {
            fetchUserData();
        }
    }, [userId]);

    const closeModal = () => setModal(false);
    const handleEditProfile = () => setModal(true);

    const handleLogout = () => {
        dispatch(resetUser());
        localStorage.clear();
        // persistor.purge();
        navigate('/login');
    };

    if (!userId) {
        return (
            <div className="flex items-center h-screen w-full justify-center gap-2">
                <h1 className='text-2xl font-bold text-center'>Please login to view your profile</h1>
            </div>
        );
    }

    return (
        <>
            {/* <div className='bg-blue-200 h-full text-black flex flex-col items-center justify-center gap-2'>
                <div>
                    {userData?.name}
                    {userData?.email}
                    {userData?.phone}
                    {userData?.address}
                </div>
            </div> */}

            <div className="flex items-center h-screen w-full justify-center gap-2 bg-blue-200">
                <div className='sm:flex flex-row  gap-3 w-full justify-center '>
                    <div className="max-w-xs">
                        <div className="bg-white shadow-xl h-full rounded-lg py-3 flex sm:block">
                            <div className="photo-wrapper p-2 items-center grid place-items-center">
                                {
                                    userData?.image ? (
                                        <img className="w-32 h-32 rounded-full mx-auto" src={userData.image} alt={userData.name} />
                                    ) : (
                                        <FaUser className='w-15 h-15 sm:w-32 sm:h-32' />
                                    )
                                }
                            </div>
                            <div className="p-2">
                                <h3 className="text-center sm:text-xl text-md text-gray-900 font-medium leading-8">{userData?.name}</h3>
                                <div className="text-center text-gray-400 text-xs font-semibold">
                                    <p>{userData?.email}</p>
                                </div>
                                <table className="text-xs my-3">
                                    <tbody>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                            <td className="px-2 py-2">{userData?.address || 'N/A'}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 text-gray-500 font-semibold">Phone</td>
                                            <td className="px-2">{userData?.phone ? userData?.phone : 'N/A'}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                            <td className="px-2 py-2">{userData?.email || 'N/A'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='flex items-center justify-between gap-2'>
                                    <p className='cursor-pointer text-blue-500 text-[10px] text-center hover:text-blue-900' onClick={handleEditProfile}>Edit Profile</p>
                                    <button
                                        onClick={handleLogout}
                                        className='bg-blue-400 rounded-xl px-2 py-1 text-white cursor-pointer'>
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BookingDetails />
                </div>
                {modal && <EditProfileModal fetchUserData={fetchUserData} closeModal={closeModal} />}
            </div>
        </>
    );
};

export default UserProfile;
