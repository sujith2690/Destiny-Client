import React from 'react'
import { FiSearch } from 'react-icons/fi'
import SearchResult from './SearchResult'

const Hero = () => {
    return (
        <header name="home" id='home'
            className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2017/12/29/18/47/mountains-3048299_1280.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 text-white px-4 text-center w-full max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
                    Pack Your Bags and set Your <br />
                    <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold capitalize">
                        DESTINY
                    </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl mb-8">
                    Find the perfect place from our wide selection of destinations.
                </p>

                {/* Search Bar */}
                {/* <form className="w-full max-w-xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search locations..."
                            className="w-full pl-10 pr-4 py-3 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                            <FiSearch size={20} />
                        </div>
                    </div>
                </form> */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 w-full p-2">
                        <SearchResult />
                        <SearchResult />
                    </div> */}
            </div>
        </header>
    );
};

export default Hero;
