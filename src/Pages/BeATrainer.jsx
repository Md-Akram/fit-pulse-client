import React, { useState } from 'react'

const skillsList = [
    'Cardio',
    'Strength Training',
    'Yoga',
    'Pilates',
    'HIIT',
    'CrossFit',
];

const BeATrainer = () => {

    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleSkillChange = (skill) => {
        if (selectedSkills.includes(skill)) {
            // If the skill is already selected, remove it
            setSelectedSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
        } else {
            // If the skill is not selected, add it
            setSelectedSkills((prevSkills) => [...prevSkills, skill]);
        }
    };

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const age = form.age.value
        const imageUrl = form.imgUrl.value
        const weeklySlots = form.weeklySlots.value
        const dailySlots = form.dailySlots.value

        const data = {
            name, email, age, imageUrl, weeklySlots, dailySlots, selectedSkills
        }
        console.log(data);

    }


    return (

        < div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" >
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Join Our Team of Fitness Experts</h1>

                <p className="mt-4 text-gray-500">
                    Empower Others, Inspire Change – Become a Certified Trainer with Us
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                {/* full name */}

                <div>
                    <label htmlFor="name" className="sr-only">Name</label>

                    <div className="relative">
                        <input
                            type="text"
                            name='name'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter full name"
                        />


                    </div>
                </div>

                {/* Email */}

                <div>
                    <label htmlFor="email" className="sr-only">Email</label>

                    <div className="relative">
                        <input
                            type="email"
                            name='email'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />


                    </div>
                </div>

                {/* Age */}

                <div>
                    <label htmlFor="age" className="sr-only">Age</label>

                    <div className="relative">
                        <input
                            type="num"
                            name='age'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter your age"
                        />
                    </div>
                </div>

                {/* image Url */}

                <div>
                    <label htmlFor="imgUrl" className="sr-only">Image</label>

                    <div className="relative">
                        <input
                            type="text"
                            name='imgUrl'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter your Image url"
                        />
                    </div>
                </div>

                {/* skills */}

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                        Skills
                    </label>
                    <div className='flex flex-row flex-wrap gap-4'>
                        {skillsList.map((skill) => (
                            <div key={skill} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id={skill}
                                    name={skill}
                                    checked={selectedSkills.includes(skill)}
                                    onChange={() => handleSkillChange(skill)}
                                    className="form-checkbox h-4 w-4 text-teal-600"
                                />
                                <label htmlFor={skill} className="ml-2 text-gray-700">
                                    {skill}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* weekly slot */}

                <div>
                    <label htmlFor="weeklySlots" className="sr-only">Available Time in a week
                    </label>

                    <div className="relative">
                        <input
                            type="num"
                            name='weeklySlots'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter your available slots in a week"
                            max='40'
                        />
                    </div>
                </div>

                {/* daily slot */}

                <div>
                    <label htmlFor="weeklySlots" className="sr-only">Available Time in a day
                    </label>

                    <div className="relative">
                        <input
                            type="num"
                            name='dailySlots'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter your available slots in a day"
                            max='8'
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">


                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-teal-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Apply
                    </button>
                </div>
            </form>
        </div >
    )
}

export default BeATrainer