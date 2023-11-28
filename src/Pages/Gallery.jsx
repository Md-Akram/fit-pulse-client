import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading';

const Gallery = () => {

    // const applicationId = 533884
    // const accessKey = 5SjI5v6BSxjYVaXqHun2fn5R7mO_UNCCj8hjA7WO7lg
    // const secretKey = 30H3hB2h8krjkDehb1Q_N43tngBgnwcT76HKelmz5HU

    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetchImages();
    }, [page]);

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {

            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight + 1 >= scrollHeight) {
            setPage((prevPage) => prevPage + 1);
        }
    };


    const fetchImages = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&per_page=12&query=gym&client_id=5SjI5v6BSxjYVaXqHun2fn5R7mO_UNCCj8hjA7WO7lg`);
            const data = await response.json();
            const imgs = data.results
            console.log(imgs)
            setImages(prevImages => [...prevImages, ...imgs]);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };


    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Gallery
                    </h2>

                    <p className="max-w-md mt-4 text-gray-500">
                        Discover a Visual Feast: Endless Wonders and Artistry in Our Infinite Gallery Collection 📸✨
                    </p>
                </header>

                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        images.map((image, index) => <li key={index}>
                            <div className="block overflow-hidden group">
                                <img
                                    src={image.urls.small}
                                    alt={image.alt_description}
                                    className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                />


                            </div>
                        </li>)
                    }

                </ul>
                {loading && <Loading />}
            </div>
        </section>
    )
}

export default Gallery