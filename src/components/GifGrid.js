import React, { useEffect, useState } from 'react'
import { GetGifs } from '../helpers/GetGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        GetGifs(category)
            .then(imgs => setImages(imgs));
    }, [category])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }

            </div>
        </>
    )
}

export default GifGrid
