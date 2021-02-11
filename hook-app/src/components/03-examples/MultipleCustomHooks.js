import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../01-useState/counter.css';
export const MultipleCustomHooks = () => {

    const {state:counter, increment} = useCounter(1);
    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //console.log(state); si existe data trae la primera 
    const {author,quote} = !!data && data[0];
    return (
        <div>
            <h1>Breaking bad quotes</h1>
            {
                loading? (
                <div className="alert alert-info text-center">
                    Loading...
                </div>):
                (
                <blockquote className="blockquote text-right">
                    <p className="mb-3">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>)
            }
            <button onClick={increment} className="btn btn-dark">Siguiente Frase</button>

        </div>
    )
}
