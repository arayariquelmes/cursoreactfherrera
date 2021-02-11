import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AgregarCategoria = ({setCategorias}) => {
    const [valorInput, setValorInput] = useState('')
    const cambiarValor = (e)=>{
        setValorInput(e.target.value);
    };
    const manejarAgregar = (e)=>{
       e.preventDefault();
       if(valorInput.trim().length > 2){
        setCategorias(cats=>[valorInput,...cats,])
        setValorInput('');
       }
    };
    return (
        <form onSubmit={manejarAgregar}>
         
            <input type="text"
                onChange={cambiarValor}
                value={valorInput} />
        </form>
    )
};

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
};