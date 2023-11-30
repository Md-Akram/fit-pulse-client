import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const exerciseData = {
    monday: [
        { exercise: 'Squats', sets: 3, reps: 12 },
        { exercise: 'Bench Press', sets: 3, reps: 10 },
        { exercise: 'Leg Press', sets: 4, reps: 15 },
        // Add more exercises for Monday as needed
    ],
    wednesday: [
        { exercise: 'Deadlifts', sets: 4, reps: 8 },
        { exercise: 'Overhead Press', sets: 3, reps: 12 },
        { exercise: 'Pull-Ups', sets: 3, reps: 10 },
        // Add more exercises for Wednesday as needed
    ],
    friday: [
        { exercise: 'Lunges', sets: 3, reps: 15 },
        { exercise: 'Lat Pulldowns', sets: 4, reps: 12 },
        { exercise: 'Tricep Dips', sets: 3, reps: 10 },
        // Add more exercises for Friday as needed
    ],
    saturday: [
        { exercise: 'Chest Flys', sets: 3, reps: 12 },
        { exercise: 'Rows', sets: 4, reps: 10 },
        { exercise: 'Bicep Curls', sets: 3, reps: 15 },
        // Add more exercises for Saturday as needed
    ],
};

// Example: Accessing exercises for Monday
// console.log('Exercises for Monday:', exerciseData.monday);


const Classes = () => {

    const [exerciseInfo, setExerciseInfo] = useState([])
    const [allClasses, setAllClasses] = useState([])
    useEffect(() => {
        setExerciseInfo(exerciseData.monday)
        fetch('http://localhost:5000/trainers')
            .then(res => res.json())
            .then(data => {
                let arr = []
                data.forEach(trainer => {
                    trainer.availableTimeSlots.forEach(slot => {
                        arr.push({ trainer, ...slot })
                    })
                });
                setAllClasses([...arr])
            })
    }, [])


    const handleClick = (day) => {
        setExerciseInfo(exerciseData[day])

    }

    return (
        <>
            <div className='sm:w-10/12 mx-auto' >
                <h2 className='text-center font-bold text-4xl'>Weekly schedule</h2>
                <div>
                    <div className="">
                        <div className="border-b border-gray-200">
                            <nav className="-mb-px flex gap-6">
                                <button
                                    onClick={() => handleClick('monday')}
                                    className="shrink-0  border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Monday
                                </button>

                                <button
                                    onClick={() => handleClick('wednesday')}
                                    className="shrink-0  border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Wednesday
                                </button>

                                <button
                                    onClick={() => handleClick('friday')}
                                    className="shrink-0  border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Friday
                                </button>

                                <button
                                    onClick={() => handleClick('saturday')}
                                    className="shrink-0  border-gray-500 px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"

                                >
                                    Saturday
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                <div>
                    {exerciseInfo.map((info, index) => <div key={index}>
                        <div className="mt-4 block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-600"
                        >
                            <strong className="font-medium text-black">Exercise : {info.exercise}</strong>

                            <p className="mt-1 text-xs font-medium text-black-300">
                                sets : {info.sets}
                            </p>
                            <p className="mt-1 text-xs font-medium text-black-300">
                                reps : {info.reps}
                            </p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='sm:w-10/12 mx-auto' >
                <h2 className='text-center font-bold text-4xl'> All Classes</h2>
                <div>
                    {allClasses.map((info, index) => <Link to={`classDetails/${info.trainer._id}/${info.exerciseName}`} key={index}>
                        <div className="mt-4 block h-full rounded-lg border border-gray-700 p-4 hover:border-teal-600"
                        >
                            <strong className="font-medium text-black">Exercise : {info.exerciseName}</strong>

                            <p className="mt-1 text-xs font-medium text-black-300">
                                Time : {info.time}
                            </p>

                        </div>
                    </Link>)}
                </div>
            </div>
        </>
    )
}

export default Classes