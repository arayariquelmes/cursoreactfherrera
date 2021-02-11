import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';
export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const handleSaveClick = ()=>{
        dispatch(startSaveNote(active));
    }
    const handlePicUpload = ()=>{
        document.querySelector('#fileSelector').click();
    };
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    };
    return (
        <div className="notes__appbar">
            <span>28 de agosto bla bla</span>
            <input type="file"
            id="fileSelector"
            name="file"
            style={{display:'none'}}
            onChange={handleFileChange}
            ></input>
            <div>
                <button onClick={handlePicUpload} className="btn">
                    Picture
                </button>
                <button onClick={handleSaveClick} className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
