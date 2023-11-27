import React from 'react'

const ClassCard = ({ singleClass }) => {

    const { className, instructor, duration, intensity, schedule, description } = singleClass

    return (
        <div

            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
            <span
                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-teal-300 via-blue-500 to-teal-600"
            ></span>

            <div className="sm:flex sm:justify-between sm:gap-4">
                <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">
                        {className}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-white">Trainer : {instructor}</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-white">
                    {description}
                </p>
            </div>

            <dl className="mt-6 flex gap-2 sm:gap-4">
                <div className="flex flex-col">
                    <dd className="text-xs text-white">Intensity</dd>
                    <dt className="text-sm font-medium text-white">{intensity}</dt>

                </div>

                <div className="flex flex-col">
                    <dd className="text-xs text-white">Duration</dd>
                    <dt className="text-sm font-medium text-white">{duration}</dt>

                </div>

                <div className="flex flex-col">
                    <dd className="text-xs text-white">Schedule</dd>
                    <dt className="text-sm font-medium text-white">{schedule}</dt>

                </div>
            </dl>
        </div>
    )
}

export default ClassCard