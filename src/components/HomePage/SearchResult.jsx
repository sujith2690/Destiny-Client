import React from 'react';

const SearchResult = () => {
    return (
        <>
            {/* <div className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden w-80 max-w-md mx-auto sm:max-w-full">

                <img
                    src="https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg"
                    alt="Destination"
                    className="w-full sm:w-40 h-30 object-cover sm:rounded-l-lg"
                />
                <div className="p-3 flex flex-col justify-between">
                    <div className="space-y-1">
                        <h2 className="text-lg sm:text-xl font-semibold text-black">Donec lectus leo</h2>
                        <p className="text-sm text-gray-700">
                            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
                        </p>
                    </div>
                    <p className="text-sm text-blue-600 mt-2 hover:underline cursor-pointer">Read More</p>
                </div>
            </div> */}

            <div className="flex flex-col  bg-white shadow-md rounded-lg overflow-hidden w-full md:w-80 max-w-md mx-auto sm:max-w-full p-1">
                <div className='flex sm:flex-row flex-col w-full'>
                    <img
                        src="https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg"
                        alt="Destination"
                        className="w-full sm:w-40 h-30 object-cover rounded-lg"
                    />
                    <div className="space-y-1">
                        <h2 className="text-lg sm:text-xl font-semibold text-black">Donec lectus leo</h2>
                        <p className="text-sm text-gray-700">
                            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
                        </p>
                    </div>
                </div>
                    <p className="text-sm text-blue-600 mt-2 hover:underline cursor-pointer p-2">Read More</p>
            </div>
        </>
    );
};

export default SearchResult;
