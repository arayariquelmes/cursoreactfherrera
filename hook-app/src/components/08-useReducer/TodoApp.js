import React, { useEffect, useReducer } from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
const initialState = [];
const init = ()=>{

    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState,init);

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);
    console.log(todos);
    const handleDelete = (todoId)=>{
        const action = {
            type:'delete',
            payload:todoId
        };
        dispatch(action);

    }

    const handleToggle = (todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }
    const handleAddTodo = (newTodo)=>{
        const action ={
            type:'add',
            payload:newTodo
        }
        dispatch(action);
    };
 
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
                </div>
                <div className="col">
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} ></TodoList>
                </div>

            </div>
        </div>
    )
}
