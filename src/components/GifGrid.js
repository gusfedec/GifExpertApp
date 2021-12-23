import React, {useState, useEffect} from 'react'

const GifGrid = ( {category} ) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        getGifs();
    }, [])
    
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=lXUEyM1ClaSgRnkt9Zi8s3kWOLwnGJPl';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url:img.images?.downsized_medium.url
            }
        } )
        console.log(gifs);
    }

    //getGifs();

    return (
        <div>
            <h3 onClick={() => setCount(count+1) }>{category}</h3>
            <h3>{count}</h3>
        </div>
    )
}

export default GifGrid
