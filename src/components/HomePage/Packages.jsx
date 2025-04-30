import React, { useEffect, useState } from 'react'
import SinglePackage from './SinglePackage'
import { packageApi } from '../../APIs/authAPI'


const Packages = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        const getAllPackages = async () => {
            try {
                const { data } = await packageApi()
                setPackages(data?.packages || []) // Ensure packages is always an array
            } catch (error) {
                console.error('Error fetching packages data:', error)
                setPackages([]) // Fallback to empty array in case of error
            }
        }
        getAllPackages()
    }, [])


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
                    <div className="col-span-full text-center text-gray-500 py-10">
                        No Packages Available
                    </div>
                )}
            </div>
        </section>
    )
}

export default Packages
