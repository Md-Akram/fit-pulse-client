import React from 'react'
import { IoBarbell } from "react-icons/io5";
import { FaRunning } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbYoga } from "react-icons/tb";
import { FaGaugeHigh } from "react-icons/fa6";



const Featured = () => {
    return (
        <section className="bg-gray-900 text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your training</h2>

                    <p className="mt-4 text-gray-300">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                        aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                        saepe laborum.
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

                    >
                        <IoBarbell className="h-10 w-10 text-teal-500" />

                        <h2 className="mt-4 text-xl font-bold text-white">Body building</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

                    >

                        <GiMuscleUp className="h-10 w-10 text-teal-500" />

                        <h2 className="mt-4 text-xl font-bold text-white">Masculation</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

                    >
                        <FaRunning className="h-10 w-10 text-teal-500" />

                        <h2 className="mt-4 text-xl font-bold text-white">Fitness Running</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

                    >

                        <GiWeightLiftingUp className="h-10 w-10 text-teal-500" />

                        <h2 className="mt-4 text-xl font-bold text-white">Weight Lifting</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

                    >
                        <TbYoga className="h-10 w-10 text-teal-500" />


                        <h2 className="mt-4 text-xl font-bold text-white">Classic Yoga</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

                    >



                        <FaGaugeHigh className="h-10 w-10 text-teal-500" />


                        <h2 className="mt-4 text-xl font-bold text-white">High Intensity Training</h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
                            possimus adipisci distinctio alias voluptatum blanditiis laudantium.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured