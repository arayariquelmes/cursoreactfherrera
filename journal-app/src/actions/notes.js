import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = ()=>{
    return async (dispatch,getState)=>{
        const uid = getState().auth.uid;
        const newNote = {
            title:'',
            body:'',
            date:new Date().getTime()
        };
        const docRef =  await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(docRef.id,newNote));
        dispatch(addNewNote(docRef.id,newNote));
    }
}

export const addNewNote = (id,note)=>({
    type:types.notesAddNew,
    payload:{id,...note}
});
export const activeNote = (id,note)=>({
    type: types.notesSetActive,
    payload:{
        id,...note
    }
});

export const startLoadingNotes = (uid)=>{
    return async (dispatch)=>{
        const notas = await loadNotes(uid);
        dispatch(setNotes(notas));
    }
}
export const setNotes = (notas)=>({
type:types.notesLoad,
payload:notas
});

export const startSaveNote = (note)=>{
    return async (dispatch,getState)=>{
        const {uid} = getState().auth;
        if(!note.url) delete note.url;
        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id,noteToFirestore));
        Swal.fire("Saved", note.title, "success");
    };
}

export const refreshNote = (id, note)=>({
    type:types.notesUpdated,
    payload:{
        id,note:{
            id,...note
        }
    }
});

export const startUploading = (file)=>{
    return async (dispatch,getState)=>{
        const {active} = getState().notes;
        Swal.fire({
            title:'Uploading',
            text:'Plaease Wait',
            allowOutsideClick:false,
            showCloseButton:false,
            showCancelButton:false,
            onBeforeOpen: ()=>{
                Swal.showLoading();
            }
        })
        const fileUrl = await fileUpload(file);
        active.url = fileUrl;
        dispatch(startSaveNote(active));
        Swal.close();
    }
}

export const startDeleting = (id)=>{
    return async (dispatch,getState)=>{
        const uid = getState().auth.uid;
        await db.doc(`${uid}/journal/notes/${id}`).delete();
        dispatch(deleteNote(id));
    }
}

export const deleteNote = (id)=>({
    type:types.notesDelete,
    payload:id
});

export const notesLogout = ()=>({
    type:types.notesLogoutCleaning
});