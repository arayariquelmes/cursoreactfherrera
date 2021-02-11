import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar'
import {useSelector,useDispatch} from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';
export const NoteScreen = () => {
    const {active:note} = useSelector(state => state.notes);
    const [values, handleInputChange,reset]= useForm(note);
    const {body,title} = values;
    const activeId = useRef(note.id);
    const dispatch = useDispatch();
    useEffect(() => {
        if(note.id !== activeId.current){
            activeId.current = note.id;
            reset(note)
        }
    }, [note,reset]);
    const handleDelete = ()=>{
       dispatch(startDeleting(activeId.current)); 
    }
    useEffect(() => {
        dispatch(activeNote(values.id, {...values}));
    }, [values,dispatch])
    return (
        <div className="notes__main-content">
            <NotesAppBar></NotesAppBar>
            <div className="notes__content">
                <input type="text" placeholder="blabla"
                value={title}
                name="title"
                onChange={handleInputChange}
                className="notes__title-input"></input>
                <textarea placeholder="que pasoo"
                name="body"
                onChange={handleInputChange}
                value={body}
                className="notes__textarea"></textarea>
                { note.url &&
                <div className="notes__image">
                    <img
                    alt="holi"
                    src={note.url}></img>
                </div>
                }
            </div>
            <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
    )
}
