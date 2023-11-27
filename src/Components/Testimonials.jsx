
import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2
                    className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                >
                    Read trusted reviews from our customers
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                    {reviews.map(singleReview => <ReviewCard key={singleReview.id} singleReview={singleReview} />)}
                </div>
            </div>
        </section>
    )
}

export default Testimonials