import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../hooks/AuthProvider';
import Swal from 'sweetalert2';

const BookingPage = () => {

    const { id, slot } = useParams()
    const { currentUser } = useContext(AuthContext)
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/trainers/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleJoin = (plan, price) => {
        const info = {
            trainerName: data.trainerName,
            wantedSlot: slot,
            packageName: plan,
            price: price,
            traineeEmail: currentUser.email
        }

        console.log(info);

        fetch('http://localhost:5000/traineeApply', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json()
            })
            .then(responseData => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Applied for the slot",
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }


    if (data) {
        return <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="flow-root">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">


                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{data.trainerName}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Years of experience</dt>
                        <dd className="text-gray-700 sm:col-span-2">{data.yearsOfExperience}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Bio</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis
                            debitis explicabo doloremque impedit nesciunt dolorem facere, dolor
                            quasi veritatis quia fugit aperiam aspernatur neque molestiae labore
                            aliquam soluta architecto?
                        </dd>
                    </div>
                </dl>
            </div>
            <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 mt-4"
            >
                <div
                    className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
                >
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Silver
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                30$
                            </strong>

                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>


                    </div>

                    <div className="p-6 sm:px-8 flex flex-col justify-between">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">
                            What's included:
                        </p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Cardio and strength training equipmen </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">  Group fitness classes </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> Locker room facilities </span>
                            </li>


                        </ul>
                        <button
                            onClick={() => handleJoin("silver", 30)}
                            className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"

                        >
                            Join Now
                        </button>
                    </div>
                </div>

                <div
                    className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
                >
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Gold
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                50$
                            </strong>

                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>


                    </div>

                    <div className="p-6 sm:px-8 flex flex-col justify-between">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">
                            What's included:
                        </p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">specialized fitness classes</span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">personal training sessions </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700"> sauna, and spa facilities </span>
                            </li>


                        </ul>
                        <button
                            onClick={() => handleJoin("gold", 50)}
                            className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"

                        >
                            Join Now
                        </button>
                    </div>
                </div>

                <div
                    className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm"
                >
                    <div className="p-6 sm:px-8">
                        <h2 className="text-lg font-medium text-gray-900">
                            Platinum
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                                80$
                            </strong>

                            <span className="text-sm font-medium text-gray-700">/month</span>
                        </p>


                    </div>

                    <div className="p-6 sm:px-8 flex flex-col justify-between">
                        <p className="text-lg font-medium text-gray-900 sm:text-xl">
                            What's included:
                        </p>

                        <ul className="mt-2 space-y-2 sm:mt-4">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">Priority scheduling for personal training</span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">Exclusive access to gym events and workshops. </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-5 w-5 text-teal-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    />
                                </svg>

                                <span className="text-gray-700">Complimentary sports massage sessions.</span>
                            </li>


                        </ul>
                        <button
                            onClick={() => handleJoin("platinum", 80)}
                            className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6"

                        >
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BookingPage