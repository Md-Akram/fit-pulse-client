import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Swal from 'sweetalert2';

const Community = () => {

    useEffect(() => {
        document.title = 'Fit Pulse | Community'
    }, [])

    const [data, setData] = useState([])

    useEffect(() => {
        fetcher()
        console.log(data);
    }, [])

    const fetcher = () => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setData(data))
    }

    const handleLike = (blog) => {
        const id = blog._id
        delete blog._id;
        blog.like += 1
        fetch(`http://localhost:5000/increaseBlogLike/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(blog),
        })
            .then((response) => response.json())
            .then((updatedBlog) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have liked",
                    showConfirmButton: false,
                    timer: 1500
                })
                fetcher()
            })
            .catch((error) => console.error('Error updating like count:', error));
    }


    const handleDisLike = (blog) => {
        const id = blog._id
        delete blog._id;
        blog.dislike += 1
        fetch(`http://localhost:5000/increaseBlogLike/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify(blog),
        })
            .then((response) => response.json())
            .then((updatedBlog) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have disliked",
                    showConfirmButton: false,
                    timer: 1500
                })
                fetcher()
            })
            .catch((error) => console.error('Error updating like count:', error));
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto my-4 gap-4'>
            {data && data.map((blog, index) => <article key={index} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <img
                    alt="Office"
                    src={blog.img}
                    className="h-56 w-full object-cover"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        {blog.date}
                    </time>

                    <div>
                        <h3 className="mt-0.5 text-lg text-gray-900">
                            {blog.title}
                        </h3>
                    </div>

                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                        {blog.blog}
                    </p>
                    <div className='flex flex-row justify-between mt-4'>
                        <p>likes : {blog.like}</p>
                        <p>dislikes : {blog.dislike}</p>

                    </div>
                    <div className='flex flex-row justify-between mt-4'>
                        <AiOutlineLike className='text-xl' onClick={() => handleLike(blog)} />
                        <AiOutlineDislike className='text-xl' onClick={() => handleDisLike(blog)} />
                    </div>
                </div>
            </article>)}
        </div>
    )
}

export default Community