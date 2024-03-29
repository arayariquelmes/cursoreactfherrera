import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin = ()=>{
        //Con push se mantiene la historia, con replace no
        //history.push('/');
        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type:types.login,
            payload:{name:'Seba'}
        });
        history.replace(lastPath);
    };
    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />
            <button className="btn btn-primary"
             onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
