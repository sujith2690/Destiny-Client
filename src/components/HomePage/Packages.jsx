import React, { useEffect, useState } from 'react'
import SinglePackage from './SinglePackage'
import { packageApi } from '../../APIs/authAPI'


const Packages = () => {
    const [packages, setPackages] = useState([])

    const getAllPackages = async () => {
        try {
            const { data } = await packageApi()
            console.log('----------its here')
            setPackages(data?.packages || []) // Ensure packages is always an array
        } catch (error) {
            console.error('Error fetching packages data:', error)
            setPackages([]) // Fallback to empty array in case of error
        }
    }
    useEffect(() => {
        console.log("useEffect triggered");
        getAllPackages();
    }, []);


    return (
        <section
            name='packages'
            id='packages'
            className='flex flex-col items-center justify-center px-4 py-12 md:px-8 lg:px-16 bg-white'
        >
            <div className='max-w-4xl text-center mb-10'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-700 mb-4'>Packages</h2>
                <p className='text-gray-600 text-base md:text-lg'>
                    Discover handpicked travel packages tailored for every type of traveler.
                    From relaxing getaways to adventurous escapes, each package includes
                    stays, tours, and activities — all designed to give you the best experience
                    at the best value.
                </p>
            </div>

            <div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
                {packages.length > 0 ? (
                    packages.map((item, i) => (
                        <div key={i} className='flex justify-center items-center'>
                            <SinglePackage item={item} />
                        </div>
                    ))
                ) : (
                    // <div className="col-span-full text-center text-gray-500 py-10">
                    //     No Packages Available
                    // </div>
                    <>
                        {Array(3).fill().map((_, index) => (
                            <div key={index} className="flex flex-col rounded shadow-md w-60 sm:w-72 animate-pulse h-full hover:shadow-2xl hover:border-yellow-500 dark:border-gray-700 border-4 ease-in-out duration-300">
                                <div className="h-48 rounded-t dark:bg-gray-700"></div>
                                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-900">
                                    <div className="w-full h-7 rounded dark:bg-gray-700"></div>
                                    <div className="w-full h-7 rounded dark:bg-gray-700"></div>
                                    <div className="w-3/4 h-7 rounded dark:bg-gray-700"></div>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </section>
    )
}

export default Packages
