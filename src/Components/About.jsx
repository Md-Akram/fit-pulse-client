import React from 'react'

const About = () => {
    return (
        <section>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">About us</h2>
            </div>
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Party"
                            src="https://images.pexels.com/photos/669584/pexels-photo-669584.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24">

                        <p className="mt-4 text-gray-600">
                            At Fit Pulse, we're passionate about fostering a community dedicated to holistic well-being and fitness. Our mission is to empower individuals on their journey to a healthier lifestyle.We are a team of fitness enthusiasts, experts, and tech enthusiasts committed to creating an inclusive platform. Our goal is to provide you with personalized fitness solutions, catering to various interests and fitness levels.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About