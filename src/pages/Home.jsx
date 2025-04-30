import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/HomePage/Hero'
import Footer from '../components/Footer'
import Gallery from '../components/HomePage/Gallery'
import Carousel from '../components/HomePage/Carousel'
import About from '../components/HomePage/About'
import Contact from '../components/HomePage/Contact'
import Service from '../components/HomePage/Service'
import Packages from '../components/HomePage/Packages'

const Home = () => {
    return (
        <div className='h-full w-full'>
            <Navbar />
            <Hero />
            <About />
            <Packages />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home