import React from 'react'
import Banner from '../Components/Banner'
import Featured from '../Components/Featured'
import About from '../Components/About'
import FeaturedClasses from '../Components/FeaturedClasses'
import Testimonials from '../Components/Testimonials'
import LatestArticles from '../Components/LatestArticles'

const Home = () => {
    return (
        <>
            <Banner />
            <Featured />
            <About />
            <FeaturedClasses />
            <Testimonials />
            <LatestArticles />
        </>
    )
}

export default Home