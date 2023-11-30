import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const TrainerDetails = () => {

    useEffect(() => {
        document.title = 'Fit Pulse | Trainers Details'
    }, [])

    const { id } = useParams()
    const [data, setData] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/trainers/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='w-full sm:w-3/4 md:w-1/2 mx-auto  my-4'>
            {
                data && <article className="rounded-xl border border-gray-700  p-4">
                    <div className="flex items-center gap-4">
                        <img
                            alt="Developer"
                            src={data.profileImage}
                            className="h-16 w-16 rounded-full object-cover"
                        />

                        <div>
                            <h3 className="text-lg font-medium text-black">{data.trainerName}</h3>


                        </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                        {data.availableTimeSlots.map((slot, index) => <li key={index}>
                            <Link
                                to={`bookingPage/${slot.time}`}

                                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-600"
                            >
                                <strong className="font-medium text-black">Slot : {index + 1}</strong>
                                <p className="mt-1 text-xs font-medium text-black-300">
                                    Exercise : {slot.exerciseName}
                                </p>

                                <p className="mt-1 text-xs font-medium text-black-300">
                                    Time : {slot.time}
                                </p>
                            </Link>
                        </li>)}
                    </ul>
                </article>
            }
        </div>
    )
}

export default TrainerDetails