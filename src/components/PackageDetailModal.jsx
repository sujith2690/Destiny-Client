import React, { useEffect, useState } from 'react'
import { packages } from '../data/travelDestinations';
import { singlePackageApi } from '../APIs/authAPI';

const PackageDetailModal = ({ setModal, id, closeModal, handleBookNow }) => {
    const [singleData, setSingleData] = useState()
    const handleClose = () => {
        closeModal()
    }
    useEffect(() => {

        const getSinglePackage = async (id) => {
            try {
                console.log('single*********')
                const { data } = await singlePackageApi(id)
                console.log(data, '-----------single package data')
                setSingleData(data?.packages)
            } catch (error) {
                console.error('Error fetching single package data:', error)
            }
        }
        getSinglePackage(id)
    }, [id])
    const bookingData = () => {

    }
    return (
        <div
            id='container'
            onClick={handleClose}
            className='fixed inset-0 bg-black/15 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
            <div className='w-full h-full bg-white/15'
            // onClick={(e) => e.stopPropagation()}
            >
                <section className="w-full h-full pt-4 px-4 sm:px-8 md:px-16 lg:px-32 sm:flex flex-col items-center justify-center gap-2 bg-black/40">
                    <div className='w-full rounded-xl overflow-hidden shadow-md mb-6'>
                        <img className='w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105'
                            src={singleData?.image} alt="Temple in Tokyo" loading="lazy" />
                    </div>
                    <div className='bg-white p-2 sm:p-6 rounded-xl shadow-md w-full'>
                        <h2 className='text-2xl font-bold mb-2'>{singleData?.place}</h2>
                        <p className='text-gray-600 mb-4'>
                            {singleData?.description}
                        </p>
                        <div className='text-lg font-semibold text-yellow-600 mb-4'>{singleData?.packageExpense}</div>
                        <div className='grid place-items-center'>
                            <button
                                onClick={() => handleBookNow(singleData?._id)}
                                className='bg-yellow-400 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition-colors duration-300 font-bold'>
                                Book Now
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PackageDetailModal