import React from 'react'
import Banner from '../Components/Banner'
import Featured from '../Components/Featured'
import About from '../Components/About'
import FeaturedClasses from '../Components/FeaturedClasses'
import Testimonials from '../Components/Testimonials'

const Home = () => {
    return (
        <>
            <Banner />
            <Featured />
            <About />
            <FeaturedClasses />
            <Testimonials />
        </>
    )
}

export default Home