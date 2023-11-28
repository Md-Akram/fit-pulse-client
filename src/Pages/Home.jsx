import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import Featured from '../Components/Featured'
import About from '../Components/About'
import FeaturedClasses from '../Components/FeaturedClasses'
import Testimonials from '../Components/Testimonials'
import LatestArticles from '../Components/LatestArticles'
import NewsLetter from '../Components/NewsLetter'
import Teams from '../Components/Teams'

const Home = () => {

    useEffect(() => {
        document.title = "Fit Pluse | Home";
    }, [])

    return (
        <>
            <Banner />
            <Featured />
            <About />
            <FeaturedClasses />
            <Testimonials />
            <LatestArticles />
            <NewsLetter />
            <Teams />
        </>
    )
}

export default Home