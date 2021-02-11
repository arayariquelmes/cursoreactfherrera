import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';
export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    });
    const {name,email,password}= formValues;
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    }

  
    return (
        <form onSubmit={handleSubmit}>
          <h1>FormWithCustomHook</h1>
          <hr />
          <div className="form-group">
              <input type="text"
                name="name"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                className="form-control" />
          </div>
          <div className="form-group">
              <input type="email"
                name="email"
                placeholder="Tu Email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                className="form-control" />
          </div>
          <div className="form-group">
              <input type="password"
                name="password"
                placeholder="Tu clave"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
                className="form-control" />
          </div>
          <button type="submit" className="btn btn-dark">Guardar</button>
        </form>
    )
}
