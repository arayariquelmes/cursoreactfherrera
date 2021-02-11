import React from 'react'
import { getFCP } from 'web-vitals';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {


    const {data:imagenes,loading} = useFetchGifs(categoria);
    
    return (
        <>
        <h3>{categoria}</h3>
        {loading&& <p>Cargando..</p>}
        <div className="card-grid">
            
            { imagenes.map(img=><GifGridItem {...img} key={img.id}></GifGridItem>)}
            
        </div>
        </>
    )
}
