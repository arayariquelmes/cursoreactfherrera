import {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value})=>{

    const [counter, setCounter]  = useState(value);

    const aumentarContador = (e)=>{
        setCounter(counter + 1);
    }
    const reducirContador = (e)=>{
        setCounter(counter -1);
    }
    const resetear = (e)=>{
        setCounter(0);
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={aumentarContador} >+1</button>
            <button onClick={reducirContador}>-1</button>
            <button onClick={resetear}>Reset</button>
        </>
    )
};

CounterApp.propTypes={
    value: PropTypes.number.isRequired
};

export default CounterApp;