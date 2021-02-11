import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effects.css'
export const MemoHook = () => {
    const {state:counter,increment} = useCounter(5000);
    const [show, setShow] = useState(true);
    const procesoPesado = (iteraciones=50000)=>{
        for(let i =0; i < iteraciones;++i){
            console.log("Ahi vamos!!");
        }
        return `${iteraciones} iteraciones finalizadas`;
    }
    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <p>{memoProcesoPesado}</p>
            <button onClick={increment} className="btn  btn-info">
                +1
            </button>
            <button onClick={()=>setShow(!show)} className="btn btn-dark">
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
