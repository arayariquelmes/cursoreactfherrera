import React, { useState } from 'react'
import './counter.css'
export const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1:10,
        counter2:20
    })
    const {counter1,counter2} = state;
    return (
        <>
        <h1>Counter1 {counter1}</h1>
        <h1>Counter2 {counter2}</h1>
        <hr />
        <button 
        onClick={()=>setCounter({...state,counter1:counter1+1})}
        className="btn btn-primary">+1</button>
        </>
    )
}
