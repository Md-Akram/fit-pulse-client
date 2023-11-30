import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ClassesDetails = () => {
    const { id, exerciseName } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`http://localhost:5000/trainers/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    let requiredObj

    if (data) {
        data.availableTimeSlots.forEach((obj) => {
            if (obj.exerciseName == exerciseName) {
                requiredObj = obj
            }
        })
    }

    console.log(data, requiredObj);
    if (data && requiredObj) {
        return (
            <div className="w-10/12 mx-auto my-4">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">


                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Exercise name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{requiredObj.exerciseName}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Class time</dt>
                        <dd className="text-gray-700 sm:col-span-2">{requiredObj.time}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Trainer name</dt>
                        <dd className="text-gray-700 sm:col-span-2">{data.trainerName}</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Years of Experience</dt>
                        <dd className="text-gray-700 sm:col-span-2">{data.yearsOfExperience}</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <Link to='/trainers' replace className="mt-4 block rounded border border-teal-600 bg-teal-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 sm:mt-6">
                            Join
                        </Link>
                    </div>
                </dl>
            </div>
        )
    }

}

export default ClassesDetails