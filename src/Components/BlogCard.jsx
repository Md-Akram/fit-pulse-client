import React, { useEffect, useState } from 'react'

const BlogCard = ({ article }) => {

    const { title, author, date, image, summary } = article

    return (
        <div
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"

        >

            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

            <p className="mt-2 text-xs font-medium text-white">Author : {author}</p>

            <p className="mt-2 text-sm text-gray-300">
                {summary}
            </p>

            <div className="mt-2 flex flex-col">
                <dd className="text-xs text-white">Posted</dd>
                <dt className="text-sm font-medium text-white">{date}</dt>

            </div>
        </div>
    )
}

export default BlogCard