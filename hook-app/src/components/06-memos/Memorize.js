import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
import { Small } from './Small';
export const Memorize = () => {
    const {state:counter,increment} = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value={counter}></Small></h1>
            <hr />
            <button onClick={increment} className="btn  btn-info">
                +1
            </button>
            <button onClick={()=>setShow(!show)} className="btn btn-dark">
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
