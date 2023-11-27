import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'

const FeaturedClasses = () => {

    const [classes, setClasses] = useState([])

    useEffect(() => {
        fetch('./classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

    return (
        <section className="bg-gray-900 text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Featured Classes</h2>

                    <p className="mt-4 text-gray-300">
                        Explore Our Diverse Range of Featured Classes Tailored to Elevate Your Fitness Journey.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {classes.map(singleClass => <ClassCard key={singleClass.id} singleClass={singleClass} />)}


                </div>
            </div>
        </section>
    )
}

export default FeaturedClasses