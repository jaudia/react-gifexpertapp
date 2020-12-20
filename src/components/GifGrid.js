import React, {useEffect, useState} from 'react';
import {useFetchGif} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";
// import {getGifs} from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    // const [count, setCount] = useState(0);

    // const [images, setImages] = useState([]);
    //
    // useEffect(() => {
    //
    //     //Por única vez ya que esta dentro de useEffect
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    //
    // }, [category]); // aca van las dependencias para que se ejecute el useEffect
    // // EN este caso useEffect se ejecuta cada vez que cambia la categoria


    const {data: imagenes, loading} = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>

            {/*{loading ? <p>'Cargando...'</p> : 'Data cargada'}*/}

            {loading && <p>Cargando...</p>}

            <div className="card-grid">
                {/*<h3>{count}</h3>*/}
                {/*<button onClick={() => setCount(count + 1)}></button>*/}

                {/*<ol>*/}
                {/*    {images.map(objeto => <li key={objeto.id}>{objeto.title}</li>)}*/}
                {/*</ol>*/}

                {imagenes.map(objeto =>
                    <GifGridItem
                        key={objeto.id}
                        {...objeto}
                    />
                )}
            </div>
        </>
    );
}
