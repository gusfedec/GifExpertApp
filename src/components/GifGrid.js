import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { GetGifs } from '../helpers/GetGifs';
//import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    /* const [images, setImages] = useState([]);

    useEffect(() => {
        GetGifs(category)
            .then(imgs => setImages(imgs));
    }, [category]) */

    const {data, loading} = useFetchGifs();

    console.log(data);
    console.log(loading);

    return (
        <>
            <h3>{category}</h3>
            { loading ? 'Cargando...' : 'Data cargada' }
           {/*  <div className="card-grid">
                {
                    images.map(img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }

            </div> */}
        </>
    )
}

export default GifGrid
