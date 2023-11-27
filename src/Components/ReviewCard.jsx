import React from 'react'

const ReviewCard = ({ singleReview }) => {

    const { name, review, img } = singleReview

    return (
        <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
                <img
                    alt="Man"
                    src={img}
                    className="h-14 w-14 rounded-full object-cover"
                />

                <div>


                    <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
                </div>
            </div>

            <p className="mt-4 text-gray-700">
                {review}
            </p>
        </blockquote>
    )
}

export default ReviewCard