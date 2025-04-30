import React from 'react'

const About = () => {
    const tripData = [
        {
            number: '534',
            title: 'Trips Done',
        },
        {
            number: '534',
            title: 'Corporate Clients',
        },
        {
            number: '86',
            title: 'Visited Countries',
        },
        {
            number: '26',
            title: 'Team Members',
        },
    ]
    return (
        <div name='about' id='about' className="flex justify-center items-center min-h-[150px] overflow-x-hidden py-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-7xl p-4 relative">
                <div className="flex flex-col md:flex-row w-full md:w-auto gap-8 md:p-6 overflow-hidden">
                    <div
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="300" // Duration for the animation
                    >
                        <img
                            src='https://cdn.pixabay.com/photo/2023/01/11/19/53/hiking-7712678_1280.jpg' className='w-full h-full object-cover rounded-lg'
                            alt="Vision"
                            loading='lazy'
                        />
                    </div>
                    <div
                        className="flex w-full flex-col md:gap-6 items-start justify-start md:p-4 md:static md:bg-transparent text-left"
                        data-aos="fade-up" // AOS animation
                        data-aos-duration="400" // Duration for the animation
                    >
                        <h3 className="text-lg md:text-3xl font-bold">About Us</h3>
                        <p className="text-lg">
                            Destiny is more than just a travel booking platform — it's your gateway to unforgettable journeys. Whether you're dreaming of the Eiffel Tower's charm, the bustle of Times Square, or the serenity of Tokyo's gardens, Destiny helps you discover and plan the perfect escape.

                            We curate top destinations, offer exclusive deals, and make booking seamless. Our mission is to make travel accessible, personal, and inspiring — connecting you to the places you’ve always dreamed of visiting.

                            Let Destiny be your travel companion — because your next adventure is just a click away.
                        </p>
                        <div className=' h-full grid grid-cols-2 gap-2  w-full'>
                            {
                                tripData.map((trip, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center gap-2 p-4 shadow-2xl rounded">
                                        <h3 className="text-2xl md:text-4xl font-bold text-center">{trip.number}</h3>
                                        <p className="text-md text-center">{trip.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About