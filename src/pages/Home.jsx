import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'
import Footer from '../components/Footer'
import Gallery from '../components/HomePage/Gallery'
import Carousel from '../components/HomePage/Carousel'

const Home = () => {
    return (
        <div className='h-full'>
            <Navbar />
            <Hero />
            {/* <Carousel/>
            <Gallery/>
            <Footer /> */}
        </div>
    )
}

export default Home