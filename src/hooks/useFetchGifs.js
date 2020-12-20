import {useState, useEffect} from 'react';
import {getGifs} from "../helpers/getGifs";

export const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                /* El settimeout es una prueba solo para ver como funciona el "cargando"*/
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                }, 3000);
            });

    }, [category]);


    return state;

}
