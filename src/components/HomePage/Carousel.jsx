import React, { useState } from 'react';

const images = [
    "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/12/29/18/47/mountains-3048299_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/09/21/16/49/arch-7470764_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg",
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((current + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-5/6 overflow-hidden">
            {/* Image Slides */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ${index === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
                >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
            ))}

            {/* Overlay on top of all images */}
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-5 transform -translate-y-1/2 p-2 rounded-full text-9xl text-white z-20"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-5 transform -translate-y-1/2 p-2 rounded-full text-9xl text-white z-20"
            >
                ›
            </button>
        </div>

    );
};

export default Carousel;
