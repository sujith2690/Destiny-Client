import React, { useEffect, useState } from 'react';
import { packages } from '../../data/travelDestinations';
import { toast } from 'react-toastify';
import { bookSlot } from '../../APIs/bookingApi';
import { singlePackageApi } from '../../APIs/authAPI';

const BookingSlot = ({ closeBooking, packageId }) => {
    const [singleData, setSingleData] = useState()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        packageId: '',
        date: '',
        people: 1,
    });

    const [pricePerPerson, setPricePerPerson] = useState(0);

    useEffect(() => {
        // Load from localStorage if available
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setFormData(prev => ({
                ...prev,
                name: storedUser.name || '',
                email: storedUser.email || '',
                packageId: packageId || '', // Set the packageId from props
            }));
        }
        const getSinglePackage = async (packageId) => {
            try {
                // console.log('single*********')
                const { data } = await singlePackageApi(packageId)
                // console.log(data, '-----------single package data')
                setSingleData(data?.packages.place)
                const selectedPackage = data?.packages;
                if (selectedPackage) {
                    const numericPrice = Number(
                        selectedPackage.packageExpense?.replace(/[^0-9]/g, '') || 0
                    );
                    setPricePerPerson(numericPrice);
                }
            } catch (error) {
                console.error('Error fetching single package data:', error)
            }
        }
        getSinglePackage(packageId)

    }, [packageId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData, '------------formData')
            const { data } = await bookSlot(formData)
            // console.log(data, '-----------formData')
            toast.success(data.message)
        } catch (error) {
            console.error('Error booking slot:', error);
            toast.error("Booking failed. Please try again.");
        }

        closeBooking();
    };
    const totalCost = pricePerPerson * formData.people;

    const handleClose = (e) => {
        if (e.target.id === 'container') closeBooking();
    };

    return (
        <div
            id='container'
            onClick={handleClose}
            className='fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50'
        >
            <div className='bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg relative'>
                <button
                    onClick={closeBooking}
                    className='absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold'
                >
                    ×
                </button>

                <h2 className='text-2xl font-semibold mb-4 text-center'>Book Your Travel : {singleData}</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Travel Date</label>
                        <input
                            type='date'
                            name='date'
                            value={formData.date}
                            onChange={handleChange}
                            required
                            min={new Date().toISOString().split("T")[0]} // 👈 today's date in YYYY-MM-DD format
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md'
                        />
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-700'>Number of People</label>
                        <input
                            type='number'
                            name='people'
                            value={formData.people}
                            min='1'
                            onChange={handleChange}
                            required
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md'
                        />
                    </div>
                    <div className='text-lg font-semibold text-yellow-600'>
                        Total: ${totalCost}
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-md transition duration-300 font-semibold'
                    >
                        Book Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingSlot;
