import React from 'react'
import { JournalEntries } from './JournalEntries'
import {useDispatch,useSelector} from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
export const Sidebar = () => {
    const {nombre} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const handleAddEntry = (e)=>{
        dispatch(startNewNote());
    };
    const handleLogout = ()=>{
        dispatch(startLogout());
    };
    return (
        <div>
           <aside className="journal__sidebar">
               <div className="journal__sidebar-navbar">
                   <h3 className="mt-5">
                       <i className="far fa-moon"></i>
                      <span> {nombre}</span> 
                   </h3>
                   <button onClick={handleLogout} className="btn">Logout</button>
               </div>

               <div onClick={handleAddEntry} className="journal__new-entry">
                   <i className="far fa-calendar-plus fa-5x">
                  
                   </i>
                   <p className="mt-5">
                           New Entry
                       </p>
               </div>
               <JournalEntries></JournalEntries>
           </aside>
        </div>
    )
}
