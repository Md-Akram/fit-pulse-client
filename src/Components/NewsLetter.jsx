import React from 'react'

const NewsLetter = () => {
    return (

        < section className="bg-gray-50" >
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                        Subscribe to our newsletter
                    </h2>

                    <p className="hidden text-gray-500 sm:mt-4 sm:block">
                        Unlock Exclusive Fitness Insights, Special Offers, and the Latest Wellness Updates by Subscribing to Our Newsletter!
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <label htmlFor="name" className="sr-only">Name</label>

                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                            />
                        </div>

                        <div className="sm:flex-1">
                            <label htmlFor="email" className="sr-only">Email</label>

                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium"> Subscribe </span>
                        </button>
                    </form>
                </div>
            </div>
        </section >
    )
}

export default NewsLetter