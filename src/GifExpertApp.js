import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // Al menos 2 formas
    //     // 1)
    //     setCategories([...categories, 'Nuevo item']);
    //
    //     // 2). Tipo callback: cats es el valor del estado anterior
    //     // setCategories(cats => [...cats, 'Nuevo Item']);
    //
    //
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {/*{categories.map((cat) => {*/}
                {/*    return <li key={cat}>{cat}</li>*/}
                {/*})}*/}

                {categories.map(cat => (
                    <GifGrid
                        key={cat}
                        category={cat}
                    />
                ))}
            </ol>
        </>
    );
}




