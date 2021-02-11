import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    const [formValues, handleInputChange,reset] = useForm({
        description:''
    });

    const handleSubmit  = (e)=>{
        e.preventDefault();
        if(formValues.description.trim().length <=1){
            return;
        }

       
        const newTodo = {
            id:new Date().getTime(),
            desc:formValues.description,
            done:false
        }
        handleAddTodo(newTodo);
        reset();
    }
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" name="description"
                        className="form-control"
                        value={formValues.description}
                        onChange={handleInputChange}
                        placeholder="Aprender .." autoComplete="off"></input>
                <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block">
                            Agregar
                </button>
            </form>
        </>
    )
}
