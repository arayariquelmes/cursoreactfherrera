import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';
export const Layout = () => {

    const {state:counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //console.log(state); si existe data trae la primera 
    const {quote} = !!data && data[0];
    const parrafo = useRef()
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        setBoxSize(parrafo.current.getBoundingClientRect());
       
    }, [quote])
    return (
        <div>
            <h1>Layout Effect</h1>
           
                <blockquote className="blockquote text-right">
                    <p  ref={parrafo} className="mb-3">{quote}</p>
                </blockquote>
            <button onClick={increment} className="btn btn-dark">Siguiente Frase</button>
            <pre>
                {JSON.stringify(boxSize)}
            </pre>
        </div>
    )
}
