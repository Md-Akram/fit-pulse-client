import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { Link } from 'react-router-dom'

const LatestArticles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    return (
        <section className="bg-gray-900 text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Latest Articles</h2>

                    <p className="mt-4 text-gray-300">
                        Stay Informed and Inspired with Our Latest Blogs – Your Source for Expert Tips, Insights, and Exciting Fitness Discoveries!
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {articles.map(article => <BlogCard key={article.id} article={article} />)}


                </div>
                <div className="mt-8 flex items-center justify-center gap-4 text-center">
                    <Link
                        to="community"
                        className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
                    >
                        Explore blogs
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default LatestArticles