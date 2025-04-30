import React, { useState, useEffect } from 'react';
import { changeUser } from '../../APIs/userApi';
import { toast } from 'react-toastify';

const EditProfileModal = ({ closeModal,fetchUserData }) => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const userId = user ? user._id : null;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const userData = user;
        if (userData) {
            setFormData({
                name: userData.name || '',
                email: userData.email || '',
                password: '',
                phone: userData.phone || '',
                address: userData.address || ''
            });
        }
    }, []);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { name, email, phone, address } = formData;

            if (!name || !email || !phone || !address) {
                alert("All fields are required.");
                return;
            }

            // Optional: basic format validations
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phoneRegex = /^[0-9]{10}$/;

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (!phoneRegex.test(phone)) {
                alert("Phone number must be 10 digits.");
                return;
            }

            // if (password.length <= 3) {
            //     alert("Password should be at least 6 characters.");
            //     return;
            // }

            const { data } = await changeUser(formData);

            toast.success(data.message || 'Profile updated successfully!');
            localStorage.setItem('user', JSON.stringify(data.user));
            console.log(data, '-----------data')
            fetchUserData()
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error, 'Update failed');
            return;
        }
        closeModal();

    };


    return (
        <div
            onClick={closeModal}
            className='fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md'>
                <h2 className='text-2xl font-bold text-center mb-1'>Edit Profile</h2>
                <p className='text-sm text-gray-500 text-center mb-6'>Update your profile information</p>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-2'
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-2'
                    />
                    {/* <input
                        type="password"
                        name="password"
                        placeholder="New Password"
                        value={formData.password}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-2'
                    /> */}
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-2'
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-lg px-4 py-2'
                    />

                    <div className='flex justify-between gap-3 pt-4'>
                        <button
                            type="button"
                            onClick={closeModal}
                            className='w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg px-4 py-2 font-semibold'
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className='w-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-semibold'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
