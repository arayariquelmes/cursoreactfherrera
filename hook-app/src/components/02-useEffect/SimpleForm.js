import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });
    const {name,email}= formState;
    useEffect(()=>{
        //console.log("Hey!");
    },[]);

    useEffect(()=>{
        //console.log("Form state cambia papu");
    },[formState]);
    useEffect(()=>{
        //console.log("Email cambio");
    },[email]);

    const handleInputChange = (e)=>{
        setFormState({...formState,[e.target.name]:e.target.value});
    };
    return (
        <>
          <h1>useEffect</h1>
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
          {name ==='123' && <Message />}
        </>
    )
}
