import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (

        < section
            className="relative bg-[url(https://images.pexels.com/photos/1092874/pexels-photo-1092874.jpeg?auto=compress&cs=tinysrgb&w=600)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Let us find your

                        <strong className="block font-extrabold text-teal-700">
                            Fitness Home.
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        Embark on a personalized fitness journey tailored to your lifestyle, guiding you towards a healthier, happier, and more vibrant you.
                    </p>

                    <div className="mt-8 flex items-center justify-center gap-4 text-center">
                        <Link
                            to="classes"
                            className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner